const express = require('express');
const route = express.Router();

// Rotas da home
const homeController = require('./src/controllers/homeController');
route.get("/", homeController.index);

// rotas login
const loginController = require('./src/controllers/loginController.js');
route.get("/login/index", loginController.index);
route.post("/login/login", loginController.login);

// rotas cadastro
const cadastroController = require('./src/controllers/cadastroController.js');
route.get("/cadastro/index", cadastroController.index)
route.post("/cadastro/registrar", cadastroController.registrar);


module.exports = route;