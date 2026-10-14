/* Quiz App - Já posso programar? */
(() => {
    // Estado do quiz
    let estado = {
        perguntasSorteadas: [],
        indiceAtual: 0,
        acertos: 0,
        somaPesos: 0,
        somaPesosAcertos: 0,
        respostas: [], // {id, acertou, peso}
        tecnologias: typeof TECNOLOGIAS !== 'undefined' ? TECNOLOGIAS : [],
        perguntas: typeof PERGUNTAS !== 'undefined' ? PERGUNTAS : []
    };

    // Mapeamento de tecnologia para área
    const AREAS = {
        // Back-end/Python
        Python: 'back-end',
        Django: 'back-end',
        FastAPI: 'back-end',
        Flask: 'back-end',
        'Node.js': 'back-end',
        'Express.js': 'back-end',
        'C#': 'back-end',
        Java: 'back-end',
        'ASP.NET': 'back-end',
        // Front-end
        HTML: 'front-end',
        CSS: 'front-end',
        JavaScript: 'front-end',
        TypeScript: 'front-end',
        React: 'front-end',
        Angular: 'front-end',
        Vue: 'front-end', // not in list but keep
        jQuery: 'front-end',
        Bootstrap: 'front-end',
        Figma: 'front-end',
        // Banco de dados
        SQL: 'banco',
        PostgreSQL: 'banco',
        MySQL: 'banco',
        MongoDB: 'banco',
        Redis: 'banco',
        Oracle: 'banco',
        'PL/SQL': 'banco',
        NoSQL: 'banco',
        'SQL Server': 'banco',
        // Ferramentas e processos
        Git: 'ferramentas',
        GitHub: 'ferramentas',
        Docker: 'ferramentas',
        'Docker Compose': 'ferramentas',
        'CI/CD': 'ferramentas',
        Scrum: 'ferramentas',
        Kanban: 'ferramentas',
        Maven: 'ferramentas',
        n8n: 'ferramentas',
        Jest: 'ferramentas',
        Playwright: 'ferramentas',
        Selenium: 'ferramentas', // not in list
        AWS: 'ferramentas',
        Azure: 'ferramentas',
        GCP: 'ferramentas',
        Ajax: 'ferramentas',
        'APIs REST': 'ferramentas',
        JSON: 'ferramentas',
        // Outros que talvez não se encaixam exatamente, mas atribuímos a ferramentas
        Alembic: 'ferramentas',
        Elementor: 'ferramentas',
        Pydantic: 'ferramentas',
        Redux: 'ferramentas',
        RPA: 'ferramentas',
        WordPress: 'ferramentas',
        'Next.js': 'front-end', // poderia ser front-end
    };

    // Elementos DOM
    const elementos = {
        telaInicial: document.getElementById('tela-inicial'),
        telaPergunta: document.getElementById('tela-pergunta'),
        telaResultado: document.getElementById('tela-resultado'),
        btnComecar: document.getElementById('btn-comecar'),
        btnProxima: document.getElementById('btn-proxima'),
        btnNaoSei: document.getElementById('btn-nao-sei'),
        enunciado: document.getElementById('enunciado'),
        alternativasContainer: document.getElementById('alternativas'),
        feedback: document.getElementById('feedback'),
        barraProgresso: document.getElementById('barra-progresso'),
        contador: document.getElementById('contador'),
        circuloResultado: document.getElementById('circulo-resultado'),
        percentual: document.getElementById('percentual'),
        mensagemResultado: document.getElementById('mensagem-resultado'),
        areasResumo: document.getElementById('areas-resumo'),
        sugestoEstudo: document.getElementById('sugestao-estudo'),
        btnRefazer: document.getElementById('btn-refazer'),
        btnInicio: document.getElementById('btn-inicio')
    };
    console.log('Elementos:', elementos);

    // Inicialização
    function init() {
        console.log('init called');
        elementos.btnComecar.addEventListener('click', iniciarQuiz);
        elementos.btnProxima.addEventListener('click', proximaPergunta);
        elementos.btnNaoSei.addEventListener('click', responderNaoSei);
        elementos.btnRefazer.addEventListener('click', iniciarQuiz);
        elementos.btnInicio.addEventListener('click', voltarInicio);
        // Teclas 1-4 para alternativas, Enter para avançar
        document.addEventListener('keydown', teclaPress);
        mostrarTela('tela-inicial');
    }

    // Mapa de IDs (com hífen) para as chaves do objeto elementos (camelCase)
    const idParaChave = {
        'tela-inicial': 'telaInicial',
        'tela-pergunta': 'telaPergunta',
        'tela-resultado': 'telaResultado'
    };

    function mostrarTela(id) {
        console.log('mostrarTela called with', id);
        Object.values(elementos).forEach(el => {
            if (el && el.classList) el.classList.remove('ativa');
        });
        const chave = idParaChave[id];
        if (chave && elementos[chave]) {
            console.log('Setting active on', elementos[chave]);
            elementos[chave].classList.add('ativa');
        } else {
            console.warn('Element with id', id, 'not found');
        }
    }

    function iniciarQuiz() {
        // Sorteia 50 perguntas proporcionalmente às citações
        estado.perguntasSorteadas = sortearPerguntas(50);
        estado.indiceAtual = 0;
        estado.acertos = 0;
        estado.somaPesos = 0;
        estado.somaPesosAcertos = 0;
        estado.respostas = [];
        mostrarTela('tela-pergunta');
        carregarPergunta(estado.perguntasSorteadas[estado.indiceAtual]);
        atualizarProgresso();
    }

    function sortearPerguntas(total) {
        // Cria lista de perguntas com pesos
        const lista = estado.perguntas.map(p => ({
            ...p,
            peso: getPesoTecnologia(p.tecnologia)
        }));
        const selecionadas = [];
        let pesoTotal = lista.reduce((sum, item) => sum + item.peso, 0);
        for (let i = 0; i < total && lista.length > 0; i++) {
            const aleatorio = Math.random() * pesoTotal;
            let acumulado = 0;
            let indiceEscolhido = -1;
            for (let j = 0; j < lista.length; j++) {
                acumulado += lista[j].peso;
                if (aleatorio <= acumulado) {
                    indiceEscolhido = j;
                    break;
                }
            }
            if (indiceEscolhido === -1) indiceEscolhido = lista.length - 1;
            const escolhida = lista.splice(indiceEscolhido, 1)[0];
            selecionadas.push(escolhida);
            pesoTotal -= escolhida.peso;
        }
        // Embaralha a ordem das selecionadas
        for (let i = selecionadas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [selecionadas[i], selecionadas[j]] = [selecionadas[j], selecionadas[i]];
        }
        return selecionadas;
    }

    function getPesoTecnologia(nome) {
        const tech = estado.tecnologias.find(t => t.nome === nome);
        return tech ? tech.citacoes : 1;
    }

    function carregarPergunta(q) {
        // Limpa feedback e estado anterior
        elementos.feedback.hidden = true;
        elementos.feedback.className = 'feedback';
        elementos.btnProxima.hidden = true;
        elementos.btnNaoSei.disabled = false;
        // Habilita alternativas
        const alternativasBtns = elementos.alternativasContainer.querySelectorAll('.alternativa-btn');
        alternativasBtns.forEach(btn => {
            btn.disabled = false;
            btn.className = 'alternativa-btn';
        });

        // Preenche enunciado
        elementos.enunciado.textContent = q.enunciado;
        // Limpa e cria alternativas
        elementos.alternativasContainer.innerHTML = '';
        q.alternativas.forEach((texto, indice) => {
            const btn = document.createElement('button');
            btn.className = 'alternativa-btn';
            btn.textContent = texto;
            btn.dataset.indice = indice;
            btn.addEventListener('click', () => escolherAlternativa(indice, q));
            elementos.alternativasContainer.appendChild(btn);
        });
    }

    function escolherAlternativa(indiceEscolhido, pergunta) {
        const correta = pergunta.correta;
        const acertou = indiceEscolhido === correta;
        const peso = getPesoTecnologia(pergunta.tecnologia);
        estado.somaPesos += peso;
        if (acertou) {
            estado.acertos++;
            estado.somaPesosAcertos += peso;
        }
        estado.respostas.push({
            id: pergunta.id,
            acertou,
            peso,
            tecnologia: pergunta.tecnologia
        });

        // Desabilita todas as alternativas
        const botoes = elementos.alternativasContainer.querySelectorAll('.alternativa-btn');
        botoes.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === correta) {
                btn.classList.add('correta');
            } else if (idx === indiceEscolhido) {
                btn.classList.add('errada');
            }
        });

        // Mostra feedback
        elementos.feedback.hidden = false;
        elementos.feedback.textContent = pergunta.explicacao;
        elementos.feedback.className = acertou ? 'feedback sucesso' : 'feedback erro';
        // Mostra botão próxima (ou ver resultado na última)
        if (estado.indiceAtual === estado.perguntasSorteadas.length - 1) {
            elementos.btnProxima.textContent = 'Ver resultado';
        } else {
            elementos.btnProxima.textContent = 'Próxima';
        }
        elementos.btnProxima.hidden = false;
    }

    function responderNaoSei() {
        const pergunta = estado.perguntasSorteadas[estado.indiceAtual];
        const peso = getPesoTecnologia(pergunta.tecnologia);
        estado.somaPesos += peso;
        // Não soma acertos
        estado.respostas.push({
            id: pergunta.id,
            acertou: false,
            peso,
            tecnologia: pergunta.tecnologia
        });
        // Desabilita alternativas e marca como não respondida
        const botoes = elementos.alternativasContainer.querySelectorAll('.alternativa-btn');
        botoes.forEach(btn => {
            btn.disabled = true;
            btn.classList.add('selecionada'); // opcional
        });
        elementos.feedback.hidden = false;
        elementos.feedback.textContent = pergunta.explicacao;
        elementos.feedback.className = 'feedback erro'; // tratar como erro para feedback
        if (estado.indiceAtual === estado.perguntasSorteadas.length - 1) {
            elementos.btnProxima.textContent = 'Ver resultado';
        } else {
            elements.btnProxima.textContent = 'Próxima';
        }
        elementos.btnProxima.hidden = false;
    }

    function proximaPergunta() {
        if (estado.indiceAtual < estado.perguntasSorteadas.length - 1) {
            estado.indiceAtual++;
            carregarPergunta(estado.perguntasSorteadas[estado.indiceAtual]);
            atualizarProgresso();
        } else {
            mostrarResultado();
        }
    }

    function atualizarProgresso() {
        const atual = estado.indiceAtual + 1;
        const total = estado.perguntasSorteadas.length;
        elementos.contador.textContent = `${atual} / ${total}`;
        const percentual = (atual / total) * 100;
        elementos.barraProgresso.style.setProperty('--largura-progresso', percentual + '%');
    }

    function mostrarResultado() {
        const percentual = Math.round((estado.somaPesosAcertos / estado.somaPesos) * 100) || 0;
        elementos.percentual.textContent = `${percentual}%`;
        elementos.circuloResultado.style.setProperty('--percentual-numero', percentual);
        // Mensagem por faixa
        let mensagem = '';
        if (percentual < 40) mensagem = 'Você ainda tem muito a aprender, mas está no caminho certo! Continue estudando e praticando.';
        else if (percentual < 60) mensagem = 'Boa base! Você está preparado para algumas oportunidades, mas precisa aprofundar alguns temas.';
        else if (percentual < 80) mensagem = 'Excelente! Você está bem preparado para vagas júnior de desenvolvimento.';
        else mensagem = 'Outstanding! Você está altamente preparado para o mercado de desenvolvimento de software.';
        elementos.mensagemResultado.textContent = mensagem;

        // Resumo por área
        const areaStats = {
            'front-end': { acertos: 0, total: 0 },
            'back-end': { acertos: 0, total: 0 },
            'banco': { acertos: 0, total: 0 },
            'ferramentas': { acertos: 0, total: 0 }
        };
        estado.respostas.forEach(resp => {
            const area = AREAS[resp.tecnologia] || 'ferramentas';
            areaStats[area].total += resp.peso;
            if (resp.acertou) areaStats[area].acertos += resp.peso;
        });
        elementos.areasResumo.innerHTML = '';
        const areaLabels = {
            'front-end': 'Front-end',
            'back-end': 'Back-end/Python',
            'banco': 'Banco de dados',
            'ferramentas': 'Ferramentas e processos'
        };
        Object.keys(areaStats).forEach(area => {
            const { acertos, total } = areaStats[area];
            const perc = total ? Math.round((acertos / total) * 100) : 0;
            const div = document.createElement('div');
            div.className = 'area-item';
            div.innerHTML = `<span>${areaLabels[area]}:</span> <span>${perc}%</span>`;
            elementos.areasResumo.appendChild(div);
        });

        // Sugestão de estudo: tecnologias com menor acerto (por peso)
        const techStats = {};
        estado.respostas.forEach(resp => {
            if (!techStats[resp.tecnologia]) {
                techStats[resp.tecnologia] = { acertos: 0, total: 0 };
            }
            techStats[resp.tecnologia].total += resp.peso;
            if (resp.acertou) techStats[resp.tecnologia].acertos += resp.peso;
        });
        const techArray = Object.entries(techStats).map(([nome, stats]) => ({
            nome,
            perc: stats.total ? Math.round((stats.acertos / stats.total) * 100) : 0,
            peso: getPesoTecnologia(nome)
        }));
        // Ordena por peso decrescente, depois por percentual crescente (piores primeiro)
        techArray.sort((a, b) => {
            if (b.peso !== a.peso) return b.peso - a.peso;
            return a.perc - b.perc;
        });
        const piores = techArray.slice(0, 5).map(item => item.nome);
        let sugesto = '';
        if (piores.length) {
            sugesto = 'Tecnologias para focar nos estudos: ' + piores.join(', ');
        } else {
            sugesto = 'Parabéns! Você acertou em todas as tecnologias.';
        }
        elementos.sugestoEstudo.textContent = sugesto;

        mostrarTela('tela-resultado');
    }

    function voltarInicio() {
        mostrarTela('tela-inicial');
    }

    function teclaPress(e) {
        if (elementos.telaPergunta.classList.contains('ativa')) {
            if (e.key >= '1' && e.key <= '4') {
                const indice = parseInt(e.key) - 1;
                const botoes = elementos.alternativasContainer.querySelectorAll('.alternativa-btn');
                if (botoes[indice]) {
                    escolherAlternativa(indice, estado.perguntasSorteadas[estado.indiceAtual]);
                }
            } else if (e.key === 'Enter') {
                if (!elementos.btnProxima.hidden) {
                    proximaPergunta();
                }
            }
        }
    }

    // Inicializa quando o DOM estiver pronto (garante que todos os elementos existam)
    document.addEventListener('DOMContentLoaded', init);
})();