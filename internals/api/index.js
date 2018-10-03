const Express = require('express');

const api = new Express();
const port = 3001;
const host = 'localhost';
const title = '3 Rookie';
const delay = 300;

api.use((req, res, next) => {
	setTimeout(next, delay);
});

api.get('/api/products', (req, res) => {
	res.json([{
		name: 'CSS for dummies',
		id: 1,
	}, {
		name: 'Redux for dummies',
		id: 2,
	}, {
		name: 'React for dummies',
		id: 3,
	}]);
});

api.listen(port, (err) => {
	if (err) {
		console.log(err);
	}
	console.info(
		'----------------------------------------------------------------------------------\n',
		`==> 🌎  API for ${title} is up and running on port ${port}  `,
		'\n----------------------------------------------------------------------------------',
	);
	console.info(
		'----------------------------------------------------------------------------------\n',
		`==> Send requests to http://${host}:${port}  👈`,
		'\n----------------------------------------------------------------------------------',
	);
});
