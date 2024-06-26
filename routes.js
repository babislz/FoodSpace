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
const address_manager = require('./src/controllers/address_manager');
const cart_controller = require('./src/controllers/cart_controller');

route.get('/', inicio.getInicio);
route.post('/', inicio.postLogin);

route.get('/cadastro', inicio.getCadastro)
route.post('/cadastro', multer({storage: config.userImageMulter}).single('foto'), inicio.postCadastro)

route.get('/restaurantes', restaurantes.getRestaurantesPage);

route.get('/restaurantes/list', restaurantes.getStores)

route.get ('/restaurante', restaurante.getRestaurante);
route.post ('/restaurante/editBanner', multer({storage: config.bannerImageMulter}).single('foto_banner'), restaurante.editBanner);
route.post ('/restaurante/addProduct', multer({storage: config.productImageMulter}).single('foto_produto'), restaurante.createProduct);
route.post ('/restaurante/addHighlight', restaurante.createHighlight);

route.get('/compra', compra.getCompra);
route.get('/historico', historico.getHistorico);

route.get('/cadastro-restaurantes', cadastro_restaurante.getStoreRegister);
route.post('/cadastro-restaurantes', multer({storage: config.restaurantImageMulter}).single('foto'), cadastro_restaurante.postStoreRegister);

route.get('/cadastro-produto', cadastro_prod.prodGet);
route.post('/cadastro-produto', multer({storage: config.productImageMulter}).single('foto'), cadastro_prod.prodInsert);

route.get('/cart/get', cart_controller.getCart)
route.get('/cart/add', cart_controller.addItem)

route.post('/registerAddress', address_manager.registerAddress);
route.get('/getAddresses', address_manager.getAddresses);


route.get('/*', invalid.invalidPath);

//TODO
//finish routes and controllers

module.exports = route;