# Blog da Ana

Esse projeto é um blog simples sobre arte e design de personagem, feito para praticar Arrays, manipulação do DOM e Eventos em JavaScript. São só dois arquivos: o `index.html`, com a estrutura da página, e o `app.js`, com todo o código. Para ver tudo funcionando, é só abrir o `index.html` no navegador e deixar o Console aberto (F12).

## Métodos de array

- **`forEach`**: passa por cada item do array e faz alguma ação com ele, como imprimir uma mensagem no console. Não devolve nada.
- **`map`**: cria um array novo com o resultado de cada item. Usei para colocar os nomes em maiúsculas e para pegar só os nomes dos produtos.
- **`filter`**: cria um array novo só com os itens que passam em uma condição, como os preços acima de 20.
- **`reduce`**: junta todos os itens em um único valor. Usei para somar os preços.

O `map` e o `filter` não alteram o array original, eles sempre devolvem um novo.

## Manipulação do DOM

O JavaScript seleciona os elementos da página com `querySelector` e `querySelectorAll`, muda o conteúdo com `textContent` e `innerHTML`, cria elementos novos com `createElement` e `append`, e controla o visual pelas classes com `classList`. Com isso, o título, a lista e os itens mudam na hora, sem precisar recarregar a página.

## Event Delegation

Os eventos (`click`, `mouseover`, `keyup` e `submit`) fazem a página reagir ao que a pessoa faz. No formulário, o `e.preventDefault()` impede que a página recarregue e o `.trim()` evita tarefas vazias.

Na lista, em vez de colocar um listener em cada `<li>`, coloquei um só na `#lista` e uso o `e.target` para descobrir qual item foi clicado. Isso é importante por dois motivos: deixa o código mais leve e faz com que os itens criados depois pelo JavaScript também funcionem, já que o listener está no elemento pai, que já existia.
