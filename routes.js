const express = require('express')
const route = express.Router();

const home = require('./src/controllers/home')
const compra = require('./src/controllers/compra')

route.get('/', home.getInicio)
route.get('/compra', compra.getCompra)

//TODO
//finish routes and controllers

module.exports = route;