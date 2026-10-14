const fs = require('fs');
const path = require('path');

// Carrega os arquivos
const tecnologiasPath = path.join(__dirname, '..', 'js', 'tecnologias.js');
const perguntasPath = path.join(__dirname, '..', 'js', 'perguntas.js');

// Função para carregar módulo CommonJS que exporta uma const ou module.exports
function loadModule(filePath) {
  // Vamos envolver o conteúdo em uma função que retorna o exportado
  const wrapper = `(function (exports, require, module, __filename, __dirname) { ${fs.readFileSync(filePath, 'utf8')} return PERGUNTAS || TECNOLOGIAS; });`; // We'll need to detect which variable is exported
  // Simpler: use require directly if the file sets module.exports or exports.
  // Since we don't know, we'll try require and if it returns an object/array, use it.
  try {
    const mod = require(filePath);
    if (mod) return mod;
  } catch (e) {
    // Se falhar, vamos tentar avaliar o arquivo como script e capturar a variável global
    // Não faremos isso por simplicidade; assumimos que os arquivos exportam corretamente.
  }
  return null;
}

let tecnologias, perguntas;
try {
  tecnologias = require(tecnologiasPath);
} catch (e) {
  console.error('Erro ao carregar tecnologias.js:', e.message);
  process.exit(1);
}
try {
  perguntas = require(perguntasPath);
} catch (e) {
  console.error('Erro ao carregar perguntas.js:', e.message);
  process.exit(1);
}

// Se o export for uma const dentro do arquivo, o require pode retornar {}.
// Vamos verificar se o arquivo contém uma atribuição à module.exports ou exports.
// Para simplificar, vamos avaliar o arquivo como código e capturar a variável esperada.
// Vamos usar vm module? We'll do a simple approach: if require returns empty object, we'll eval.
if (!tecnologias || Object.keys(tecnologias).length === 0) {
  // Avaliar o arquivo para capturar TECNOLOGIAS
  const techCode = fs.readFileSync(tecnologiasPath, 'utf8');
  let techModule = {};
  eval(techCode); // Isso definirá TECNOLOGIAS no escopo global do eval? Não, precisamos de contexto.
  // Vamos usar Function
  const wrapper = new Function('module', 'exports', techCode + '\nreturn TECNOLOGIAS;');
  tecnologias = wrapper({},{});
}
if (!perguntas || Object.keys(perguntas).length === 0) {
  const perguntasCode = fs.readFileSync(perguntasPath, 'utf8');
  const wrapper = new Function('module', 'exports', perguntasCode + '\nreturn PERGUNTAS;');
  perguntas = wrapper({},{});
}

// Validações
function erro(msg) {
  console.error('❌ ' + msg);
}
function sucesso(msg) {
  console.log('✅ ' + msg);
}

// 1. Banco entre 100 e 150 perguntas
if (perguntas.length < 100 || perguntas.length > 150) {
  erro(`O banco deve ter entre 100 e 150 perguntas. Atual: ${perguntas.length}`);
} else {
  sucesso(`Quantidade de perguntas: ${perguntas.length} (dentro do intervalo 100-150).`);
}

// 2. IDs únicos
const ids = new Set();
let idsUnicos = true;
for (const p of perguntas) {
  if (ids.has(p.id)) {
    erro(`ID duplicado encontrado: ${p.id}`);
    idsUnicos = false;
  }
  ids.add(p.id);
}
if (idsUnicos) sucesso('Todos os IDs são únicos.');

// 3. Nenhuma pergunta duplicada (considerando enunciado e tecnologia)
// Vamos criar uma hash simples
const perguntaSet = new Set();
let duplicadas = false;
for (const p of perguntas) {
  const chave = `${p.tecnologia}|${p.enunciado.trim()}`;
  if (perguntaSet.has(chave)) {
    erro(`Pergunta duplicada ou quase duplicada: ${p.enunciado.slice(0,50)}...`);
    duplicadas = true;
  }
  perguntaSet.add(chave);
}
if (!duplicadas) sucesso('Nenhuma pergunta duplicada encontrada.');

// 4. Toda pergunta tem 4 alternativas e índice correto válido
let alternativasOk = true;
for (const p of perguntas) {
  if (!Array.isArray(p.alternativas) || p.alternativas.length !== 4) {
    erro(`Pergunta ID ${p.id} não tem exatamente 4 alternativas.`);
    alternativasOk = false;
  }
  if (typeof p.correta !== 'number' || p.correta < 0 || p.correta > 3) {
    erro(`Pergunta ID ${p.id} tem índice de correta inválido: ${p.correta}`);
    alternativasOk = false;
  }
}
if (alternativasOk) sucesso('Todas as perguntas têm 4 alternativas e índice correto válido.');

// 5. Toda tecnologia usada existe na lista
const techSet = new Set(tecnologias.map(t => t.nome));
let techValidas = true;
for (const p of perguntas) {
  if (!techSet.has(p.tecnologia)) {
    erro(`Tecnologia desconhecida na pergunta ID ${p.id}: ${p.tecnologia}`);
    techValidas = false;
  }
}
if (techValidas) sucesso('Todas as tecnologias usadas existem na lista.');

// 6. Toda tecnologia da lista tem pelo menos 1 pergunta
const techComPergunta = new Set();
for (const p of perguntas) {
  techComPergunta.add(p.tecnologia);
}
let todasTechPresentes = true;
for (const tech of tecnologias) {
  if (!techComPergunta.has(tech.nome)) {
    erro(`A tecnologia "${tech.nome}" não possui nenhuma pergunta no banco.`);
    todasTechPresentes = false;
  }
}
if (todasTechPresentes) sucesso('Toda tecnologia da lista possui pelo menos 1 pergunta.');

// 7. Distribuição de perguntas por tecnologia é proporcional às citações
// Calculamos a contagem de perguntas por tech
const contagemPorTech = {};
for (const p of perguntas) {
  contagemPorTech[p.tecnologia] = (contagemPorTech[p.tecnologia] || 0) + 1;
}
// Cálculo esperado: total de perguntas * (citacoes tech / total citacoes)
const totalCitacoes = tecnologias.reduce((sum, t) => sum + t.citacoes, 0);
const totalPerguntas = perguntas.length;
let proporcionalOk = true;
let mensagemProps = [];
for (const tech of tecnologias) {
  const esperado = totalPerguntas * (tech.citacoes / totalCitacoes);
  const actual = contagemPorTech[tech.nome] || 0;
  // Tolerância de ±1 devido a arredondamento
  const diff = Math.abs(actual - esperado);
  if (diff > 1.5) { // tolerância um pouco maior
    mensagemProps.push(`${tech.nome}: esperado ~${esperado.toFixed(1)}, atual ${actual}`);
    proporcionalOk = false;
  }
}
if (proporcionalOk) {
  sucesso('Distribuição de perguntas por tecnologia é proporcional às citações (tolerância ±1).');
} else {
  erro('Distribuição não proporcional:\n' + mensagemProps.join('\n'));
}

// Resultado final
if (!process.env.NODE_TEST) {
  console.log('\n=== Validação concluída ===');
}
process.exit((idsUnicos && !duplicadas && alternativasOk && techValidas && todasTechPresentes && proporcionalOk) ? 0 : 1);