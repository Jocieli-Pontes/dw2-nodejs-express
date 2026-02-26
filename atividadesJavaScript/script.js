
// função simples
function dados(){
const dados = ("Jocieli, idade:29, cidade: Registro")
return dados;
}
console.log(dados());

//Função com parâmetros
const n1 =100;
const n2 = 20;
function calc( n1, n2){
    let resultado = n1 / n2;
    console.log(`A divisao de ${n1} e ${n2} é: ${resultado} `);

}
calc(n1,n2);

//função com retorno
const number1 = 10;
const number2 = 20;
const number3 =30;
function mult(number1,number2,number3){
    return number1 * number2 * number3;

}

console.log(`O resultado é ${mult(number1, number2,number3)}`);

//Função com mais de um retorno
const i = 29;
function idade(number){
    if (number >= 18){
        return "Maior de idade";
    } else{ 
        "menor de idade";
    }
}

console.log(` voce é ${idade(i)}`);

//Função anônima
const media = function(nota1, nota2){
    let number = (nota1 + nota2) / 2
    if(number <=5 ){
        return " Reprovado"
    }else{
        return "aprovado"
    }

}
 console.log(media(10, 8)) ;  

 //Arrow function com parâmetro único

 const tiplo = (x) => {
    return x * 3;
    
    
}
const x = 10;
console.log(`O tiplo do numero ${x}: ${tiplo(10)}`);

//Arrow function com mais de um parâmetro
const soma = (x) =>{
    return x + 4;
}
const y =10;
console.log(`A soma do numero ${x}: ${soma(y)}`);

const somaA = (n1,n2,n3,n4) => {
    return n1+n2+n3+n4;

}

console.log(`A soma do numero ${x}: ${somaA(2,5,8,4)}`);
