# CRUD 

----

```

const fs = require('fs')
const path = require('path')

var x = (n) => n.tostring().replace(/\B(?=(\d{3})+?!\d))/g, " ")
const productsFilePath = path.join(__dirname, '../prodcts )
let controller = {
create: (req  , res)=>{
    res.render('form_createProducts)
    },
store: (req, res)=>{
   
   let productos = products;

    // ID NUEVO - FORMA #01
    let idNuevo = productos[products.lenght-1].id +1

   
  console.log('[OBJECT PROTOTYOE]')
    var newP1 = {
        id: idNuevo,
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount,
        category: req.body.category,
        description: req.body.description,
        img: "link img"
    }
    
    console.log(newP1)
  // ID NUEVO - FORMA #02



let newP2 = products
 
 newP2 = req.body;
 newP2.id = idNuevo
 newP2.image = "link 2"
console.log(newP2)


//GUARDADO LOGICO
products.push(newP2)



// GUARDADO FISICO 
fs.writeFileSync('/../data/products.json), JSON.stringfy(Productos, null, ' ');


// ACA ES X RUTA
res.redirect('/')
    }
},

// EN RUTA '/' en su respectivo CONTROLLER de method INDEX  REFRESCAR NUEVOS DATOS

/* <!-- ---------------------------*******NO OLVIDAR DE HACER REFRESH EN LISTA DE PRODUCTOSS------------------------ -->*/

index: (req, res) =>{
    const products = JSON.parse(fs.readFileSync(productsFilePath, utf-8))
    res.render("index" , (productos: products))
````




# SEARCH and RENDER SELECT PRODUCT  
```js

// update or edit
update: (req, res)=>{
let idPSelect = req.params.id
let foundProduct = null;

for(let p of products){
    if(p.id == idPSelect){
        foundProduct = p;
        break
    }
}
res.render{'detail, { prodUct : foundProduct}}
}


// RUTA 2 - update form to edit

// EDIT --->  RUTA PARAMETRIZADA products/edit/:idP 

// ROUTER.GET('/EDIT/:IDP)

//BUSCO PRODUCTO ENVIADO (COPIAR E COLAR )
edit: (req, res) => {
    let idPselect = req.params.idP
    let pSearch = null
}

for(let p of products){
    if(p.id == idPSelect){
        foundProduct = p;
        break
    }
}
res.render('product-edit-form' , { product.name : foundProduct})
}

