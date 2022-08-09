const express 	= require('express');
const app 		= express();
const port 		= 3000;
//const path 		= require('path');

app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');
app.set('views','./public/views/');

app.get('/', (req, res) => {
	res.render('POCB');
})
app.listen(port, () => {
  console.log(`Example app on http://localhost:${port}`)
})

