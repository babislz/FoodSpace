const express = require('express');
const route = express.Router();

const home = require('./src/controllers/home');
const compra = require('./src/controllers/compra');
const inicio = require('./src/controllers/inicio');
const restaurantes = require('./src/controllers/produtos');
const historico = require('./src/controllers/historico');

route.get('/', inicio.getInicio);
route.get('/cadastro', inicio.getCadastro)
route.get('/restaurantes', restaurantes.getProdutos);
route.get('/compra', compra.getCompra);
route.get('/historico', historico.getHistorico);

route.get('/*', inicio.getInicio);

//TODO
//finish routes and controllers

module.exports = route;