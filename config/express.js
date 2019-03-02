var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    engines = require('consolidate'),
    mongoose = require('mongoose')
config = require('./config');

var app = express();

// connect to mongoDB database 
mongoose.connect(
    config.db.url,
    {
        useNewUrlParser: true
    }
);

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
// app.set('view engine', 'html');

// to use a view/template engine:
// app.set('view engine', 'ejs');

// or

app.set('view engine', 'jade');

require('../app/routes/user.route.js')(app); // configure our routes

// expose app           
exports = module.exports = app;