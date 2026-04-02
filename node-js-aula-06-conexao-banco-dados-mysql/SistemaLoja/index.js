// Importando o Express
//const express = require("express")
import express from "express";
//Importando o Controlador de Cliente (onde estão as rotas)
import ClienteController from "./controllers/ClienteController.js"
import ProdutoController from "./controllers/ProdutoController.js"
import PedidoController from "./controllers/PedidoController.js"
//importando o arquivo de conexao com o bando
import connection from "./config/sequelize-config.js"; 
// realizando a conexao com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexao com o banco de dados realizada com sucesso!")
}).catch((error)=> {
    console.log(`Ocorreu um erro ao se conectar ao banco. ${error}`);
});

//criando o banco de dados
connection.query("CREATE DATABASE IF NOT EXISTS SistemaLoja;").then(() => {
    console.log("O banco de dados está criado!");
}).catch((error) =>{
    console.log(`Ocorreu um erro ao criar o banco de dados.Erro: ${error}`);
});

// Iniciando o Express 
const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// ativando o uso das ROTAS
app.use("/", ClienteController)
app.use("/", ProdutoController)
app.use("/", PedidoController)
// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})


// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})