const fs = require('fs')
const path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDB.json')
const localsFilePath = path.join(__dirname, '../data/localsDB.json')
    //JSON OBJECT --> JS OBJECT
const comunasDB = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));
const localsDB = JSON.parse(fs.readFileSync(localsFilePath, 'utf-8'));
let controller = {
    createTelos: (req, res) => {
        //let comunaID = req.params.comunaID
        res.render('telos/register_telos', {
            title: 'FORM REGISTER TELOS',

        })
    },
    storage: (req, res) =>{
        let fs = require('fs')
        let  arrayTelos =  fs.readFileSync(__dirname + '/../data/telosDB.json')
			arrayTelos = JSON.parse(arrayTelos)

            
			let newT = {
                comunaID : req.body.comunaID,
                nameL : req.body.nameL,
                idL : arrayTelos.length + 1,
                aL : req.body.aL,
                parkingL : req.body.parkingL,
                telL: req.body.telL,
                socialMidiaL: req.body.socialMidiaL,
                wL: req.body.wL,
                dL: req.body.dL,
                sL: 
                {
                   clima_hot: req.body.sL[0],
                   clima_cold: req.body.sL[1],
                  music_player: req.body.sL[2],
                room_service: req.body.sL[3],
                    sex_shop: req.body.sL[4],
                    porn_channels: req.body.sL[5],
                   thresome_accepts: req.body.sL[6],
                   gay_friendly: req.body.sL[7],
                    thematic: req.body.sL[8]
                },
                tyP:  {
                    tyP_a  : req.body.tyP_a,
                    tyP_b: req.body.tyP_b,
                    tyP_c: req.body.tyP_c,
                    tyP_d: req.body.tyP_d
                }, 
                minPrice: req.body.minPrice,
                maxPrice: req.body.maxPrice,
                roomsL: {
                    rooms_1FK:  req.body.rooms_1FK,
                    rooms_2FK: req.body.rooms_2FK,
                    rooms_3FK: req.body.rooms_3FK,
                    rooms_4FK:  req.body.rooms_4FK,
                    rooms_5FK: req.body.rooms_5FK,
                    rooms_6FK: req.body.rooms_6FK,
                    rooms_1FK:  req.body.rooms_7FK,
                },
                notesT: req.body.notesT,
                img00_brand: req.files.img00_brand
            }
		arrayTelos.push(newT)
        fs.writeFileSync(__dirname + '/../data/telosDB.json', JSON.stringify(arrayTelos,null," "))

        res.redirect('/telos')
    },
    // detallesL: (req, res) => {
    //     let idRooms = req.params.idRooms
    //     res.render('products/detallesP', {
    //         title: 'Producto ' + idRooms

    homeTelos: (req, res) => {
        res.render('telos/landing_telos', {
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