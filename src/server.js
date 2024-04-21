// Carrega o módulo dotenv e configura para carregar as variáveis de ambiente do arquivo variaveis.env no diretório atual (__dirname)
require("dotenv").config({ path: __dirname + "/variaveis.env" });

// Importa o módulo express, que é um framework web para Node.js
const express = require("express");

// Importa o módulo cors, que é um middleware para permitir requisições de diferentes origens
const cors = require("cors");

// Importa as rotas definidas no arquivo routes.js
const routes = require("./routes");

// Cria uma instância do servidor Express
const server = express();

// Configura o servidor para aceitar requisições de diferentes origens
server.use(cors());

// Configura o servidor para analisar corpos de requisição codificados em URL e JSON
server.use(express.urlencoded({ extended: true })); // true permite que objetos ricos e arrays sejam codificados na URL-encoded form, compatível com bibliotecas como jQuery
server.use(express.json()); // Para parsear requisições JSON

// Configura o servidor para usar as rotas definidas no arquivo routes.js
server.use('/api', routes);

// Inicia o servidor e faz ele escutar na porta especificada pela variável de ambiente PORT
server.listen(process.env.PORT, () => {
    // Callback chamada quando o servidor é iniciado, exibe uma mensagem indicando o endereço do servidor
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
