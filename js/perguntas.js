const PERGUNTAS = [
  // --- PYTHON (12 perguntas) ---
  {
    "id": 1,
    "tecnologia": "Python",
    "enunciado": "O que será impresso no console após a execução do seguinte trecho de código?\n\n```python\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)\n```",
    "alternativas": [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "[4, 1, 2, 3]",
      "Erro de execução (TypeError)"
    ],
    "correta": 1,
    "explicacao": "Em Python, listas são mutáveis e atribuídas por referência. A variável `b` aponta para o mesmo objeto na memória que `a`, logo modificar `b` altera diretamente o conteúdo de `a`."
  },
  {
    "id": 2,
    "tecnologia": "Python",
    "enunciado": "Qual é o principal problema de utilizar uma lista mutável como valor padrão para um argumento de função em Python, como `def adicionar(item, lista=[]):`?",
    "alternativas": [
      "Gera um erro de sintaxe imediato na declaração da função.",
      "O objeto da lista é avaliado apenas uma vez na definição da função, acumulando itens entre chamadas subsequentes se não for reinicializado.",
      "Torna a lista imutável em todas as chamadas futuras.",
      "Impede que a função retorne valores para o escopo global."
    ],
    "correta": 1,
    "explicacao": "Argumentos padrão em Python são avaliados no momento em que a função é definida, e não quando é chamada. Isso faz com que a mesma lista seja reutilizada em todas as chamadas."
  },
  {
    "id": 3,
    "tecnologia": "Python",
    "enunciado": "Como você deve proceder para acessar o valor de uma chave em um dicionário Python sem correr o risco de disparar uma exceção `KeyError` caso a chave não exista?",
    "alternativas": [
      "Usar o método `dict.get('chave')`, que retorna `None` se a chave estiver ausente.",
      "Usar obrigatoriamente um bloco `try / finally` antes de cada acesso.",
      "Verificar a existência com o comando `dict.has_key('chave')`.",
      "Converter o dicionário em uma tupla antes da consulta."
    ],
    "correta": 0,
    "explicacao": "O método `get()` é a forma idiomática de buscar chaves em dicionários de forma segura, permitindo inclusive definir um valor padrão de retorno."
  },
  {
    "id": 4,
    "tecnologia": "Python",
    "enunciado": "Qual alternativa descreve corretamente o comportamento da tipagem em Python?",
    "alternativas": [
      "Tipagem estática estrita, onde erros de tipo impedem a compilação do bytecode.",
      "Tipagem dinâmica com forte verificação em tempo de execução (strong and dynamic typing).",
      "Tipagem fraca e estática, similar a linguagens de montagem.",
      "Inexistência de tipos de dados; todas as variáveis são tratadas como strings brutas."
    ],
    "correta": 1,
    "explicacao": "Python é dinamicamente tipado (os tipos são checados em tempo de execução) e fortemente tipado (não realiza coerções implícitas perigosas entre tipos incompatíveis)."
  },
  {
    "id": 5,
    "tecnologia": "Python",
    "enunciado": "Qual é a saída do seguinte código utilizando fatiamento (slicing) em strings?\n\n```python\ntexto = \"Desenvolvedor\"\nprint(texto[::-1])\n```",
    "alternativas": [
      "redlovezeneD",
      "Desenvolvedor",
      "Dsnvldor",
      "Erro de índice (IndexError)"
    ],
    "correta": 0,
    "explicacao": "O passo `-1` no fatiamento (`[inicio:fim:passo]`) percorre a string de trás para frente, invertendo completamente os caracteres."
  },
  {
    "id": 6,
    "tecnologia": "Python",
    "enunciado": "Qual comando via terminal/CLI deve ser executado para gerar o arquivo de congelamento de dependências (`requirements.txt`) em um projeto Python?",
    "alternativas": [
      "pip install > requirements.txt",
      "pip freeze > requirements.txt",
      "python -m pip make-requirements",
      "pip save dependencies"
    ],
    "correta": 1,
    "explicacao": "O comando `pip freeze` lista todos os pacotes instalados no ambiente atual com suas respectivas versões exatas, sendo redirecionado para o arquivo de dependências."
  },
  {
    "id": 7,
    "tecnologia": "Python",
    "enunciado": "O que o seguinte código retorna ao ser executado?\n\n```python\nnums = {1, 2, 2, 3, 4, 4}\nprint(len(nums))\n```",
    "alternativas": [
      "6",
      "4",
      "2",
      "Erro de sintaxe"
    ],
    "correta": 1,
    "explicacao": "Estruturas do tipo `set` (conjuntos) em Python não permitem elementos duplicados. Os valores repetidos são eliminados automaticamente."
  },
  {
    "id": 8,
    "tecnologia": "Python",
    "enunciado": "Qual é a principal diferença conceitual entre uma tupla (`tuple`) e uma lista (`list`) em Python?",
    "alternativas": [
      "Tuplas são mutáveis e listas são estritamente imutáveis.",
      "Tuplas são imutáveis após a criação e geralmente usadas para dados heterogêneos; listas são mutáveis e homogêneas.",
      "Listas não podem armazenar números inteiros.",
      "Tuplas consomem mais memória RAM que listas de mesmo tamanho."
    ],
    "correta": 1,
    "explicacao": "A imutabilidade é a marca registrada das tuplas, o que as torna seguras para chaves de dicionários e dados que não devem sofrer alterações."
  },
  {
    "id": 9,
    "tecnologia": "Python",
    "enunciado": "Como funciona o tratamento de exceções usando a cláusula `finally` em um bloco `try / except`?",
    "alternativas": [
      "O código dentro de `finally` é executado apenas se ocorrer um erro crítico.",
      "O código dentro de `finally` é executado obrigatoriamente ao final do bloco, independentemente de ter ocorrido uma exceção ou não.",
      "O `finally` substitui o uso do bloco `except`.",
      "Ele interrompe a execução do programa caso o erro seja tratado com sucesso."
    ],
    "correta": 1,
    "explicacao": "O bloco `finally` garante a execução de instruções de limpeza (como fechamento de arquivos ou conexões) aconteça o que acontecer."
  },
  {
    "id": 10,
    "tecnologia": "Python",
    "enunciado": "Qual é o resultado da expressão `bool([])` em Python?",
    "alternativas": [
      "True",
      "False",
      "None",
      "Erro de tipo"
    ],
    "correta": 1,
    "explicacao": "Coleções vazias (listas, tuplas, dicionários, strings) são avaliadas como falsy (Falso) em contextos booleanos em Python."
  },
  {
    "id": 11,
    "tecnologia": "Python",
    "enunciado": "Qual das opções abaixo aplica corretamente uma list comprehension para filtrar apenas números pares de uma lista `numeros = [1, 2, 3, 4, 5, 6]`?",
    "alternativas": [
      "[x for x in numeros if x % 2 == 0]",
      "(x for x in numeros if x * 2 == 0)",
      "list(numeros.filter(lambda x: x % 2 == 0))",
      "[filter(x, numeros) if x % 2 == 0]"
    ],
    "correta": 0,
    "explicacao": "A sintaxe padrão de list comprehension com filtro em Python utiliza `[expressao for item em iteravel if condicao]`."
  },
  {
    "id": 12,
    "tecnologia": "Python",
    "enunciado": "Qual palavra-chave é utilizada para criar geradores (generators) eficientes em memória em vez de retornar listas completas de uma só vez?",
    "alternativas": [
      "yield",
      "return",
      "generate",
      "async"
    ],
    "correta": 0,
    "explicacao": "A palavra-chave `yield` suspende a execução da função retornando um valor sob demanda, economizando muita memória em grandes volumes de dados."
  },

  // --- REACT (10 perguntas) ---
  {
    "id": 13,
    "tecnologia": "React",
    "enunciado": "Por que é considerado uma má prática alterar o estado diretamente (ex: `state.contador = 5`) em vez de usar a função de atualização fornecida pelo `useState`?",
    "alternativas": [
      "Porque o JavaScript dispara um erro de sintaxe imediato.",
      "Porque o React não detecta a mutação direta para disparar o processo de re-renderização do componente.",
      "Porque variáveis de estado são imutáveis e geram estouro de pilha.",
      "Porque o navegador bloqueia alterações em objetos locais."
    ],
    "correta": 1,
    "explicacao": "O React depende de imutabilidade e de chamadas explícitas à função set do estado para agendar e renderizar atualizações na UI corretamente."
  },
  {
    "id": 14,
    "tecnologia": "React",
    "enunciado": "O que acontece se você omitir completamente o array de dependências (`[]`) em um hook `useEffect`?",
    "alternativas": [
      "O efeito será executado apenas uma vez, na montagem do componente.",
      "O efeito será executado após absolutamente cada renderização do componente, gerando possíveis loops infinitos se houver atualização de estado.",
      "O React lançará um erro crítico de compilação.",
      "O efeito nunca será executado."
    ],
    "correta": 1,
    "explicacao": "Sem o array de dependências, o `useEffect` roda em todo ciclo de renderização, o que costuma ser um erro grave se atualizar estados lá dentro."
  },
  {
    "id": 15,
    "tecnologia": "React",
    "enunciado": "Qual é a principal utilidade de passar uma propriedade `key` única ao renderizar listas de componentes com o método `.map()`?",
    "alternativas": [
      "Definir a cor de fundo alternada das linhas da lista.",
      "Permitir que o algoritmo de reconciliação (Virtual DOM) identifique quais itens mudaram, foram adicionados ou removidos.",
      "Criptografar os dados sensíveis exibidos na tabela.",
      "Garantir que os dados venham ordenados do banco de dados."
    ],
    "correta": 1,
    "explicacao": "As keys ajudam o React a rastrear elementos de forma eficiente, evitando bugs visuais e perda de estado interno em listas dinâmicas."
  },
  {
    "id": 16,
    "tecnologia": "React",
    "enunciado": "O que caracteriza o fenômeno conhecido como 'Prop Drilling' em aplicações React?",
    "alternativas": [
      "A técnica recomendada para otimizar requisições HTTP assíncronas.",
      "A passagem excessiva de props através de vários níveis de componentes intermediários que não precisam desses dados, apenas os repassam.",
      "Um erro de compilação ao usar TypeScript com React.",
      "O carregamento tardio de imagens pesadas."
    ],
    "correta": 1,
    "explicacao": "Prop drilling ocorre quando props atravessam muitas camadas de componentes desnecessariamente, sendo combatido com Context API ou gerenciadores de estado."
  },
  {
    "id": 17,
    "tecnologia": "React",
    "enunciado": "Qual das seguintes regras é estritamente obrigatória ao utilizar Hooks do React?",
    "alternativas": [
      "Deem ser chamados apenas dentro de funções de componentes funcionais ou customs hooks, sempre no nível raiz (topo).",
      "Podem ser colocados dentro de loops condicionais e blocos `if / else`.",
      "Devem ser executados exclusivamente em classes herdadas de `React.Component`.",
      "Devem ser declarados fora do escopo do arquivo JavaScript principal."
    ],
    "correta": 0,
    "explicacao": "Chamar hooks condicionalmente quebra a ordem interna de chamadas que o React usa para associar estados entre renderizações."
  },
  {
    "id": 18,
    "tecnologia": "React",
    "enunciado": "Como o React lida com eventos sintéticos (SyntheticEvents)?",
    "alternativas": [
      "São eventos nativos do navegador reescritos para garantir compatibilidade multiplataforma e comportamento consistente.",
      "São restritos exclusivamente a elementos do tipo `<form>`.",
      "São incompatíveis com qualquer tipo de estilização CSS.",
      "São executados diretamente no servidor Node.js."
    ],
    "correta": 0,
    "explicacao": "SyntheticEvent é um wrapper multiplataforma do React em cima dos eventos nativos do DOM."
  },
  {
    "id": 19,
    "tecnologia": "React",
    "enunciado": "O que é o processo de elevação de estado (State Lifting) em React?",
    "alternativas": [
      "Mover o estado compartilhado para o ancestral comum mais próximo para que múltiplos componentes filhos possam acessá-lo via props.",
      "Enviar dados locais diretamente para o banco de dados em nuvem.",
      "Armazenar variáveis de estado no LocalStorage do navegador.",
      "Ocultar elementos visuais usando animações CSS."
    ],
    "correta": 0,
    "explicacao": "Quando dois irmãos precisam sincronizar dados, o estado é elevado para o pai comum."
  },
  {
    "id": 20,
    "tecnologia": "React",
    "enunciado": "Qual é a função do hook `useMemo` em otimizações de performance?",
    "alternativas": [
      "Memorizar o resultado de uma computação pesada entre renderizações para evitar recálculos desnecessários.",
      "Disparar requisições AJAX assíncronas em segundo plano.",
      "Armazenar tokens de autenticação de forma segura.",
      "Substituir o gerenciamento de rotas da aplicação."
    ],
    "correta": 0,
    "explicacao": "`useMemo` cacheia o valor calculado de uma função custosa, recalculando apenas se suas dependências mudarem."
  },
  {
    "id": 21,
    "tecnologia": "React",
    "enunciado": "Qual é a utilidade do componente `<React.StrictMode>` em uma aplicação?",
    "alternativas": [
      "Ativar verificações e avisos adicionais durante o desenvolvimento para detectar código legado e efeitos colaterais indesejados.",
      "Impedir que usuários mal intencionados insiram scripts maliciosos (XSS) em produção.",
      "Minificar arquivos JavaScript automaticamente para melhorar o SEO.",
      "Forçar o design responsivo em dispositivos móveis."
    ],
    "correta": 0,
    "explicacao": "StrictMode roda checagens extras e renderizações duplas em ambiente de desenvolvimento para ajudar a encontrar bugs."
  },
  {
    "id": 22,
    "tecnologia": "React",
    "enunciado": "O que um Custom Hook (Hook personalizado) precisa obrigatoriamente seguir em sua convenção de nomenclatura?",
    "alternativas": [
      "Seu nome deve começar com o prefixo `use` (ex: `useAuth`).",
      "Deve terminar com o sufixo `_hook`.",
      "Deve ser escrito inteiramente em letras maiúsculas.",
      "Precisa começar com a letra `React`."
    ],
    "correta": 0,
    "explicacao": "O linter do React usa o prefixo `use` para identificar custom hooks e aplicar as regras de linting corretamente."
  },

  // --- GIT (9 perguntas) ---
  {
    "id": 23,
    "tecnologia": "Git",
    "enunciado": "Qual é a diferença fundamental entre os comandos `git reset --hard` e `git checkout` (ou `git restore`) ao descartar alterações?",
    "alternativas": [
      "`git reset --hard` afeta o histórico de commits e o diretório de trabalho de forma ampla, enquanto `git restore` foca em restaurar arquivos específicos para o estado anterior.",
      "`git reset` é usado apenas para enviar código para o GitHub.",
      "Não há nenhuma diferença prática.",
      "`git restore` apaga o repositório inteiro."
    ],
    "correta": 0,
    "explicacao": "`git reset --hard` move o ponteiro HEAD e limpa o working directory drasticamente, exigindo cuidado para não perder trabalho."
  },
  {
    "id": 24,
    "tecnologia": "Git",
    "enunciado": "O que o comando `git pull` executa internamente nos bastidores?",
    "alternativas": [
      "Uma operação de `git fetch` seguida imediatamente por um `git merge` (ou `rebase`) da branch remota na branch atual.",
      "Um envio direto dos commits locais para o servidor remoto.",
      "A exclusão definitiva do histórico de commits corrompidos.",
      "A compactação dos arquivos locais em formato ZIP."
    ],
    "correta": 0,
    "explicacao": "`git pull` sincroniza o repositório local baixando as novidades (`fetch`) e aplicando-as ao seu código atual (`merge`)."
  },
  {
    "id": 25,
    "tecnologia": "Git",
    "enunciado": "Você modificou vários arquivos, mas precisa mudar de branch urgentemente sem querer commitar essas alterações inacabadas ainda. Qual comando resolve isso?",
    "alternativas": [
      "git stash",
      "git drop",
      "git clean -f",
      "git save --temp"
    ],
    "correta": 0,
    "explicacao": "`git stash` guarda suas alterações sujas em uma pilha temporária, limpando o diretório de trabalho para você trocar de branch."
  },
  {
    "id": 26,
    "tecnologia": "Git",
    "enunciado": "O que acontece se você adicionar uma pasta ao arquivo `.gitignore` que já estava sendo rastreada e versionada pelo Git anteriormente?",
    "alternativas": [
      "O Git continuará rastreando os arquivos dessa pasta até que você os remova explicitamente do índice com `git rm --cached`.",
      "O Git apagará imediatamente todos os arquivos da pasta do seu disco rígido.",
      "O arquivo `.gitignore` ignorará os arquivos automaticamente a partir do próximo commit.",
      "O repositório entrará em estado de conflito permanente."
    ],
    "correta": 0,
    "explicacao": "O `.gitignore` afeta apenas arquivos não rastreados (untracked). Arquivos já adicionados ao controle de versão precisam ser removidos do cache primeiro."
  },
  {
    "id": 27,
    "tecnologia": "Git",
    "enunciado": "Qual comando do Git permite pegar um commit específico de outra branch e aplicá-lo na sua branch atual?",
    "alternativas": [
      "git cherry-pick",
      "git transplant",
      "git pull-commit",
      "git apply-single"
    ],
    "correta": 0,
    "explicacao": "`git cherry-pick` aplica as mudanças introduzidas por um commit específico em outro ponto do seu histórico."
  },
  {
    "id": 28,
    "tecnologia": "Git",
    "enunciado": "O que significa estar em um estado de 'Detached HEAD' (HEAD desacoplado) no Git?",
    "alternativas": [
      "O ponteiro HEAD está apontando diretamente para um hash de commit específico em vez de uma branch, o que pode causar perda de commits se você criar novas alterações sem criar uma branch.",
      "O repositório foi desconectado permanentemente da internet.",
      "Sua chave SSH expirou no servidor remoto.",
      "O arquivo `.git` foi corrompido."
    ],
    "correta": 0,
    "explicacao": "No estado detached HEAD, você está navegando no histórico por commits e não por branches ativas."
  },
  {
    "id": 29,
    "tecnologia": "Git",
    "enunciado": "Qual é a utilidade do arquivo `.git` localizado na raiz do seu projeto?",
    "alternativas": [
      "Armazena todo o banco de dados de metadados, histórico de versões, objetos e referências do repositório.",
      "É o arquivo de configuração de rotas do servidor web.",
      "Define quais dependências npm serão instaladas.",
      "Armazena chaves privadas de criptografia do sistema operacional."
    ],
    "correta": 0,
    "explicacao": "A pasta oculta `.git` contém o coração do sistema de controle de versão distribuído."
  },
  {
    "id": 30,
    "tecnologia": "Git",
    "enunciado": "Como você reescreve a mensagem do seu último commit local (que ainda não foi enviado para o repositório remoto)?",
    "alternativas": [
      "git commit --amend -m 'Nova mensagem'",
      "git message --edit",
      "git update-commit -m 'Nova mensagem'",
      "git rewrite -last"
    ],
    "correta": 0,
    "explicacao": "`git commit --amend` permite modificar o commit mais recente, útil para corrigir erros de digitação na mensagem."
  },
  {
    "id": 31,
    "tecnologia": "Git",
    "enunciado": "O que o comando `git log --oneline` realiza?",
    "alternativas": [
      "Exibe o histórico de commits de forma compacta, mostrando apenas o hash curto e a primeira linha da mensagem de cada commit.",
      "Apaga todos os logs antigos para economizar espaço em disco.",
      "Mostra apenas os commits feitos na última hora.",
      "Lista todos os conflitos pendentes em uma única linha."
    ],
    "correta": 0,
    "explicacao": "Facilita a leitura rápida do histórico do repositório resumindo cada commit em uma linha."
  },

  // --- APIS REST (7 perguntas) ---
  {
    "id": 32,
    "tecnologia": "APIs REST",
    "enunciado": "Qual é a principal diferença de comportamento entre os métodos HTTP `PUT` e `PATCH`?",
    "alternativas": [
      "`PUT` substitui o recurso inteiro com os dados enviados; `PATCH` aplica apenas atualizações parciais nos campos especificados.",
      "`PUT` é usado exclusivamente para exclusão; `PATCH` para criação.",
      "`PATCH` não aceita corpo na requisição (body).",
      "São sinônimos exatos sem nenhuma distinção."
    ],
    "correta": 0,
    "explicacao": "O `PUT` é idempotente para substituição total, enquanto o `PATCH` altera apenas as propriedades enviadas na requisição parcial."
  },
  {
    "id": 33,
    "tecnologia": "APIs REST",
    "enunciado": "Qual código de status HTTP deve ser retornado por uma API REST quando um novo recurso é criado com sucesso?",
    "alternativas": [
      "200 OK",
      "201 Created",
      "204 No Content",
      "400 Bad Request"
    ],
    "correta": 1,
    "explicacao": "O código 201 Created indica que a requisição teve sucesso e resultou na criação de um novo recurso no servidor."
  },
  {
    "id": 34,
    "tecnologia": "APIs REST",
    "enunciado": "Qual é a diferença fundamental entre os códigos de status HTTP 401 Unauthorized e 403 Forbidden?",
    "alternativas": [
      "401 significa que o cliente não está autenticado (falta credenciais); 403 significa que o cliente está autenticado, mas não possui permissão para acessar o recurso.",
      "401 indica erro no servidor; 403 indica erro no cliente.",
      "São códigos idênticos usados por diferentes navegadores.",
      "403 é retornado apenas em requisições GET."
    ],
    "correta": 0,
    "explicacao": "401 foca na falta de identificação (quem é você?), enquanto 403 foca na falta de autorização (você não pode entrar aqui)."
  },
  {
    "id": 35,
    "tecnologia": "APIs REST",
    "enunciado": "O que significa o conceito de Idempotência em métodos HTTP em uma API REST?",
    "alternativas": [
      "Significa que fazer a mesma requisição múltiplas vezes produz exatamente o mesmo efeito colateral no servidor do que fazê-la apenas uma vez.",
      "Significa que a API responde apenas a requisições criptografadas via HTTPS.",
      "Garante que a resposta venha sempre em formato XML.",
      "Impede qualquer tipo de cache no navegador."
    ],
    "correta": 0,
    "explicacao": "Métodos como GET, PUT e DELETE são idempotentes (repetir um DELETE de um recurso já deletado mantém o estado de deletado), ao contrário do POST."
  },
  {
    "id": 36,
    "tecnologia": "APIs REST",
    "enunciado": "Qual é a prática recomendada ao projetar rotas (endpoints) em uma API RESTful para um recurso de 'usuários'?",
    "alternativas": [
      "Usar substantivos plurais no caminho, como `GET /usuarios` e `POST /usuarios`.",
      "Usar verbos de ação no caminho, como `GET /pegarUsuarios` e `POST /criarNovoUsuario`.",
      "Misturar maiúsculas e minúsculas aleatoriamente.",
      "Incluir a extensão do arquivo no final, como `/usuarios.php`."
    ],
    "correta": 0,
    "explicacao": "O padrão RESTful utiliza substantivos no plural para representar coleções e os métodos HTTP definem a ação (GET, POST, etc.)."
  },
  {
    "id": 37,
    "tecnologia": "APIs REST",
    "enunciado": "Para que serve a paginação em coleções grandes retornadas por uma API REST?",
    "alternativas": [
      "Evitar sobrecarga de rede, consumo excessivo de memória no servidor e lentidão ao trafegar milhares de registros de uma só vez.",
      "Criptografar automaticamente os dados trafegados.",
      "Forçar o cliente a atualizar a página a cada 5 segundos.",
      "Impedir que usuários comuns façam requisições POST."
    ],
    "correta": 0,
    "explicacao": "A paginação divide grandes conjuntos de dados em pedaços menores (chunks/pages), garantindo alta performance e escalabilidade."
  },
  {
    "id": 38,
    "tecnologia": "APIs REST",
    "enunciado": "Qual header HTTP é comumente utilizado para enviar um token de autenticação Bearer (como JWT) em requisições para uma API REST?",
    "alternativas": [
      "Authorization",
      "Authentication-Token",
      "X-Access-Key",
      "Client-Security"
    ],
    "correta": 0,
    "explicacao": "O header `Authorization` seguido do esquema `Bearer <token>` é o padrão de mercado para autenticação baseada em tokens."
  },

  // --- JAVASCRIPT (7 perguntas) ---
  {
    "id": 39,
    "tecnologia": "JavaScript",
    "enunciado": "Qual é a diferença principal entre os operadores de comparação `==` e `===` em JavaScript?",
    "alternativas": [
      "`==` realiza coerção implícita de tipos antes de comparar; `===` (estrito) exige que ambos os valores sejam do mesmo tipo e tenham o mesmo valor.",
      "`===` é mais lento e foi descontinuado no ES6.",
      "`==` compara apenas strings e `===` compara apenas números.",
      "Não há diferença em navegadores modernos."
    ],
    "correta": 0,
    "explicacao": "O operador `===` evita conversões automáticas bizarras (como `0 == '0'` retornar `true`), sendo o recomendado no dia a dia."
  },
  {
    "id": 40,
    "tecnologia": "JavaScript",
    "enunciado": "O que será impresso no console após a execução do seguinte trecho de código?\n\n```javascript\nconsole.log(typeof null);\n```",
    "alternativas": [
      "'object'",
      "'null'",
      "'undefined'",
      "'number'"
    ],
    "correta": 0,
    "explicacao": "Devido a um bug histórico no primeiro dia de criação do JavaScript que não pode mais ser corrigido por retrocompatibilidade, `typeof null` retorna 'object'."
  },
  {
    "id": 41,
    "tecnologia": "JavaScript",
    "enunciado": "O que é o Event Loop (Loop de Eventos) em JavaScript?",
    "alternativas": [
      "O mecanismo responsável por gerenciar a execução de código síncrono, a pilha de chamadas (call stack) e processar operações assíncronas na fila de callbacks.",
      "Um comando de repetição otimizado para animações CSS.",
      "O compilador JIT embutido no motor V8.",
      "Uma biblioteca externa para manipulação de eventos de teclado."
    ],
    "correta": 0,
    "explicacao": "O Event Loop permite que o JavaScript mantenha sua natureza não-bloqueante apesar de ser executado em uma única thread principal."
  },
  {
    "id": 42,
    "tecnologia": "JavaScript",
    "enunciado": "Qual método de array em JavaScript cria um novo array transformando cada elemento através de uma função de callback?",
    "alternativas": [
      "map()",
      "filter()",
      "reduce()",
      "forEach()"
    ],
    "correta": 0,
    "explicacao": "O método `map()` percorre o array aplicando a função a cada item e retorna um novo array com os resultados modificados."
  },
  {
    "id": 43,
    "tecnologia": "JavaScript",
    "enunciado": "O que é uma `Closure` (fechamento) em JavaScript?",
    "alternativas": [
      "Uma função que se lembra de seu escopo léxico mesmo quando a função externa já encerrou sua execução.",
      "Um método para encerrar conexões WebSocket abertas.",
      "Uma instrução para fechar janelas do navegador.",
      "Um erro crítico gerado ao estourar a memória RAM."
    ],
    "correta": 0,
    "explicacao": "Closures permitem que funções internas acessem variáveis de escopos externos mesmo após o retorno da função pai."
  },
  {
    "id": 44,
    "tecnologia": "JavaScript",
    "enunciado": "Qual é o valor retornado pela expressão `Boolean('false')` em JavaScript?",
    "alternativas": [
      "true",
      "false",
      "undefined",
      "null"
    ],
    "correta": 0,
    "explicacao": "Qualquer string não vazia (mesmo contendo o texto 'false') é avaliada como truthy (Verdadeiro) em JavaScript."
  },
  {
    "id": 45,
    "tecnologia": "JavaScript",
    "enunciado": "Como o operador spread (`...`) pode ser utilizado ao copiar um array raso (shallow copy) em JavaScript?",
    "alternativas": [
      "const copia = [...original];",
      "const copia = spread(original);",
      "const copia = original.copy(all);",
      "const copia = [original...];"
    ],
    "correta": 0,
    "explicacao": "O operador spread desempacota os elementos do array original para dentro de um novo array recém-criado na memória."
  },

  // --- CSS (7 perguntas) ---
  {
    "id": 46,
    "tecnologia": "CSS",
    "enunciado": "Qual é a principal diferença de comportamento entre `display: none` e `visibility: hidden` em CSS?",
    "alternativas": [
      "`display: none` remove o elemento completamente do layout, fazendo com que ele não ocupe espaço; `visibility: hidden` oculta o elemento visualmente, mas mantém o espaço ocupado por ele.",
      "`visibility: hidden` exclui o elemento do DOM permanentemente.",
      "Não há nenhuma diferença visual ou estrutural.",
      "`display: none` funciona apenas em dispositivos móveis."
    ],
    "correta": 0,
    "explicacao": "`display: none` altera o fluxo do documento ignorando o elemento, enquanto `visibility: hidden` apenas o torna invisível mantendo suas dimensões de layout."
  },
  {
    "id": 47,
    "tecnologia": "CSS",
    "enunciado": "Como funciona o modelo de caixa padrão (`box-sizing: content-box`) em relação às dimensões declaradas (`width` e `height`)?",
    "alternativas": [
      "A largura e a altura declaradas aplicam-se apenas à área de conteúdo; bordas (`border`) e preenchimento (`padding`) são somados por fora, aumentando o tamanho total do elemento.",
      "As bordas e preenchimentos são subtraídos automaticamente.",
      "O elemento ajusta sua largura de forma responsiva ao tamanho da tela.",
      "Ignora margens externas."
    ],
    "correta": 0,
    "explicacao": "No `content-box`, padding e border somam-se às dimensões informadas. Já no `box-sizing: border-box`, eles ficam contidos dentro da largura total."
  },
  {
    "id": 48,
    "tecnologia": "CSS",
    "enunciado": "Em um container configurado com Flexbox (`display: flex`), qual propriedade alinha os itens ao longo do eixo principal (main axis)?",
    "alternativas": [
      "justify-content",
      "align-items",
      "align-content",
      "flex-direction"
    ],
    "correta": 0,
    "explicacao": "`justify-content` gerencia o espaçamento e alinhamento principal, enquanto `align-items` cuida do eixo cruzado (cross axis)."
  },
  {
    "id": 49,
    "tecnologia": "CSS",
    "enunciado": "O que a unidade de medida `rem` representa em folhas de estilo CSS?",
    "alternativas": [
      "Uma unidade relativa ao tamanho da fonte do elemento raiz (`<html>`) do documento.",
      "Uma unidade relativa à largura da janela de visualização (viewport).",
      "Uma unidade estática equivalente a pixels absolutos.",
      "Relativa ao tamanho da fonte do elemento pai imediato."
    ],
    "correta": 0,
    "explicacao": "`rem` (root em) facilita a escalabilidade e acessibilidade por se basear sempre na raiz do documento, diferentemente de `em` que acumula heranças."
  },
  {
    "id": 50,
    "tecnologia": "CSS",
    "enunciado": "Qual é a ordem de especificidade (da maior para a menor) entre os seletores CSS básicos?",
    "alternativas": [
      "IDs (`#id`) > Classes, pseudo-classes e atributos (`.class`, `:hover`, `[type]`) > Elementos e pseudo-elementos (`div`, `p`, `::before`).",
      "Elementos > Classes > IDs",
      "Classes > IDs > Elementos",
      "Todas possuem exatamente o mesmo peso de especificidade."
    ],
    "correta": 0,
    "explicacao": "IDs têm maior peso na especificidade do CSS, seguidos por classes/atributos e por último seletores de tags/elementos."
  },
  {
    "id": 51,
    "tecnologia": "CSS",
    "enunciado": "Para que serve a propriedade `z-index` em CSS?",
    "alternativas": [
      "Controlar a ordem de empilhamento (eixo Z) de elementos posicionados na tela.",
      "Definir o nível de zoom da página web.",
      "Ajustar a opacidade e transparência de imagens.",
      "Controlar a velocidade de animações temporais."
    ],
    "correta": 0,
    "explicacao": "O `z-index` determina quais elementos ficam na frente ou atrás quando há sobreposição visual (requer elementos com posicionamento diferente de `static`)."
  },
  {
    "id": 52,
    "tecnologia": "CSS",
    "enunciado": "Qual propriedade do CSS Grid Layout define o tamanho e a quantidade de colunas de uma grade?",
    "alternativas": [
      "grid-template-columns",
      "grid-column-gap",
      "grid-row-template",
      "flex-columns"
    ],
    "correta": 0,
    "explicacao": "`grid-template-columns` especifica a largura de cada coluna na grade estruturada."
  },

  // --- DJANGO (7 perguntas) ---
  {
    "id": 53,
    "tecnologia": "Django",
    "enunciado": "Qual comando do Django gerencia a criação de novos arquivos de migração baseados em alterações feitas no arquivo `models.py`?",
    "alternativas": [
      "python manage.py makemigrations",
      "python manage.py migrate",
      "python manage.py make-db",
      "python manage.py update-models"
    ],
    "correta": 0,
    "explicacao": "`makemigrations` inspeciona os models e gera os scripts de instrução; o comando `migrate` é o que aplica esses scripts no banco de dados."
  },
  {
    "id": 54,
    "tecnologia": "Django",
    "enunciado": "O que caracteriza a execução preguiçosa (lazy evaluation) dos QuerySets no ORM do Django?",
    "alternativas": [
      "Um QuerySet não executa a consulta SQL no banco de dados até que seus dados sejam explicitamente avaliados (como em loops, fatiamentos ou chamadas list()).",
      "Os dados demoram 5 segundos para carregar por padrão.",
      "As consultas SQL são executadas em segundo plano de forma assíncrona automaticamente.",
      "O Django impede qualquer tipo de consulta complexa ao banco."
    ],
    "correta": 0,
    "explicacao": "QuerySets são lazy para otimizar performance, permitindo encadear filtros (.filter().exclude()) sem disparar múltiplos acessos prematuros ao banco."
  },
  {
    "id": 55,
    "tecnologia": "Django",
    "enunciado": "Qual é o problema clássico conhecido como 'N+1 queries' no ORM do Django e como ele pode ser evitado?",
    "alternativas": [
      "Ocorre quando o sistema faz 1 consulta para buscar a lista principal e N consultas adicionais para buscar relacionamentos estrangeiros; é evitado usando `select_related()` ou `prefetch_related()`.",
      "Ocorre quando o servidor ultrapassa 1GB de RAM.",
      "É um erro de sintaxe ao criar formulários.",
      "Acontece quando há mais de 1 administradores logados."
    ],
    "correta": 0,
    "explicacao": "O uso de `select_related` faz JOINs SQL antecipados, resolvendo o problema de N+1 consultas em relacionamentos ForeignKey."
  },
  {
    "id": 56,
    "tecnologia": "Django",
    "enunciado": "Por que manter a configuração `DEBUG = True` em arquivos de produção do Django representa uma grave falha de segurança?",
    "alternativas": [
      "Porque o Django exibe páginas detalhadas de rastreamento de erro (tracebacks) contendo código fonte, variáveis de ambiente e credenciais sensíveis para qualquer usuário.",
      "Porque o site fica 10 vezes mais lento.",
      "Porque o banco de dados é apagado automaticamente.",
      "Porque impede conexões via HTTPS."
    ],
    "correta": 0,
    "explicacao": "O modo DEBUG revela informações internas da aplicação em caso de exceções, facilitando ataques cibernéticos."
  },
  {
    "id": 57,
    "tecnologia": "Django",
    "enunciado": "Qual é a utilidade principal do middleware de proteção CSRF (Cross-Site Request Forgery) embutido no Django?",
    "alternativas": [
      "Garantir que requisições POST, PUT e DELETE venham acompanhadas de um token válido originado do próprio site, evitando submissões maliciosas de terceiros.",
      "Criptografar senhas de usuários com hash bcrypt.",
      "Bloquear endereços IP suspeitos automaticamente.",
      "Comprimir arquivos estáticos CSS e JS."
    ],
    "correta": 0,
    "explicacao": "O CSRF token protege formulários e requisições contra ataques onde sites externos forçam o navegador do usuário a executar ações indesejadas autenticadas."
  },
  {
    "id": 58,
    "tecnologia": "Django",
    "enunciado": "O que diferencia o método `get()` do método `filter()` em um QuerySet do Django?",
    "alternativas": [
      "`get()` retorna um único objeto correspondente e dispara uma exceção `DoesNotExist` (ou `MultipleObjectsReturned`) se houver divergência; `filter()` sempre retorna um QuerySet (lista vazia se não achar nada).",
      "`get()` é usado apenas para apagar dados.",
      "`filter()` retorna um único dicionário Python.",
      "Não há diferença de comportamento."
    ],
    "correta": 0,
    "explicacao": "`get` busca estritamente um registro único, enquanto `filter` retorna uma coleção de objetos filtrados."
  },
  {
    "id": 59,
    "tecnologia": "Django",
    "enunciado": "Onde são mapeadas as rotas URL principais de uma aplicação Django para direcioná-las às views corretas?",
    "alternativas": [
      "urls.py",
      "views.py",
      "settings.py",
      "wsgi.py"
    ],
    "correta": 0,
    "explicacao": "O arquivo `urls.py` define o roteamento de URLs da aplicação mapeando caminhos para funções ou classes de visualização."
  },

  // --- SQL (7 perguntas) ---
  {
    "id": 60,
    "tecnologia": "SQL",
    "enunciado": "Qual é a diferença fundamental entre as cláusulas `WHERE` e `HAVING` em uma consulta SQL?",
    "alternativas": [
      "`WHERE` filtra linhas individuais antes de qualquer agrupamento; `HAVING` filtra grupos já formados após a cláusula `GROUP BY`.",
      "`HAVING` é mais rápido e substitui o `WHERE` em qualquer cenário.",
      "`WHERE` funciona apenas com dados numéricos.",
      "São sinônimos exatos."
    ],
    "correta": 0,
    "explicacao": "Como `HAVING` avalia condições em resultados agregados (como `SUM` ou `COUNT`), ele precisa vir após o `GROUP BY`."
  },
  {
    "id": 61,
    "tecnologia": "SQL",
    "enunciado": "Qual tipo de JOIN retorna todos os registros da tabela da esquerda e os registros correspondentes da tabela da direita, preenchendo com NULL se não houver correspondência?",
    "alternativas": [
      "LEFT JOIN (ou LEFT OUTER JOIN)",
      "INNER JOIN",
      "RIGHT JOIN",
      "CROSS JOIN"
    ],
    "correta": 0,
    "explicacao": "O `LEFT JOIN` prioriza a tabela da esquerda, garantindo que todas as linhas dela apareçam no resultado final."
  },
  {
    "id": 62,
    "tecnologia": "SQL",
    "enunciado": "Por que a verificação de valores nulos em SQL deve ser feita com `WHERE coluna IS NULL` em vez de `WHERE coluna = NULL`?",
    "alternativas": [
      "Porque `NULL` em SQL representa um valor desconhecido, fazendo com que qualquer comparação direta com operadores lógicos (`=`, `<>`, `!=`) retorne desconhecido (falso).",
      "Porque o símbolo `=` é reservado para atualizações.",
      "Porque o banco de dados bloqueia o uso de operadores matemáticos.",
      "É apenas uma convenção estética sem impacto lógico."
    ],
    "correta": 0,
    "explicacao": "Na lógica ternária do SQL, `NULL = NULL` não é verdadeiro, exigindo o operador dedicado `IS NULL`."
  },
  {
    "id": 63,
    "tecnologia": "SQL",
    "enunciado": "Qual é o perigo de executar o comando `DELETE FROM usuarios;` sem uma cláusula `WHERE`?",
    "alternativas": [
      "Todos os registros da tabela `usuarios` serão apagados permanentemente.",
      "A tabela inteira será excluída da estrutura do banco (DROP).",
      "O banco de dados entrará em modo somente leitura.",
      "O comando será cancelado automaticamente por segurança."
    ],
    "correta": 0,
    "explicacao": "Sem o `WHERE`, o `DELETE` remove todas as linhas da tabela (embora mantenha a estrutura e permita rollback dependendo da transação)."
  },
  {
    "id": 64,
    "tecnologia": "SQL",
    "enunciado": "O que um índice (`INDEX`) em uma tabela de banco de dados relacional faz?",
    "alternativas": [
      "Cria uma estrutura de dados auxiliar (como árvore B-Tree) que acelera drasticamente a recuperação de consultas baseadas nas colunas indexadas, embora possa encarecer operações de escrita.",
      "Compacta o arquivo físico do banco para economizar disco.",
      "Criptografa as senhas dos usuários.",
      "Ordena obrigatoriamente a tabela em ordem alfabética física."
    ],
    "correta": 0,
    "explicacao": "Índices evitam full table scans em buscas frequentes, melhorando a performance de leitura a custo de espaço em disco e leve lentidão em INSERTs/UPDATEs."
  },
  {
    "id": 65,
    "tecnologia": "SQL",
    "enunciado": "Qual é a diferença entre `COUNT(*)` e `COUNT(coluna)` ao contar linhas em uma consulta SQL?",
    "alternativas": [
      "`COUNT(*)` conta todas as linhas da tabela (incluindo duplicadas e nulas); `COUNT(coluna)` conta apenas as linhas onde o valor daquela coluna específica não é `NULL`.",
      "`COUNT(coluna)` é mais rápido e conta valores nulos.",
      "São exatamente iguais.",
      "`COUNT(*)` funciona apenas em bancos PostgreSQL."
    ],
    "correta": 0,
    "explicacao": "A presença de valores `NULL` é ignorada quando especificamos uma coluna no `COUNT(coluna)`, enquanto `COUNT(*)` contabiliza as linhas inteiras."
  },
  {
    "id": 66,
    "tecnologia": "SQL",
    "enunciado": "O que caracteriza uma vulnerabilidade de SQL Injection em aplicações web?",
    "alternativas": [
      "A inserção maliciosa de comandos SQL não sanitizados diretamente em entradas de formulários ou URLs, permitindo que invasores manipulem consultas ao banco.",
      "A queda repentina do servidor por falta de memória.",
      "O uso excessivo de chaves estrangeiras.",
      "A falha na compilação de arquivos TypeScript."
    ],
    "correta": 0,
    "explicacao": "SQL injection ocorre quando dados fornecidos pelo usuário são concatenados diretamente na query SQL em vez de usar parâmetros seguros (prepared statements)."
  },

  // --- HTML (6 perguntas) ---
  {
    "id": 67,
    "tecnologia": "HTML",
    "enunciado": "Qual é a importância de utilizar elementos HTML semânticos (como `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`) em vez de usar apenas `<div>` para tudo?",
    "alternativas": [
      "Melhoram a acessibilidade (leitores de tela compreendem melhor a página), facilitam a indexação por motores de busca (SEO) e tornam o código mais legível.",
      "Permitem compilar o código HTML diretamente em linguagem de máquina.",
      "São obrigatórios para que o CSS funcione.",
      "Reduzem o tamanho do arquivo final em 90%."
    ],
    "correta": 0,
    "explicacao": "HTML semântico dá significado estrutural ao conteúdo, beneficiando SEO, leitores de tela e a manutenção do código."
  },
  {
    "id": 68,
    "tecnologia": "HTML",
    "enunciado": "Qual atributo em uma tag `<img>` é obrigatório para garantir acessibilidade a deficientes visuais que utilizam leitores de tela?",
    "alternativas": [
      "alt",
      "title",
      "longdesc",
      "aria-img"
    ],
    "correta": 0,
    "explicacao": "O atributo `alt` (texto alternativo) descreve o conteúdo e a função da imagem para quem não consegue visualizá-la."
  },
  {
    "id": 69,
    "tecnologia": "HTML",
    "enunciado": "Qual tag HTML é utilizada para agrupar metadados e informações sobre o documento (como título da página, links para folhas de estilo CSS e charset)?",
    "alternativas": [
      "<head>",
      "<body>",
      "<meta-container>",
      "<header>"
    ],
    "correta": 0,
    "explicacao": "O elemento `<head>` abriga os metadados do documento que não são exibidos diretamente na área visual principal da página."
  },
  {
    "id": 70,
    "tecnologia": "HTML",
    "enunciado": "Qual é a diferença estrutural entre elementos de nível de bloco (`block`) e elementos em linha (`inline`) em HTML?",
    "alternativas": [
      "Elementos de bloco iniciam em uma nova linha e ocupam toda a largura disponível; elementos em linha ocupam apenas o espaço necessário para seu conteúdo e não quebram linha.",
      "Elementos em linha não aceitam nenhum tipo de texto.",
      "Elementos de bloco só podem ser usados dentro de formulários.",
      "Não há diferenças de comportamento."
    ],
    "correta": 0,
    "explicacao": "Exemplos de bloco são `<div>` e `<p>`; exemplos em linha são `<span>` e `<a>`."
  },
  {
    "id": 71,
    "tecnologia": "HTML",
    "enunciado": "Como vincular corretamente um elemento `<label>` a um campo de formulário `<input id='email'>` para melhorar a usabilidade e acessibilidade?",
    "alternativas": [
      "Usando o atributo `for='email'` no label correspondente ao ID do input.",
      "Colocando o input dentro do atributo `name` do label.",
      "Usando a tag `<link-input>`.",
      "Não é possível vinculá-los sem JavaScript."
    ],
    "correta": 0,
    "explicacao": "O atributo `for` do label associado ao `id` do input faz com que clicar no texto da label foque automaticamente no campo de texto."
  },
  {
    "id": 72,
    "tecnologia": "HTML",
    "enunciado": "Qual tag HTML é utilizada para incorporar scripts JavaScript externos em uma página web?",
    "alternativas": [
      "<script src='arquivo.js'></script>",
      "<javascript href='arquivo.js'></javascript>",
      "<code src='arquivo.js'></code>",
      "<include file='arquivo.js'/>"
    ],
    "correta": 0,
    "explicacao": "A tag `<script>` com o atributo `src` é o padrão para carregar arquivos de script na web."
  },

  // --- FASTAPI (4 perguntas) ---
  {
    "id": 73,
    "tecnologia": "FastAPI",
    "enunciado": "Como o FastAPI realiza a validação automática de dados de entrada (payloads) em requisições HTTP?",
    "alternativas": [
      "Utilizando classes de modelos baseadas em Pydantic que aproveitam os type hints do Python.",
      "Através de arquivos de configuração XML externos.",
      "Validando manualmente cada campo com condicionais `if` nas rotas.",
      "Utilizando o ORM do Django."
    ],
    "correta": 0,
    "explicacao": "O FastAPI usa Pydantic e type hints para validar tipos, converter dados e gerar documentação automática sem esforço extra."
  },
  {
    "id": 74,
    "tecnologia": "FastAPI",
    "enunciado": "Quais interfaces de documentação interativa o FastAPI gera automaticamente e disponibiliza sem configuração adicional?",
    "alternativas": [
      "Swagger UI (`/docs`) e ReDoc (`/redoc`).",
      "Postman Cloud e Insomnia Web.",
      "Apenas documentação em PDF.",
      "Nenhuma documentação interativa nativa."
    ],
    "correta": 0,
    "explicacao": "O framework constrói documentações interativas baseadas na especificação OpenAPI automaticamente baseadas nos seus tipos Python."
  },
  {
    "id": 75,
    "tecnologia": "FastAPI",
    "enunciado": "Qual código de status HTTP o FastAPI retorna automaticamente quando os dados enviados pelo cliente falham na validação do Pydantic?",
    "alternativas": [
      "422 Unprocessable Entity",
      "400 Bad Request",
      "500 Internal Server Error",
      "404 Not Found"
    ],
    "correta": 0,
    "explicacao": "O código 422 é o padrão do FastAPI para erros de validação de payload em requisições incorretas."
  },
  {
    "id": 76,
    "tecnologia": "FastAPI",
    "enunciado": "Como você define uma rota GET assíncrona em FastAPI?",
    "alternativas": [
      "Usando o decorador `@app.get('/caminho')` em uma função declarada com `async def`.",
      "Usando a palavra-chave `route.get('/caminho')`.",
      "Criando uma classe herdada de `FastAPIAsync`.",
      "Através de arquivos JSON de rotas."
    ],
    "correta": 0,
    "explicacao": "O FastAPI suporta rotas síncronas (`def`) e assíncronas (`async def`) nativamente através do ecossistema ASGI."
  },

  // --- FLASK (4 perguntas) ---
  {
    "id": 77,
    "tecnologia": "Flask",
    "enunciado": "Como é associada uma URL a uma função de visualização em um aplicativo Flask?",
    "alternativas": [
      "Usando o decorador `@app.route('/caminho')`.",
      "Através do arquivo de configuração `urls.py` centralizado.",
      "Herdando da classe `BaseView`.",
      "Declarando a rota dentro do arquivo `requirements.txt`."
    ],
    "correta": 0,
    "explicacao": "O decorador `@app.route` é a assinatura padrão do microframework Flask para mapear rotas web."
  },
  {
    "id": 78,
    "tecnologia": "Flask",
    "enunciado": "O que caracteriza a arquitetura de um microframework como o Flask?",
    "alternativas": [
      "Possui um núcleo enxuto e minimalista, deixando a escolha de componentes como ORM, sistema de autenticação e migrações a cargo de extensões de terceiros.",
      "Não permite o uso de banco de dados relacionais.",
      "É restrito a aplicações de página única (SPA).",
      "Vem com dezenas de módulos pesados pré-instalados."
    ],
    "correta": 0,
    "explicacao": "Flask dá total liberdade ao desenvolvedor para montar a stack tecnológica que preferir."
  },
  {
    "id": 79,
    "tecnologia": "Flask",
    "enunciado": "Para que serve o objeto `request` global disponibilizado pelo Flask durante uma requisição HTTP?",
    "alternativas": [
      "Acessar os dados enviados pelo cliente, como parâmetros de formulário, query strings, arquivos e headers da requisição atual.",
      "Enviar respostas de erro para o servidor de e-mail.",
      "Configurar a porta de escuta do servidor WSGI.",
      "Conectar diretamente ao banco de dados PostgreSQL."
    ],
    "correta": 0,
    "explicacao": "O objeto `request` encapsula todas as informações enviadas pelo navegador na requisição corrente."
  },
  {
    "id": 80,
    "tecnologia": "Flask",
    "enunciado": "Qual servidor WSGI embutido é comumente utilizado para rodar um aplicativo Flask em ambiente de desenvolvimento local?",
    "alternativas": [
      "app.run() (servidor de desenvolvimento integrado do Flask)",
      "Gunicorn em modo cluster",
      "Nginx estático",
      "Apache Tomcat"
    ],
    "correta": 0,
    "explicacao": "O `app.run()` inicia um servidor web local de desenvolvimento com hot-reload para testes rápidos."
  },

  // --- DOCKER (3 perguntas) ---
  {
    "id": 81,
    "tecnologia": "Docker",
    "enunciado": "Qual é a principal diferença arquitetural entre uma Máquina Virtual (VM) completa e um Container Docker?",
    "alternativas": [
      "Containers compartilham o kernel do sistema operacional do host, isolando apenas os processos; VMs emulam um sistema operacional inteiro com kernel próprio.",
      "Containers rodam exclusivamente em sistemas operacionais Windows Server.",
      "VMs não consomem nenhum recurso de hardware.",
      "Containers não podem ser executados na nuvem."
    ],
    "correta": 0,
    "explicacao": "Containers são muito mais leves e rápidos que VMs justamente por compartilharem o kernel do sistema hospedeiro."
  },
  {
    "id": 82,
    "tecnologia": "Docker",
    "enunciado": "O que acontece com os dados gravados dentro do sistema de arquivos de um container Docker quando o container é removido (`docker rm`) sem o uso de volumes?",
    "alternativas": [
      "Os dados são perdidos permanentemente junto com o ciclo de vida do container.",
      "Os dados são salvos automaticamente na Área de Trabalho do host.",
      "O Docker cria um backup em nuvem por padrão.",
      "Os dados migram para o container mais próximo."
    ],
    "correta": 0,
    "explicacao": "O container é efêmero. Para persistir dados, é obrigatório o uso de Volumes Docker (`-v` ou `volumes:`)."
  },
  {
    "id": 83,
    "tecnologia": "Docker",
    "enunciado": "Qual instrução em um `Dockerfile` é utilizada para copiar arquivos do seu computador local para dentro da imagem em construção?",
    "alternativas": [
      "COPY",
      "MOVE",
      "TRANSFER",
      "SEND"
    ],
    "correta": 0,
    "explicacao": "A instrução `COPY` (ou `ADD`) copia arquivos e diretórios do contexto de build para o filesystem da imagem Docker."
  },

  // --- NODE.JS (3 perguntas) ---
  {
    "id": 84,
    "tecnologia": "Node.js",
    "enunciado": "O que é o Node.js no contexto de desenvolvimento de software?",
    "alternativas": [
      "Um ambiente de execução (runtime) JavaScript de código aberto baseado no motor V8 do Google, voltado para execução no lado do servidor.",
      "Um framework exclusivo para desenvolvimento frontend em React.",
      "Um banco de dados NoSQL baseado em documentos JSON.",
      "Uma ferramenta para estilização CSS avançada."
    ],
    "correta": 0,
    "explicacao": "Node.js permite rodar JavaScript fora do navegador, viabilizando o desenvolvimento backend com a mesma linguagem."
  },
  {
    "id": 85,
    "tecnologia": "Node.js",
    "enunciado": "Qual é a função do NPM (Node Package Manager)?",
    "alternativas": [
      "Gerenciar pacotes, bibliotecas e dependências de projetos Node.js, além de hospedar o maior registro de código open source do mundo.",
      "Compilar arquivos TypeScript diretamente em código binário de máquina.",
      "Servir como banco de dados relacional principal.",
      "Monitorar o consumo de CPU em servidores de produção."
    ],
    "correta": 0,
    "explicacao": "NPM é o gerenciador de pacotes padrão que acompanha a instalação do Node.js."
  },
  {
    "id": 86,
    "tecnologia": "Node.js",
    "enunciado": "Por que operações bloqueantes de CPU (como cálculos matemáticos complexos síncronos) devem ser evitadas na thread principal do Node.js?",
    "alternativas": [
      "Porque o Node.js é single-threaded para o event loop; tarefas demoradas bloqueiam a thread principal e impedem o atendimento de outras requisições simultâneas.",
      "Porque o JavaScript dispara um erro de sintaxe imediato.",
      "Porque o V8 desliga o servidor por segurança.",
      "Não há nenhum problema em executar tarefas pesadas na thread principal."
    ],
    "correta": 0,
    "explicacao": "Bloquear a thread única do event loop paralisa toda a aplicação, prejudicando a concorrência."
  },

  // --- POSTGRESQL (3 perguntas) ---
  {
    "id": 87,
    "tecnologia": "PostgreSQL",
    "enunciado": "Qual tipo de dado no PostgreSQL é especialmente útil para armazenar dados estruturados em formato JSON que exigem consultas indexadas de alta performance?",
    "alternativas": [
      "JSONB (Binary JSON)",
      "VARCHAR(MAX)",
      "BLOB",
      "TEXT_FLAT"
    ],
    "correta": 0,
    "explicacao": "O `JSONB` armazena dados em formato binário decomposto, permitindo indexação GIN e consultas ultrarrápidas em campos internos do JSON."
  },
  {
    "id": 88,
    "tecnologia": "PostgreSQL",
    "enunciado": "Qual comando psql (CLI) lista todas as tabelas e relações disponíveis no banco de dados conectado atual?",
    "alternativas": [
      "\\dt",
      "SHOW TABLES;",
      "DESCRIBE DATABASE;",
      "LIST RELATIONS;"
    ],
    "correta": 0,
    "explicacao": "O comando de terminal interativo `\\dt` exibe de forma limpa as tabelas do schema atual no PostgreSQL."
  },
  {
    "id": 89,
    "tecnologia": "PostgreSQL",
    "enunciado": "Qual porta padrão o servidor PostgreSQL utiliza para conexões de rede TCP/IP?",
    "alternativas": [
      "5432",
      "3306",
      "27017",
      "1521"
    ],
    "correta": 0,
    "explicacao": "A porta padrão registrada e utilizada pelo PostgreSQL é a 5432."
  },

  // --- C# (2 perguntas) ---
  {
    "id": 90,
    "tecnologia": "C#",
    "enunciado": "O que é o LINQ (Language Integrated Query) em C#?",
    "alternativas": [
      "Um conjunto de recursos que integra consultas diretamente na sintaxe da linguagem C#, permitindo filtrar e manipular coleções de dados de forma tipada e fluida.",
      "Uma ferramenta de design visual de interfaces desktop.",
      "Um protocolo de comunicação para APIs SOAP.",
      "Um framework de testes unitários para .NET."
    ],
    "correta": 0,
    "explicacao": "O LINQ revoluciona a manipulação de dados em C# trazendo sintaxe declarativa similar a SQL para dentro do código."
  },
  {
    "id": 91,
    "tecnologia": "C#",
    "enunciado": "Qual é a principal diferença entre tipos por valor (`struct`) e tipos por referência (`class`) em C#?",
    "alternativas": [
      "Tipos por valor armazenam seus dados diretamente na pilha (stack); tipos por referência armazenam uma referência que aponta para o objeto real alocado no heap.",
      "Tipos por valor não podem armazenar números inteiros.",
      "Tipos por referência são imutáveis por padrão.",
      "Não há diferença no gerenciamento de memória."
    ],
    "correta": 0,
    "explicacao": "Structs são alocadas na stack e copiadas por valor, enquanto classes alocam dados no heap e são referenciadas por ponteiros lógicos."
  },

  // --- JAVA (2 perguntas) ---
  {
    "id": 92,
    "tecnologia": "Java",
    "enunciado": "O que garante a portabilidade universal do slogan do Java 'Write Once, Run Anywhere' (Escreva uma vez, execute em qualquer lugar)?",
    "alternativas": [
      "A Máquina Virtual Java (JVM), que interpreta o bytecode compilado independentemente do sistema operacional hospedeiro.",
      "A compilação direta do código para linguagem de montagem exclusiva de cada processador.",
      "A ausência de gerenciamento de memória.",
      "O uso obrigatório de navegadores web para rodar aplicações."
    ],
    "correta": 0,
    "explicacao": "O código Java vira bytecode independente, e cada sistema operacional possui sua JVM própria para executá-lo."
  },
  {
    "id": 93,
    "tecnologia": "Java",
    "enunciado": "Qual framework é considerado o padrão de mercado para construção de aplicações corporativas e microsserviços robustos em Java?",
    "alternativas": [
      "Spring Boot",
      "Django REST",
      "Express.js",
      "Laravel Framework"
    ],
    "correta": 0,
    "explicacao": "Spring Boot simplifica drasticamente a configuração e inicialização de ecossistemas corporativos em Java."
  },

  // --- MYSQL (2 perguntas) ---
  {
    "id": 94,
    "tecnologia": "MySQL",
    "enunciado": "Qual motor de armazenamento (storage engine) padrão do MySQL oferece suporte completo a transações ACID e chaves estrangeiras?",
    "alternativas": [
      "InnoDB",
      "MyISAM",
      "Memory",
      "CSV Storage"
    ],
    "correta": 0,
    "explicacao": "O InnoDB é o engine robusto padrão do MySQL, essencial para integridade relacional e transacional."
  },
  {
    "id": 95,
    "tecnologia": "MySQL",
    "enunciado": "Qual porta TCP padrão o servidor MySQL utiliza para escutar conexões de clientes?",
    "alternativas": [
      "3306",
      "5432",
      "1433",
      "6379"
    ],
    "correta": 0,
    "explicacao": "A porta padrão oficial do MySQL é a 3306."
  },

  // --- TYPESCRIPT (2 perguntas) ---
  {
    "id": 96,
    "tecnologia": "TypeScript",
    "enunciado": "Qual é a principal vantagem de utilizar o tipo `unknown` em vez de `any` em TypeScript?",
    "alternativas": [
      "`unknown` é a versão type-safe do `any`: você não pode executar operações ou acessar propriedades em um valor `unknown` sem antes realizar uma checagem ou coerção de tipo explícita.",
      "`unknown` desativa completamente o compilador TypeScript.",
      "`unknown` é convertido automaticamente para string em tempo de execução.",
      "Não há nenhuma diferença de segurança entre ambos."
    ],
    "correta": 0,
    "explicacao": "`any` desativa a checagem de tipos, enquanto `unknown` força você a validar o tipo antes de usá-lo, garantindo maior segurança."
  },
  {
    "id": 97,
    "tecnologia": "TypeScript",
    "enunciado": "Em que momento os erros de tipagem estática detectados pelo TypeScript são apontados ao desenvolvedor?",
    "alternativas": [
      "Em tempo de compilação (durante o desenvolvimento na IDE ou no build), antes de o código ser executado no navegador ou servidor.",
      "Apenas após o usuário fechar a aba do navegador em produção.",
      "Somente quando o banco de dados falha ao responder.",
      "Em tempo de execução estrita no servidor Node.js."
    ],
    "correta": 0,
    "explicacao": "TypeScript é um superset que adiciona checagem estática antes da execução; após compilado, vira JavaScript puro."
  },

  // --- 1 PERGUNTA CADA PARA AS DEMAIS TECNOLOGIAS (34 perguntas restantes) ---
  {
    "id": 98,
    "tecnologia": "Angular",
    "enunciado": "Qual biblioteca reativa baseada em Observables é amplamente utilizada no ecossistema Angular para gerenciar fluxos de dados assíncronos?",
    "alternativas": [
      "RxJS",
      "Redux Toolkit",
      "MobX",
      "Lodash Async"
    ],
    "correta": 0,
    "explicacao": "RxJS é o alicerce reativo do Angular para lidar com eventos, requisições HTTP e fluxos assíncronos complexos."
  },
  {
    "id": 99,
    "tecnologia": "AWS",
    "enunciado": "Qual serviço da Amazon Web Services (AWS) é recomendado para armazenamento de objetos em nuvem altamente escalável (ideal para arquivos estáticos e backups)?",
    "alternativas": [
      "Amazon S3 (Simple Storage Service)",
      "Amazon EC2",
      "Amazon RDS",
      "AWS Lambda"
    ],
    "correta": 0,
    "explicacao": "O Amazon S3 é o serviço padrão da AWS para guardar e servir qualquer volume de arquivos via web."
  },
  {
    "id": 100,
    "tecnologia": "Figma",
    "enunciado": "Em que etapa do fluxo de desenvolvimento o desenvolvedor web costuma utilizar a ferramenta Figma?",
    "alternativas": [
      "Na inspeção de layouts, extração de medidas em pixels, cópia de códigos CSS gerados e exportação de ativos visuais (assets) aprovados pelo design.",
      "Na compilação de código nativo para sistemas operacionais móveis.",
      "No monitoramento de logs de erro em servidores de produção.",
      "Na criação de tabelas relacionais em SQL."
    ],
    "correta": 0,
    "explicacao": "Figma é a ferramenta de design de UI/UX onde devs coletam especificações visuais exatas para implementar a interface."
  },
  {
    "id": 101,
    "tecnologia": "GitHub",
    "enunciado": "O que caracteriza o recurso de 'Pull Request' (PR) no GitHub?",
    "alternativas": [
      "Uma proposta formal para integrar alterações de uma branch em outra, permitindo revisão de código (code review), discussão e testes automatizados antes do merge.",
      "Um comando executado pelo terminal para baixar atualizações do servidor remoto.",
      "Um relatório de falhas gerado automaticamente em produção.",
      "Um canal de chat interno para comunicação da equipe."
    ],
    "correta": 0,
    "explicacao": "Pull Requests são o mecanismo padrão de colaboração, revisão e controle de qualidade em equipes de desenvolvimento."
  },
  {
    "id": 102,
    "tecnologia": "jQuery",
    "enunciado": "Como selecionar um elemento HTML pelo seu ID utilizando a sintaxe clássica do jQuery?",
    "alternativas": [
      "$('#meuId')",
      "$('.meuId')",
      "$('div#meuId')",
      "jQuery.getById('meuId')"
    ],
    "correta": 0,
    "explicacao": "O caractere `#` em jQuery indica a seleção de elementos através do atributo ID, seguindo a mesma convenção do CSS."
  },
  {
    "id": 103,
    "tecnologia": "MongoDB",
    "enunciado": "Como o MongoDB armazena os dados internamente por padrão em suas collections?",
    "alternativas": [
      "Em documentos no formato BSON (Binary JSON), permitindo esquemas flexíveis e aninhados.",
      "Em tabelas relacionais estritas com chaves estrangeiras rígidas.",
      "Em arquivos de texto plano em formato CSV.",
      "Estritamente na memória RAM volátil sem persistência em disco."
    ],
    "correta": 0,
    "explicacao": "MongoDB é um banco NoSQL orientado a documentos BSON, oferecendo alta flexibilidade de modelagem de dados."
  },
  {
    "id": 104,
    "tecnologia": "Next.js",
    "enunciado": "O que caracteriza o sistema de roteamento baseado em arquivos (File-system routing) dentro do diretório `app` do Next.js?",
    "alternativas": [
      "Cada pasta e arquivo `page.js` criado mapeia automaticamente para uma rota URL correspondente na aplicação.",
      "Todas as rotas devem ser declaradas manualmente em um arquivo XML centralizado.",
      "O roteamento é controlado por comandos SQL executados no servidor.",
      "As rotas dependem de parâmetros passados via requisição FTP."
    ],
    "correta": 0,
    "explicacao": "No Next.js, a árvore de pastas e arquivos reflete diretamente a estrutura de rotas acessíveis no navegador."
  },
  {
    "id": 105,
    "tecnologia": "NoSQL",
    "enunciado": "Qual é a principal motivação para escolher um banco de dados NoSQL em vez de um relacional tradicional (SQL)?",
    "alternativas": [
      "Necessidade de alta escalabilidade horizontal e flexibilidade de esquema (schema-less) para lidar com grandes volumes de dados não estruturados.",
      "Garantia absoluta de transações complexas ACID em qualquer cenário distribuído mundialmente.",
      "Uso obrigatório da linguagem SQL padrão ANSI.",
      "Redução drástica no consumo de espaço em disco."
    ],
    "correta": 0,
    "explicacao": "Bancos NoSQL brilham em cenários de dados altamente dinâmicos, distribuídos e sem estrutura tabular rígida."
  },
  {
    "id": 106,
    "tecnologia": "Scrum",
    "enunciado": "O que é uma 'Sprint' dentro da metodologia ágil Scrum?",
    "alternativas": [
      "Um ciclo de trabalho curto e com prazo fixo (geralmente de 1 a 4 semanas) onde a equipe desenvolve um incremento de produto pronto e utilizável.",
      "Uma reunião diária de 8 horas para planejamento anual da empresa.",
      "O documento final de requisitos entregue pelo cliente antes de iniciar o projeto.",
      "O teste de estresse executado antes de subir o sistema para produção."
    ],
    "correta": 0,
    "explicacao": "A Sprint é o batimento cardíaco do Scrum, um período iterativo focada em entregas contínuas de valor."
  },
  {
    "id": 107,
    "tecnologia": "SQL Server",
    "enunciado": "Qual linguagem procedural proprietária da Microsoft é utilizada para escrever scripts, triggers e stored procedures no SQL Server?",
    "alternativas": [
      "T-SQL (Transact-SQL)",
      "PL/pgSQL",
      "PL/SQL",
      "MySQL Scripting"
    ],
    "correta": 0,
    "explicacao": "T-SQL estende o SQL padrão adicionando lógica de controle de fluxo, variáveis e tratamento de erros no ambiente Microsoft."
  },
  {
    "id": 108,
    "tecnologia": "WordPress",
    "enunciado": "Qual é a diferença funcional entre um Tema e um Plugin no ecossistema WordPress?",
    "alternativas": [
      "O Tema controla a aparência visual e o design do site; o Plugin adiciona funcionalidades e comportamentos lógicos ao sistema.",
      "O Tema gerencia o banco de dados e o Plugin cuida do layout.",
      "São termos sinônimos para o mesmo componente.",
      "Plugins são escritos exclusivamente em Python."
    ],
    "correta": 0,
    "explicacao": "Temas definem o visual (frontend), enquanto plugins estendem as capacidades funcionais (backend/recursos) do WordPress."
  },
  {
    "id": 109,
    "tecnologia": "Ajax",
    "enunciado": "Qual é o objetivo principal de utilizar requisições Ajax no desenvolvimento web?",
    "alternativas": [
      "Comunicar-se com o servidor de forma assíncrona em segundo plano para atualizar partes de uma página web sem precisar recarregá-la inteira.",
      "Compactar arquivos de imagem para melhorar o carregamento.",
      "Criptografar senhas no navegador do usuário.",
      "Gerenciar animações CSS complexas."
    ],
    "correta": 0,
    "explicacao": "Ajax revolucionou a web ao permitir atualizações parciais de dados sem a necessidade de refresh completo da página."
  },
  {
    "id": 110,
    "tecnologia": "Alembic",
    "enunciado": "Qual é a principal utilidade da ferramenta Alembic em projetos Python?",
    "alternativas": [
      "Gerenciar migrações de esquemas de banco de dados em conjunto com o ORM SQLAlchemy.",
      "Empacotar aplicativos Python em arquivos executáveis `.exe`.",
      "Criar servidores web assíncronos de alta performance.",
      "Executar testes unitários automatizados."
    ],
    "correta": 0,
    "explicacao": "Alembic rastreia mudanças nos models do SQLAlchemy gerando scripts de migração estruturados para atualizar o banco com segurança."
  },
  {
    "id": 111,
    "tecnologia": "ASP.NET",
    "enunciado": "O que caracteriza o padrão arquitetural MVC (Model-View-Controller) suportado no ASP.NET Core?",
    "alternativas": [
      "A separação de responsabilidades da aplicação em Model (dados/regras), View (interface do usuário) e Controller (lógica de controle de requisições).",
      "A unificação de todo o código em um único arquivo monolítico.",
      "O processamento exclusivo de scripts no navegador do cliente.",
      "A ausência de rotas HTTP estruturadas."
    ],
    "correta": 0,
    "explicacao": "O padrão MVC organiza aplicações web separando a lógica de negócios, a interface e o controle de fluxo de forma limpa."
  },
  {
    "id": 112,
    "tecnologia": "Azure",
    "enunciado": "O que é o Microsoft Azure no contexto de infraestrutura de TI?",
    "alternativas": [
      "Uma plataforma abrangente de computação em nuvem pública oferecida pela Microsoft para hospedar, gerenciar e criar serviços.",
      "Um editor de código leve concorrente do VS Code.",
      "Um banco de dados NoSQL embarcado.",
      "Um framework JavaScript para renderização frontend."
    ],
    "correta": 0,
    "explicacao": "Azure é a nuvem pública da Microsoft, fornecendo servidores, bancos de dados, IA e serviços gerenciados."
  },
  {
    "id": 113,
    "tecnologia": "Bootstrap",
    "enunciado": "Como funciona o sistema de grade (Grid System) responsivo do Bootstrap?",
    "alternativas": [
      "Utiliza um layout baseado em Flexbox composto por containers, linhas (`row`) e colunas (`col`) divididas em uma proporção de 12 frações.",
      "Exige tabelas HTML rígidas com larguras fixas em pixels.",
      "Funciona exclusivamente em monitores desktop de alta definição.",
      "Substitui completamente a necessidade de escrever CSS personalizado."
    ],
    "correta": 0,
    "explicacao": "O grid system de 12 colunas do Bootstrap facilita a construção rápida de layouts responsivos para diferentes tamanhos de tela."
  },
  {
    "id": 114,
    "tecnologia": "CI/CD",
    "enunciado": "Qual é o principal objetivo de um pipeline de Integração Contínua e Entrega Contínua (CI/CD)?",
    "alternativas": [
      "Automatizar a execução de testes, verificações de qualidade e o deploy seguro de código em produção a cada alteração integrada ao repositório.",
      "Garantir que nenhum desenvolvedor precise escrever testes unitários.",
      "Eliminar a necessidade de servidores em nuvem.",
      "Aumentar o tempo de lançamento de novas versões para meses."
    ],
    "correta": 0,
    "explicacao": "CI/CD automatiza o ciclo de validação e entrega de software, garantindo agilidade e confiabilidade."
  },
  {
    "id": 115,
    "tecnologia": "Docker Compose",
    "enunciado": "Para que serve o arquivo `docker-compose.yml` em um projeto?",
    "alternativas": [
      "Definir e executar aplicativos Docker multi-container (ex: app web + banco de dados + cache) de forma declarativa em um único arquivo.",
      "Configurar regras de firewall do sistema operacional host.",
      "Armazenar tokens de acesso de APIs privadas com criptografia de ponta.",
      "Descrever apenas as dependências de pacotes Python."
    ],
    "correta": 0,
    "explicacao": "O Docker Compose orquestra múltiplos containers interdependentes com um único comando (`docker compose up`)."
  },
  {
    "id": 116,
    "tecnologia": "Elementor",
    "enunciado": "Qual é a utilidade principal do Elementor no ecossistema WordPress?",
    "alternativas": [
      "Servir como um construtor de páginas visual (page builder) do tipo arrastar e soltar (drag-and-drop) para criação rápida de layouts.",
      "Compilar aplicativos móveis nativos para iOS e Android.",
      "Gerenciar migrações de bancos de dados relacionais.",
      "Executar testes automatizados de unidade em JavaScript."
    ],
    "correta": 0,
    "explicacao": "Elementor permite criar páginas ricas visualmente no WordPress sem precisar codificar HTML/CSS do zero."
  },
  {
    "id": 117,
    "tecnologia": "Express.js",
    "enunciado": "O que são Middlewares em um aplicativo Express.js?",
    "alternativas": [
      "Funções que têm acesso ao objeto de requisição (`req`), de resposta (`res`) e à próxima função de middleware no ciclo de processamento do servidor.",
      "Plugins de estilização CSS para rotas web.",
      "Comandos SQL otimizados para Node.js.",
      "Ferramentas de versionamento de código no Git."
    ],
    "correta": 0,
    "explicacao": "Middlewares interceptam requisições para realizar tarefas transversais como autenticação, tratamento de erros e parsing."
  },
  {
    "id": 118,
    "tecnologia": "GCP",
    "enunciado": "O que representa a sigla GCP no contexto de computação corporativa?",
    "alternativas": [
      "Google Cloud Platform",
      "General Control Protocol",
      "Global Core Process",
      "Graphic Content Pipeline"
    ],
    "correta": 0,
    "explicacao": "GCP é a plataforma de serviços em nuvem oferecida pelo Google."
  },
  {
    "id": 119,
    "tecnologia": "Jest",
    "enunciado": "Qual é a finalidade principal do framework Jest em projetos JavaScript/TypeScript?",
    "alternativas": [
      "Escrever e executar testes automatizados (unitários e de integração) com facilidade e suporte a mocks.",
      "Realizar o build e minificação de arquivos CSS.",
      "Fazer o deploy automatizado na nuvem AWS.",
      "Gerenciar o versionamento de código no Git."
    ],
    "correta": 0,
    "explicacao": "Jest é o framework de testes padrão em grande parte do ecossistema JavaScript moderno."
  },
  {
    "id": 120,
    "tecnologia": "JSON",
    "enunciado": "Qual das seguintes opções representa um formato estritamente válido em JSON?",
    "alternativas": [
      "{\"nome\": \"Maria\", \"idade\": 30, \"ativo\": true}",
      "{nome: 'Maria', idade: 30, ativo: true,}",
      "{'nome': \"Maria\", 'idade': 30}",
      "{\"nome\": \"Maria\", \"idade\": 30,}"
    ],
    "correta": 0,
    "explicacao": "JSON exige chaves e strings entre aspas duplas, proíbe vírgulas sobrando no final e não aceita aspas simples."
  },
  {
    "id": 121,
    "tecnologia": "JUnit",
    "enunciado": "Para qual linguagem de programação o JUnit foi desenvolvido para testes automatizados?",
    "alternativas": [
      "Java",
      "JavaScript",
      "Python",
      "C#"
    ],
    "correta": 0,
    "explicacao": "JUnit é o framework clássico e padrão de testes unitários para a linguagem Java."
  },
  {
    "id": 122,
    "tecnologia": "Kanban",
    "enunciado": "Qual é a regra prática fundamental ao utilizar limites de WIP (Work in Progress) em um quadro Kanban?",
    "alternativas": [
      "Restringir a quantidade máxima de tarefas que podem estar em andamento simultaneamente em uma coluna, evitando gargalos e estimulando o fluxo.",
      "Impedir que a equipe tire férias durante a semana.",
      "Aumentar o número de reuniões diárias para 3 horas.",
      "Eliminar a necessidade de testes de software."
    ],
    "correta": 0,
    "explicacao": "Limitar o trabalho em progresso (WIP) força o time a concluir tarefas antes de iniciar novas, melhorando a entrega de valor."
  },
  {
    "id": 123,
    "tecnologia": "Maven",
    "enunciado": "Onde o Apache Maven gerencia e declara as dependências e metadados de build de um projeto Java?",
    "alternativas": [
      "No arquivo `pom.xml` (Project Object Model).",
      "No arquivo `package.json` na raiz.",
      "No script `settings.py`.",
      "No arquivo `Dockerfile` exclusivamente."
    ],
    "correta": 0,
    "explicacao": "O arquivo `pom.xml` centraliza toda a configuração de dependências e plugins de compilação do Maven."
  },
  {
    "id": 124,
    "tecnologia": "n8n",
    "enunciado": "Para que serve primariamente a ferramenta n8n no desenvolvimento de automações?",
    "alternativas": [
      "Construir fluxos de automação de workflows baseados em nós (nodes) integrando diferentes APIs e serviços, com suporte a auto-hospedagem.",
      "Servir como banco de dados NoSQL de alta velocidade.",
      "Compilar código Python em binários C++.",
      "Criar estilos CSS responsivos."
    ],
    "correta": 0,
    "explicacao": "n8n é uma poderosa ferramenta de integração e automação workflow node-based flexível."
  },
  {
    "id": 125,
    "tecnologia": "Oracle",
    "enunciado": "O Banco de Dados Oracle é amplamente reconhecido no mercado corporativo por ser um sistema de gerenciamento de banco de dados...",
    "alternativas": [
      "Relacional de missão crítica, alta robustez e voltado para grande escala empresarial.",
      "NoSQL leve baseado em arquivos locais sem suporte a rede.",
      "Exclusivo para uso educacional gratuito em ambiente mobile.",
      "Desenvolvido nativamente em linguagem Python pura."
    ],
    "correta": 0,
    "explicacao": "Oracle Database é o SGBD relacional corporativo líder em ambientes corporativos de altíssima exigência."
  },
  {
    "id": 126,
    "tecnologia": "PL/SQL",
    "enunciado": "O que é PL/SQL no ecossistema de bancos de dados?",
    "alternativas": [
      "Uma extensão procedural da Oracle que combina a linguagem SQL com recursos de programação (como loops, condicionais e variáveis).",
      "Uma biblioteca Python para análise de dados científicos.",
      "Um protocolo de rede para conexões HTTP seguras.",
      "Uma ferramenta de testes para aplicações React."
    ],
    "correta": 0,
    "explicacao": "PL/SQL permite inserir lógica procedural diretamente dentro do banco de dados Oracle."
  },
  {
    "id": 127,
    "tecnologia": "Playwright",
    "enunciado": "Qual é o foco principal da ferramenta Playwright em testes de software?",
    "alternativas": [
      "Automação de testes ponta a ponta (E2E) e web scraping moderno com suporte a múltiplos navegadores (Chromium, Firefox, WebKit).",
      "Criação de animações vetoriais SVG para páginas web.",
      "Gerenciamento de pacotes Node.js no terminal.",
      "Estilização avançada com pré-processadores CSS."
    ],
    "correta": 0,
    "explicacao": "Playwright é uma ferramenta moderna e rápida para testes E2E e automação de navegadores web."
  },
  {
    "id": 128,
    "tecnologia": "Pydantic",
    "enunciado": "Como o Pydantic realiza a validação de dados em Python?",
    "alternativas": [
      "Utilizando anotações de tipo (type hints) em classes que herdam de `BaseModel` para garantir que os dados cumpram os tipos especificados em tempo de execução.",
      "Através de arquivos de configuração XML externos.",
      "Validando tabelas relacionais via conexões ODBC brutas.",
      "Interpretando sintaxe JavaScript injetada."
    ],
    "correta": 0,
    "explicacao": "Pydantic usa type hints do Python para validar, converter e documentar estruturas de dados de forma rigorosa."
  },
  {
    "id": 129,
    "tecnologia": "Redis",
    "enunciado": "O que é o Redis e para qual propósito ele é mais frequentemente utilizado?",
    "alternativas": [
      "Um armazenamento de dados em memória RAM de altíssima velocidade, usado principalmente como sistema de cache, sessões e filas de mensagens.",
      "Um framework de frontend para criação de SPAs em React.",
      "Um servidor web concorrente do Apache.",
      "Um banco de dados relacional baseado em colunas."
    ],
    "correta": 0,
    "explicacao": "Por operar na memória RAM, o Redis oferece latência submilibissegundo, sendo perfeito para cache e gerenciamento de filas."
  },
  {
    "id": 130,
    "tecnologia": "Redux",
    "enunciado": "Qual é a função principal do Redux em arquiteturas frontend (como em aplicativos React)?",
    "alternativas": [
      "Gerenciamento de estado global centralizado de forma previsível através de actions e reducers puros.",
      "Renderização direta de elementos no servidor Node.js.",
      "Substituição completa do protocolo HTTP por WebSockets.",
      "Compactação automática de imagens PNG e JPEG."
    ],
    "correta": 0,
    "explicacao": "Redux centraliza o estado da aplicação em um único store previsível, facilitando o rastreamento de alterações."
  },
  {
    "id": 131,
    "tecnologia": "RPA",
    "enunciado": "O que significa a sigla RPA (Robotic Process Automation) no contexto de automação corporativa?",
    "alternativas": [
      "O uso de softwares (robôs) para automatizar tarefas repetitivas baseadas em regras em sistemas digitais (como preenchimento de planillas e sistemas legados).",
      "Relational Protocol Architecture.",
      "Remote Program Analysis.",
      "Rapid Python Application."
    ],
    "correta": 0,
    "explicacao": "RPA automatiza processos manuais repetitivos interagindo com interfaces de softwares da mesma forma que um humano faria."
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PERGUNTAS;
}