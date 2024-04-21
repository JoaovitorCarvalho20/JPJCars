// Importa a configuração do banco de dados
const db = require('../db');

// Define e exporta o módulo de operações no banco de dados para a tabela de carros
module.exports = {
    // Método para buscar todos os carros no banco de dados
    buscarTodos: () => {
        // Retorna uma promessa que será resolvida com os dados do banco ou rejeitada com um erro
        return new Promise((aceito, rejeitado) => {
            // Executa uma consulta SQL para selecionar todos os registros na tabela de carros
            db.query('SELECT * FROM carros', (error, results) => {
                if (error) {
                    // Se ocorrer um erro na consulta, a promessa é rejeitada com esse erro
                    rejeitado(error);
                    return;
                }
                // Se a consulta for bem-sucedida, a promessa é resolvida com os resultados obtidos
                aceito(results);
            });
        });
    },
    
    // Método para buscar um carro específico por ID
    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {
            // Executa uma consulta SQL para selecionar um carro pelo ID fornecido
            db.query('SELECT * FROM carros WHERE id = ?', [id], (error, results) => {
                if (error) {
                    // Se ocorrer um erro na consulta, a promessa é rejeitada
                    rejeitado(error);
                    return;
                }
                if (results.length > 0) {
                    // Se a consulta retornar algum registro, a promessa é resolvida com o primeiro resultado
                    aceito(results[0]);
                } else {
                    // Se não retornar nenhum registro, a promessa é resolvida com false
                    aceito(false);
                }
            })
        })
    },

    // Método para inserir um novo carro no banco de dados
    inserir: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            // Executa uma consulta SQL para inserir um novo carro com os valores de modelo e placa
            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)', [modelo, placa], (error, results) => {
                if (error) {
                    // Se ocorrer um erro durante a inserção, a promessa é rejeitada com esse erro
                    rejeitado(error);
                    return;
                }
                // Se a inserção for bem-sucedida, a promessa é resolvida com o ID do carro inserido
                aceito(results.insertId);
            });
        });
    },

    // Método para alterar um carro existente
    alterar: (id, modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            // Executa uma consulta SQL para atualizar o modelo e a placa de um carro específico pelo ID
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE id = ?',
                [modelo, placa, id],
                (error, results) => {
                    if (error) {
                        // Se ocorrer um erro na atualização, a promessa é rejeitada
                        rejeitado(error);
                        return;
                    }
                    // Se a atualização for bem-sucedida, a promessa é resolvida com os resultados
                    aceito(results);
                }
            );
        });
    },

    // Método para excluir um carro pelo ID
    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            // Executa uma consulta SQL para deletar um carro pelo ID fornecido
            db.query('DELETE FROM carros WHERE id = ?', [id], (error, results) => {
                if (error) {
                    // Se ocorrer um erro na exclusão, a promessa é rejeitada
                    rejeitado(error);
                    return;
                }
                // Se a exclusão for bem-sucedida, a promessa é resolvida com os resultados
                aceito(results);
            });
        });
    }
};
