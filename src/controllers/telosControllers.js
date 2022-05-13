const fs = require('fs')
const--- path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDB.json')
const telosFilePath = path.join(__dirname, '../data/localsDB.json')
    //JSON OBJECT --> JS OBJECT
const comunasDB = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));
const telosDB = JSON.parse(fs.readFileSync(telosFilePath, 'utf-8'));
let controller = {
    createTelos: (req res) => {
        let comunaID = req.params.comunaID
        res.render('telos/productosComuna', {
            title: 'Comuna ' + localsDB
        })
    },
    // detallesL: (req, res) => {
    //     let idRooms = req.params.idRooms
    //     res.render('products/detallesP', {
    //         title: 'Producto ' + idRooms,
    //     })
    // },
    homeTelos: (req, res) => {
        res.render('telos/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunas: comunasDB
        })
    },
    detailsByIdC: (req, res)=>{
        let idC = req.params.idC
        res.render('products/productosComuna', {title:'COMUNA #' + idC})
    },
    detailsByIdE: (req, res)=>{
        let idE= req.params.idE;
        res.render('products/detallesNOSocios',
        {idE: req.params.body }
        )
    }
}
module.exports = controller