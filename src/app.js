/***********settings****** */
require('dotenv').config()

const colors = require('colors')

const express = require('express');
const http = require('http')
const PORT = 3021;
const port = process.env.PORT || 3000;
const path = require('path');
const app = express() 
const mainRouters = require('./routes/main.js');
const apaClubRouters = require('./routes/apa-club.js');
const usersRouters = require('./routes/users.js');
const productsRouters = require('./routes/products.js');
const enterprisesRouters = require('./routes/enterprises.js');
const ownersRouters = require('./routes/apiOwners.js');
const multer = require('multer')
//const searchRouter = require('./routes/searchRoutes.js');
//const gameAIRouter = require('./routes/gameAIRoutes.js');
//const staffRouter = require('./routes/staffRoutes.js');
/**************define end points***************/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
/***********static  files***************************/
app.use(express.static(path.join(__dirname, './../public')));
const methodOverride = require('method-override');
/***********middlewares expreess*******/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
//app.use(metricsForEntry);
//app.use(
//    session({
//        secret: 'myAPIAPAseccion',
//        resave: true,
//        saveUninitialized: true,
//    })
app.use('/', mainRouters);
app.use('/apiOwners', ownersRouters);
app.use('/users', usersRouters);
app.use('/telos', productsRouters);
app.use('/enterprises', enterprisesRouters);
app.use('/apa-club', apaClubRouters);
//app.use('/search', searchRouter);
//app.use('/ApaGame', gameAIRouter);
//app.use('/staff', staffRouter);
/***********Server listen 3030****** */


app.listen (3021, () => {
console.log( 'Levantado y Corriendo en 3021')

})
module.exports = app;
