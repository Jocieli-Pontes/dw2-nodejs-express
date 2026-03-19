//O arquivo index.js é o arquivo principal do projeto

//importando o modulo do express
const express = require("express")

//criando uma instancia do Express
const app = express()

//configurando o EJS
app.set('view engine', 'ejs')

//Criando a rota principal do site ("/")
app.get("/", function(req, res) {
    // res.send("Bem-vindo ao meu primeiro site em node.js e express.js")
    res.render("index")
})
//rota clientes
//rota clientes sem parametro
app.get("/clientes", function(req, res){
    const listaClientes = ['Maria', 'Joao','Ana','Mario']
    res.render("clientes",{
        listaClientes: listaClientes
    });
})
//rota de clientes com parametros
app.get("/clientes/:cliente", function(req, res){
    const cliente = req.params.cliente
    res.render("detalhesCliente", {
        cliente: cliente
    })
})
//rota de produtos sem parametro
app.get("/produtos", function(req, res){
    const listaProdutos = ['Computador','Celular', 'Tablet', 'Notbook'];
    res.render("produtos", {
        //enviando variaveis para pagina html
        listaProdutos :listaProdutos
    });
        
})
//rota de produtos com parametro
app.get("/produtos/:produto", function(req, res){
    const produto = req.params.produto
    res.render("detalhesProduto", {
        produto: produto
    
    })
})

//rota de serviços, array de objetos
app.get("/servicos", function(req, res){
    const servicos =[
        {servico: "Desenvolvimento de websites", descricao:"Criaçao de sites com Node.js e integração a banco de dados", preco: 3500},
        {servico: "Auditoria de UX/UI", descricao:"Avaliação da usabilidade de sistemas com sugestoes de ,elhoria", preco: 1500},
        {servico: "Infraestrutura em Nuvem", descricao:"Configuração de servidores e hospedagem de aplicaçoes", preco: 2900},
        {servico: "Chatbot com IA", descricao:"Desenvolvimento de chatbot para atendimento automatico", preco: 2750},
    ]
    res.render("servicos", {
        //enviando o Array de objetos para a pagina
        servicos: servicos
    })

})
 //criando a rota de perfil do usuario
 app.get("/perfil", (req,res) => {
    //res.send("Bem vindo ao seu perfil")
    res.render("perfil")

 })
//Iniciando o servidor na porta 8080
const port = 8080
app.listen(port, function(error){
    if (error){
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);

    }else{
        console.log(`Servidor iniciado com sucesso na porta http://localhost:${port}`);
    }
});

