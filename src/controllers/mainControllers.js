let controller = {
	indexPage: (req, res) => {
		res.render('index', {
			title: 'BIEN VENID@S',
		});
	},
	homeApa: (req, res) => {
		res.render('main/home', {
			title: 'HOME APA',
		});
	},
};
module.exports = controller;
