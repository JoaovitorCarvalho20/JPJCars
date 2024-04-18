// Carrega o módulo dotenv e configura para carregar as variáveis de ambiente do arquivo variaveis.env no diretório atual (__dirname)
require("dotenv").config({ path: __dirname + "/variaveis.env" });

// Importa o módulo express, que é um framework web para Node.js
const express = require("express");

// Importa o módulo cors, que é um middleware para permitir requisições de diferentes origens
const cors = require("cors");

// Importa o módulo body-parser, que é um middleware para analisar corpos de requisição em diferentes formatos
const bodyParser = require("body-parser");

// Importa as rotas definidas no arquivo routes.js
const routes = require("./routes");

// Cria uma instância do servidor Express
const server = express();

// Configura o servidor para aceitar requisições de diferentes origens
server.use(cors());

// Configura o servidor para analisar corpos de requisição codificados em URL
server.use(bodyParser.urlencoded({ extended: false }));

// Configura o servidor para usar as rotas definidas no arquivo routes.js
server.use('/api', routes);

// Inicia o servidor e faz ele escutar na porta especificada pela variável de ambiente PORT
server.listen(process.env.PORT, () => {
    // Callback chamada quando o servidor é iniciado, exibe uma mensagem indicando o endereço do servidor
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
