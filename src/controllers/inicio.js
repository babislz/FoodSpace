const users = require('../models/users')

module.exports = {
    async getInicio(req, res) {
        res.render('../views/login.ejs')
    },
    
    async postLogin(req, res) {
        const parameters = req.body;

        const user = await users.findOne({
            where: {
                user_name: parameters.user_name, user_pw: parameters.user_pw
            }
        }).then(user => {
            const data = {
                id: user.user_id,
                full_name: user.full_name,
                email: user.user_email,
                phone: user.user_phone,
                name: user.user_name
            };

            res.send(JSON.stringify(data));

        }).catch(err => {
            console.log(err.message);
            res.send(JSON.stringify(null));
        });

    },

    async getCadastro(req, res) {
        res.render('../views/cadastro.ejs')

    },

    async postCadastro(req, res) {
        const parameters = req.body;

        console.log(parameters)

        const new_user = await users.create({
            user_email: parameters.user_email,
            user_name: parameters.user_name,
            user_pw: parameters.user_pw,
            user_phone: parameters.user_phone,
            full_name: "testt" //create input for this
        });

        console.log(new_user);
    }
}