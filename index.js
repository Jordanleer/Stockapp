//This is a comment to test github push

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5050;

//Set Handlebars 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "hello";
// Set handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
    	stuff: otherstuff
    });
});

//Set Static folder
app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT, () => console.log('Server listening on port ' + PORT));


