const express = require('express');
const route = express.Router();

const compra = require('./src/controllers/compra');
const inicio = require('./src/controllers/inicio');
const restaurantes = require('./src/controllers/restaurantes');
const restaurante = require('./src/controllers/restaurante');
const historico = require('./src/controllers/historico');
const invalid = require('./src/controllers/invalid_path');
const cadastro_restaurante = require('./src/controllers/store_register');
const multer = require("multer");
const config = require('./src/config/multer');
const cadastro_prod = require('./src/controllers/cadastro_prod');

route.get('/', inicio.getInicio);
route.post('/', inicio.postLogin);

route.get('/cadastro', inicio.getCadastro)
route.post('/cadastro', inicio.postCadastro)

route.get('/restaurantes', restaurantes.getRestaurantesPage);

route.get('/restaurantes/list', restaurantes.getStores)

route.get ('/restaurante', restaurante.getRestaurante);
route.get('/compra', compra.getCompra);
route.get('/historico', historico.getHistorico);

route.get('/cadastro-restaurantes', cadastro_restaurante.getStoreRegister);
route.post('/cadastro-restaurantes', cadastro_restaurante.postStoreRegister);

route.get('/cadastro-produto', cadastro_prod.prodGet);
route.post('/cadastro-produto', multer(config).single('foto'), cadastro_prod.prodInsert);

route.get('/*', invalid.invalidPath);

//TODO
//finish routes and controllers

module.exports = route;