
const productsControllers = require('./../controllers/productsControllers.js')
const express = require('express')
const router = express.Router()

/*/                                    Home
/products                    Muestra Productos
/products/create       Creación Producto
/products/detail/:id   Muestra Detalle Producto
/products/edit/:id      Edición Producto
/products/:id              Eliminación Producto


* Mostrar la información que corresponda según el contexto y la sección.
* Enviar los datos por el método correspondiente
* Redireccionar a la sección que corresponda según el contexto
*/
router.get('/', productsControllers.homeTelos)
router.get('/create', productsControllers.createTelos)
router.post('/create', productsControllers.storage)
router.get('/comuna/:idC', productsControllers.detailsByIdC)
router.get('/details/:idE', productsControllers.detailsByIdE)
// router.get('/CABA', productsController.listCABA)
module.exports = router



