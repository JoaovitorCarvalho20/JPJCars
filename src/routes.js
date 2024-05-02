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
//Define a rota para editar um carro
router.post('/carro',CarroController.inserir);
//Define a rota para excluir um carro
router.delete('/carro/:id', CarroController.excluir);

// Exporta o roteador para que possa ser usado em outros arquivos
router.put('/carro/:id', CarroController.alterar);
module.exports = router;

const UsuarioController = require('./controller/UsuarioController');
// Rotas para usuário
router.post('/usuarios/registrar', UsuarioController.registrar);
router.post('/usuarios/login', UsuarioController.autenticar);



