// Importa o módulo express para criar instâncias de roteadores do Express
const express = require('express');

// Cria uma instância de um roteador do Express
const router = express.Router();

// Importa o controlador de carros
const CarroController = require('./controller/CarroController');

// Define a rota para buscar todos os carros
router.get('/carros', CarroController.buscarTodos);
//Define rota para buscar apenas um carro especifico
router.get('/carro/:id', CarroController.buscarUm);
//Define a rota para incluir um Carro
router.post('/carro',CarroController.inserir);
// Exporta o roteador para que possa ser usado em outros arquivos
module.exports = router;


