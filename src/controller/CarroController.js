// Importa o serviço que contém a lógica de negócios relacionada aos carros
const CarroService = require('../services/CarroServices')

// Exporta os métodos do controlador para serem usados nas rotas
module.exports = {
    // Método para buscar todos os carros cadastrados
    buscarTodos: async(req, res) => {
        let json = {error: "", result: []}; // Objeto inicial para a resposta JSON
        let carros = await CarroService.buscarTodos(); // Obtém todos os carros do serviço

        // Itera sobre os carros retornados e os reformata para a resposta
        for (let i in carros) {
            json.result.push({
                codigo: carros[i].id,     // Usa o "id" como "codigo" no JSON de resposta
                descricao: carros[i].modelo // Descrição é baseada no modelo do carro
            });
        }

        res.json(json); // Envia a resposta JSON
    },

    // Método para buscar um carro específico pelo ID
    buscarUm: async(req, res) => {
        let json = {error: "", result: {}};
        let id = req.params.id; // Captura o ID do carro da URL
        let carro = await CarroService.buscarUm(id); // Busca o carro pelo ID

        if (carro) {
            json.result = carro; // Se encontrado, retorna o carro
        }

        res.json(json); // Envia a resposta JSON
    },

    // Método para inserir um novo carro no banco de dados
    inserir: async(req, res) => {
        let json = {error: "", result: {}};
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (modelo && placa) {
            let carroId = await CarroService.inserir(modelo, placa); // Insere o carro e retorna o ID
            json.result = {id: carroId, modelo, placa};
        } else {
            json.error = 'Campos não enviados'; // Error se modelo ou placa não forem fornecidos
        }

        res.json(json); // Envia a resposta JSON
    },

    // Método para atualizar um carro existente
    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id; // Captura o ID do carro da URL
        let modelo = req.body.modelo; // Novo modelo
        let placa = req.body.placa; // Nova placa

        if (id && modelo && placa) {
            await CarroService.alterar(id, modelo, placa); // Atualiza o carro
            json.result = {id, modelo, placa}; // Retorna o carro atualizado
        } else {
            json.error = 'Campos não enviados'; // Error se algum campo não for fornecido
        }

        res.json(json); // Envia a resposta JSON
    },

    // Método para excluir um carro
    excluir: async(req, res) => {
        let json = {error:'', result:{}};
        await CarroService.excluir(req.params.id); // Exclui o carro pelo ID
        res.json(json); // Envia a resposta JSON indicando sucesso
    }
}
