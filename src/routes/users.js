const usersControllers = require('./../controllers/usersControllers.js');
const express = require('express');
const router = express.Router();
router.get('/', usersControllers.loginU);
//router.get('/login', usuariosRouters.iniciarSeccion);
//router.get('/login/miCuenta', usuariosRouters.miCuenta);
//router.get('/login/error', usuariosRouters.loginError);
router.get('/cadastro', usersControllers.registerU);
//router.get('/crearCuenta/miCuenta', usuariosRouters.nuevaCuenta);
module.exports = router;