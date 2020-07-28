const express = require('express');

const app = express();
const port = 2000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

//ROUTES
app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, () => {
	console.log(`====Listening on port ${port}====`);
});
