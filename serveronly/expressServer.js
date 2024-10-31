const express = require('express');
const request = require('request'); // or use axios
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/ruter/:stopId', (req, res) => {
	const stopId = req.params.stopId;
	const url = `http://reisapi.ruter.no/Place/GetStop/${stopId}`;

	// Proxy the request
	request(url, { json: true }, (error, response, body) => {
		if (error) {
			return res.status(500).send(error);
		}
		res.send(body);
	});
});

app.listen(port, () => {
	console.log(`Proxy server listening at http://localhost:${port}`);
});
