//tipos de funçoes
//função simples
function showMessage() {
  const message = "<h2> Olá, bem vindo <h2>";
  document.write(message);
}
//invocando a função
showMessage();
//função com parametro/argumento
const user = "Jocieli";

function showUserMessage(user) {
  //essa função recebe um parametro
  document.write(`<h3> O que deseja fazer hoje, ${user}?<h3>`);
}

showUserMessage(user); //envio de argumento
//função com mais de um parametro
const n1 = 10;
const n2 = 5;

function som(n1, n2) {
  //essa função recebe 2 parametros
  let result = n1 + n2;
  document.write(` <p>A soma de ${n1} + ${n2} é igual a ${result}.<p>`);
}
//invocando a função
som(n1, n2); // enviando os argumentos

//função com retorno
const num1 = 50;
const num2 = 3;
// é indicado que as funçoes possuam o minimo de responsabilidades possiveis
//essa função ira multiplicar dois numeros
function mult(num1, num2) {
  return num1 * num2;
}

document.write(`O resultado é ${mult(num1, num2)}`);

//função com retorno condicional
const number = 13;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
document.write(`<p> numero ${number} é ${parImpar(number)}.</p>`);

//funçoes anonima
const divisao = function (n) {
  return n / 2;
};
let numero = 200;

document.write(`<p> A metade de ${numero} é ${divisao(numero)}.</p>`);

//funçaõ seta/ arrow function -> tipo de função anonima
const dobro = (x) => {
  return x * 2;
};
const x = 300;
document.write(`<p> O dobro de ${x} é ${dobro(x)}.</p>`);

// arrow function com mais de um parametro
const calculadora = (a, operador, b) => {
  return eval(`${a} ${operador} ${b}`);
};
document.write(`<p>O resultado da operação matematica é ${calculadora(110, "*", 2)}`)