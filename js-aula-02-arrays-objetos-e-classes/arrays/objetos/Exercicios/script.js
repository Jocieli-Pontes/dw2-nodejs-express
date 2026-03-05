
const listaClientes =[{
    Nome:"Enzo",
    Endereço:"Rua 04, casa 1",
    Cpf: 456689354,
},{
    Nome:"Eduarda",
    Endereço:"Rua 05, casa 2",
    Cpf: 4409612981,
},{
    Nome:"Maria",
    Endereço:"Rua 06, casa 3",
    Cpf: 4568974126,
}];
document.write(`<h4> Exibindo o array de objetos atraves do forEach:</h4>`);


listaClientes.forEach((lista) =>{
    document.write(`
        nome: ${lista.Nome}
        endereço:${lista.Endereço}
        CPF:${lista.Cpf}<br><br> 

        `);

});
 
document.write("------------------------------------")
listaClientes.push({Nome:"Pedro",Endereço: "Rua 7, casa 4", Cpf: 4563980314})
listaClientes.forEach((lista )=> {
    document.write(`
        <br>nome:${lista.Nome}
        endereço:${lista.Endereço}
        Cpf:${lista.Cpf}<br>`)

});
document.write("-----------------------------------")
listaClientes.unshift({Nome:"Helen", Endereço: "Rua 8, casa 5", Cpf: 562789413})
listaClientes.forEach((lista) =>{
    document.write(`
        <br>
        nome:${lista.Nome}
        endereço:${lista.Endereço}
        Cpf:${lista.Cpf}<br>`)


});

document.write("------------------------------------")
document.write(` <br> O total de clientes é: ${listaClientes.length} <br>`)

