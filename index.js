const express = require('express')
const app = express()
const port = 3000



app.get('/counter', function(req, res) {
	res.send('HELLO')
});

app.listen(port, function() {
	console.log('Example app listening on port '+port+'.');
});