const users = require('../models/users')

module.exports = {
    async getInicio(req, res) {
        res.render('../views/login.ejs')
    },
    async postLogin(req, res) {
        const parameters = req.body;
        
        const user = users.findOne({
            where
        });
    },
    async getCadastro(req, res) {
        res.render('../views/cadastro.ejs')

    },
    async postCadastro(req, res) {
        const parameters = req.body;

        console.log(parameters)

        const new_user = await users.create({
            user_name: parameters.user_name,
            user_pw: parameters.user_pw,
            age: 0
        });

        console.log(new_user);
    }
}