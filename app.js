var express = require('express');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

var app = express();

var port = process.env.port || 3001;
app.set('port', port);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

app.listen(app.get('port'), function() {
    console.log('Hello, Ready to take request on ' + app.get('port'));
});

app.get('/', function(req, res) {
    res.render('hello', {
        tittle: 'My First Node App',
        message: 'Hello World!'
    });
});