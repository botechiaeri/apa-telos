const e = require("connect-flash");

let controller = {
	login: (req, res) => {
		res.render('enterprises/login', { title: 'Login EMPRESAS' });
	},
	clubE: (req, res) => {
		res.render('enterprises/landingEmpresas');
	},
	register: (req, res) => {
		res.render('enterprises/register', { title: 'Cadastro EMRESAS' });
	},
		storage: (req, res) => {
			let fs = require('fs')
			let  eArrayG =  fs.readFileSync(__dirname + '/../data/enterpriseGeneralListDB.json')
			eArrayG = JSON.parse(eArrayG)
			let newE ={
			idE: eArrayG.length + 1,
			nameE: req.body.nameE,
			emailE: req.body.emailE,
			webE: req.body.webE,
			checkE: req.body.checkE,
			notesE: req.body.notesE
		}
		eArrayG.push(newE)
        fs.writeFileSync(__dirname + '/../data/enterpriseGeneralListDB.json', JSON.stringify(eArrayG,null," "))
		res.send('EM BREVE TE MANDAREMOS E-MAIL CONFIRMACION');
		res.render('/empresas')
	},
};
module.exports = controller;
