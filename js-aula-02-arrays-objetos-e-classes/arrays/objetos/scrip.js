//objetos literais do javascript
document.write(`<h4> Objetos literais possuem atributos (propriedades) e seus metodos(funcoes)</h4>`);
const pessoa ={};
document.write(typeof(pessoa));

//criando o objeto

const carro={
    modelo: "gol",
    cor: "vermelho",
    //metodos
    acelerar(){
        return "vrummmmm..";
    },
    frear(){
        return"freando...";

    },
};
document.write(`<p> O modelo do carro é: ${carro.modelo}</p>`)
document.write(`<p> A cor do carro é: ${carro.cor}</p>`)
document.write(`<p> Quando o carro acelera ele faz: ${carro.acelerar()}</p>`)
document.write(`<p> Ativando os freios: ${carro.frear()}</p>`)

//mqanipulando arrays de obejtos
const productList = [{
    nome:"Computador",
    marca:"Lenovo",
    preco:3000,
    descricao: "PC moderno com bom desempreno",
},{
    nome:"Tablet",
    marca:"Samsung",
    preco:2000,
    descricao: "Otima velocidade de processamento",
},{
     nome:"Celular",
    marca:"apple",
    preco:12000,
    descricao: "Ultra resistente",

}
];
//exibindo o array de obejetos atraves do forech
document.write(`<h4> Exibindo o array de objetos atraves do forEach:</h4>`);
productList.forEach((product)=> {
    document.write(`
        produto: ${product.nome}<br>
        marca:${product.marca}<br>
        preço:${product.preco}<br>
        descricao:${product.descricao}<br><br>
        `
    );
});

