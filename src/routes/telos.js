
const telosControllers = require('./../controllers/telosControllers.js')
const express = require('express')
const router = express.Router()

/* 

/*00 /                                    Home
/telos                    Muestra Productos
/telos/create       Creación Producto
/telos/detail/:id   Muestra Detalle Producto
/telos/edit/:id      Edición Producto
/telos/:id              Eliminación Producto*/


/* Mostrar la información que corresponda según el contexto y la sección.
* Enviar los datos por el método correspondiente
* Redireccionar a la sección que corresponda según el contexto
*/
router.get('/', telosControllers.homeTelos)
router.get('/create', telosControllers.createTelos)
router.get('/details/:idE', telosControllers.detailsByIdE)
router.get('/comuna-:idC', telosControllers.detailsByIdC)

router.get('/newRooms/:idR', telosController.createRooms)
module.exports = router



