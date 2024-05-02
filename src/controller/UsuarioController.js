const UsuarioService = require('../services/usuarioServices');

module.exports = {
   //Metodo para registrar um novo usuário
    registrar: async (req, res) => {
        try {
            const { username, password } = req.body;
            const userId = await UsuarioService.registrar(username, password);
            res.json({ success: true, userId });
        } catch (error) {
            res.status(500).json({ success: false, message: error });
        }
    },

    //Metodo para autenticar um usuário
    autenticar: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await UsuarioService.autenticar(username, password);
            res.json({ success: true, user });
        } catch (error) {
            res.status(401).json({ success: false, message: error });
        }
    }
};
