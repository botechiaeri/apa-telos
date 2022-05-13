const fs = require('fs')
const path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT

const listEDB = path.join(__dirname + '/../data/enterpriseGeneralListDB.json')
    //JSON OBJECT --> JS OBJECT

const localsDB = JSON.parse(fs.readFileSync(listEDB, 'utf-8'));


let controller = {
	loginOwners: (req, res) => {
		res.render('apiOwners/sign-in');
	},
	homeOwners: (req, res) => {
		res.render('apiOwners/virtual-reality');
	},
	dashOwners: (req, res) => {
		res.render('apiOwners/dashboard');
	},
	tableOwners: (req, res) => {
		res.render('apiOwners/tables');
	},

	getByIdE: (req, res) =>{
		idEselect = req.params.idE, 
		res.JSON('apiOwners/enterpriseDetails' + idE,{
		title: idEselect,
		localsDB: localsDB.idE
		})
	}
};
module.exports = controller
