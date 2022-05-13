let controller = {
	loginU: (req, res) => {
		res.render('users/login', {
			title: 'APA LOGIN',
		});
	},
	// iniciarSeccion: (req, res) => {
	// 	'';
	// },
	// miCuenta: (req, res) => {},
	// loginError: (req, res) => {},
	// crearCuenta: (req, res) => {},
	registerU: (req, res) => {
		res.render('users/register', {
			title: ' CLUB   CADASTRO',
		});
	},
};

module.exports = controller;
