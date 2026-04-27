const express = require('express');
const route = express.Router();

// Rotas da home
const homeController = require('./scr/controllers/homeController');
route.get("/", homeController.index);

// rotas login
const loginController = require('/scr/controllers/loginController.js');
route.get("/login/index", loginController.index)

// rotas cadastro
const cadastroController = require('/scr/controllers/cadastroController.js');
route.get("/cadastro/index", cadastroController.index)


module.exports = route;