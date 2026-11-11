const nomes = ["Ana", "Bruno", "Carla"];


nomes.forEach(nome => console.log(`Olá, ${nome.toUpperCase()}!`));


const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

// --- Exercício 2: precos ---
const precos = [10, 25, 40, 5, 60];


const precosAcima20 = precos.filter(preco => preco > 20);
console.log("Preços acima de 20:", precosAcima20);


const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma de todos os preços:", somaPrecos);

// --- Exercício 3: produtos ---
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 4 },
  { nome: "Calculadora", preco: 45 }
];

const nomesProdutos = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter(produto => produto.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const somaProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log("Soma dos preços dos produtos:", somaProdutos);

produtos.forEach(produto => console.log(`${produto.nome}: R$ ${produto.preco}`));


// Alterar o texto do h1
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog da Ana";

// Selecionar todos os parágrafos .texto e imprimir o texto de cada um
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log(p.textContent));

// Inserir 2 itens na #lista com innerHTML
const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Comunicação visual através de estrutura</li><li>Como contar a história de um personagem através do estilo dele</li>";

// riar um <li> com createElement e adicionar com append
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Não esquecer os tópicos abaixo:";
lista.append(terceiroItem);

// classList.add e classList.contains
terceiroItem.classList.add("destaque");
console.log("Tem a classe destaque?", terceiroItem.classList.contains("destaque"));

// Array de tarefas -> um <li> para cada
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(tarefa => {
  const li = document.createElement("li");
  li.textContent = tarefa;
  lista.append(li);
});

// Classe "feito" no primeiro <li> da lista
lista.querySelector("li").classList.add("feito");

// Quantidade total de itens da lista
console.log("Total de <li>:", document.querySelectorAll("li").length);


const botao = document.querySelector("#botao");


botao.addEventListener("click", () => console.log("Clicou!"));


botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});


const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => console.log(campoNome.value));


lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log(e.target.textContent);
  }
});


const liDinamico = document.createElement("li");
liDinamico.textContent = "Item criado via JavaScript (clique em mim!)";
lista.append(liDinamico);

// Formulário
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const texto = campoTarefa.value.trim(); 
  if (texto === "") return; 

  const li = document.createElement("li");
  li.textContent = texto;
  lista.append(li);

  campoTarefa.value = ""; 
});