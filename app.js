// require
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var expressValidator = require('express-validator');
var jsAlert = require("js-alert");

//controllers
var signup = require('./controllers/SignupController');
var signin = require('./controllers/SigninController');
var signout = require('./controllers/SignoutController');
var forgotPassword = require('./controllers/ForgotPasswordController');
var dashboard = require('./controllers/dashboardController');
var post = require('./controllers/PostController');
var admin = require('./controllers/AdminController');
var moderator = require('./controllers/ModeratorController');
var chat = require('./controllers/ChatController');
var doctor = require('./controllers/DrController');

var port = process.env.PORT || 600;

// configure
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs-locals'));

// middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'secret', resave: false, saveUninitialized:true}));
app.use(expressValidator());

//css && js && jquery
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); 
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

app.use(express.static(__dirname + '/public'));

// routes
app.get('/', function(req, res){
	res.redirect('/signin');
});


app.use(signin);
app.use(signup);
app.use(signout);
app.use(forgotPassword);
app.use(dashboard);
app.use(post);
app.use(admin);
app.use(moderator);
app.use(chat);
app.use(doctor);

// server
app.listen(port, function(){
	console.log('Server started at port ' + port);
});