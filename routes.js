const express = require('express');
const route = express.Router();

const compra = require('./src/controllers/compra');
const inicio = require('./src/controllers/inicio');
const restaurantes = require('./src/controllers/produtos');
const restaurante = require('./src/controllers/restaurante');
const historico = require('./src/controllers/historico');
const invalid = require('./src/controllers/invalid_path')

route.get('/', inicio.getInicio);
route.post('/', inicio.postLogin);

route.get('/cadastro', inicio.getCadastro)
route.post('/cadastro', inicio.postCadastro)

route.get('/restaurantes', restaurantes.getProdutos);

route.get ('/restaurante', restaurante.getRestaurante);
route.get('/compra', compra.getCompra);
route.get('/historico', historico.getHistorico);

route.get('/*', invalid.invalidPath);

//TODO
//finish routes and controllers

module.exports = route;