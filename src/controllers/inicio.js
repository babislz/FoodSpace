module.exports = {
    async getInicio(req, res) {
        res.render('../views/login.ejs')
    },
    async postLogin(req, res) {
        
    },
    async getCadastro(req, res) {
        res.render('../views/cadastro.ejs')
    }
}