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
app.get("/clientes", function(req, res){
    res.render("clientes")
})

app.get("/produtos", function(req, res){
    res.render("produtos")
})

app.get("/servicos", function(req, res){
    res.render("servicos")
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

