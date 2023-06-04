const C = console.log;


const glob = require('glob')
const path = require('node:path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
})

glob.sync(path.join(__dirname, 'app/**/route.js')).forEach(function (file) {
	app.use(require(file));
});


app.use((err, req, res, next) => {
	if (!err) { return next; }
	C("\n\n --------- errorHandler -----------");
	C(err.message);
	C(req.xhr);
	return res.status(500).json({ error: err.message });
});

const PORT = 8081;
app.listen(PORT, () => {
	C('Server Started')
	C(`app listening on port ${PORT}`)
});

module.exports = app;