// Importa o módulo bcryptjs para criptografar senhas
const bcrypt = require('bcryptjs');

// Importa a configuração/instância do banco de dados de outro arquivo
const db = require('../db');

// Exporta um objeto contendo duas funções: registrar e autenticar
module.exports = {
    // Função para registrar um novo usuário
    registrar: (username, password) => {
        // Retorna uma nova promessa
        return new Promise(async (aceito, rejeitado) => {
            // Gera um hash da senha fornecida
            const senhaHash = await bcrypt.hash(password, 10);
            // Insere o novo usuário no banco de dados com o nome de usuário e a senha hash
            db.query('INSERT INTO usuarios (username, senha_hash) VALUES (?, ?)', [username, senhaHash], (error, results) => {
                // Em caso de erro na consulta ao banco de dados, a promessa é rejeitada com o erro
                if (error) rejeitado(error);
                // Se a inserção for bem-sucedida, a promessa é aceita com o ID do novo usuário inserido
                else aceito(results.insertId);
            });
        });
    },

    // Função para autenticar um usuário existente
    autenticar: (username, password) => {
        // Retorna uma nova promessa
        return new Promise((aceito, rejeitado) => {
            // Busca o usuário pelo nome de usuário no banco de dados
            db.query('SELECT * FROM usuarios WHERE username = ?', [username], async (error, results) => {
                // Em caso de erro na consulta, a promessa é rejeitada com o erro
                if (error) {
                    rejeitado(error);
                } else if (results.length > 0) {
                    // Se um usuário for encontrado, compara a senha fornecida com a senha hash armazenada
                    const comparacao = await bcrypt.compare(password, results[0].senha_hash);
                    // Se a comparação for verdadeira, a promessa é aceita com os dados do usuário
                    if (comparacao) aceito(results[0]);
                    // Se a senha não corresponder, a promessa é rejeitada com a mensagem 'Senha incorreta'
                    else rejeitado('Senha incorreta');
                } else {
                    // Se nenhum usuário for encontrado com o nome de usuário fornecido, a promessa é rejeitada com 'Usuário não encontrado'
                    rejeitado('Usuário não encontrado');
                }
            });
        });
    }
};
