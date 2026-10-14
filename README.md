# Já posso programar?

Um quiz que mede, de forma amplo, o quanto a pessoa está preparada para entrar no mercado de desenvolvimento de software (vagas júnior de desenvolvimento web e Python no Brasil). No final, o quiz dá uma pontuação de 0% a 100%.

## Como a pontuação funciona

Cada pergunta tem um peso baseado no número de vagas júnior que citam aquela tecnologia (fonte: análise de 29 vagas). Acertar uma pergunta soma o peso dela; errar ou responder "Não sei" soma zero. A pontuação final é:

```
(soma dos pesos das perguntas acertadas / soma dos pesos das 50 perguntas sorteadas) × 100
```

Arredondada para o inteiro mais próximo. Assim, errar uma pergunta sobre Python (peso 16) influencia muito mais a nota do que errar sobre uma tecnologia de peso 1.

## Como a lista de tecnologias foi obtida

A lista foi obtida por meio de uma pesquisa simples em 29 vagas júnior de desenvolvimento web e Python em sites de recrutamento brasileiros (data de coleta: outubro de 2026). Contamos quantas vezes cada tecnologia foi mencionada. A amostra é pequena e o resultado é uma estimativa, não uma avaliação profissional de mercado.

## Como executar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` com duplo clique (ou abra no navegador).
3. O jogo funcionará totalmente offline; nenhum servidor é necessário.

## Como publicar no GitHub Pages

1. Faça o commit de todos os arquivos em uma branch (por exemplo, `main`).
2. No repositório no GitHub, vá em Settings → Pages.
3. Fonte: `main` branch, diretório `/`.
4. Clique em Save. O site será publicado em `https://<usuario>.github.io/<repositorio>/`.

Obs.: Esse projeto está visível em "https://oldFaraday.github.io/ja-posso-programar/"

## Como contribuir com novas perguntas

- Edite o arquivo `js/perguntas.js`.
- Cada pergunta deve ser um objeto no formato:
  ```javascript
  {
    id: <número único>,
    tecnologia: "<nome exatamente como aparece em js/tecnologias.js>",
    enunciado: "<texto da pergunta>",
    alternativas: ["A", "B", "C", "D"],
    correta: <índice 0-3 da alternativa correta>,
    explicacao: "<explicação curta de 1 a 2 frases>"
  }
  ```
- Mantha o total de perguntas entre 100 e 150.
- Após editar, execute o script de validação: `node scripts/validar.js`.
- Se a validação passar, faça um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo `LICENSE` para detalhes.
