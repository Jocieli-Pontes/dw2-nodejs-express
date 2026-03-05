//declarando e exibindo items de um array
let produtos = [];
document.write(typeof produtos);

let produts = ["Computador", "Notbook", "celular", "Tablet"];
document.write(`<p>${produts}</P>`);

document.write(`<p> Exibindo os elementos do vetor atraves do indice:</p>`);

document.write(`<p>${produts[0]}</p>`);
document.write(`<p>${produts[1]}</p>`);
document.write(`<p>${produts[2]}</p>`);
document.write(`<p>${produts[3]}</p>`);

document.write(`<p> Exibindo elementos do vetor atraves do forEach: </p>`);
produts.forEach( (produtc) =>{
  document.write(`<p>${produtc}<p/>`);
});

document.write(`<p> Exibindo elementos do vetor atraves do forEach com os indices: </p>`);
produts.forEach((product, i) =>{
    document.write(`<p>${i +1} - ${product} </p>`)

});
//metodos de manipulaçao dos vetores
let frutas = ["laranja", "maça", "Banana"]
document.write(`<p> Nossa lista de frutas é: ${frutas}</p>`)
frutas[3]= "morango"
document.write(`<p> Agora nossa lista de frutas é:${frutas}</p>`)

document.write(`<h4> O metodo push -Insere um novo elemento no FINAL do vetor.</h4>`)
frutas.push("Abacaxi")
document.write(`<p> Agora nossa lista de frutas é:${frutas}</p>`)

document.write(`<h4> O metodo UNSHIFT -Insere um novo elemento no INICIO do vetor.</h4>`)
frutas.unshift("Pera")
document.write(`<p> Agora nossa lista de frutas é:${frutas}</p>`)

// COMO CONTAR OS ELEMENTOS DE UM VETOR- METODO LENGTH
const items = frutas.length
document.write(`<p> Na nossa lista temos ${items} frutas.</p>`)


