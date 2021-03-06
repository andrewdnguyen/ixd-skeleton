
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var function1 = require('./routes/function1');
var function2 = require('./routes/function2');
var function3 = require('./routes/function3');
var function4 = require('./routes/function4');
var saves = require('./routes/saves');
var login = require('./routes/login');
var settings = require('./routes/settings');
var afterhome = require('./routes/afterhome');
var help1 = require('./routes/help1');
var help2 = require('./routes/help2');
var fparameters = require('./routes/fparameters');
var freturn = require('./routes/freturn');
var finished = require('./routes/finished');
var suggestions = require('./routes/suggestions');
var great = require('./routes/great');
var mainPage = require('./routes/mainPage');
var yourparameters = require('./routes/yourparameters');
var details = require('./routes/details');
var fparameters2 = require('./routes/fparameters2');
var tips = require('./routes/tips');
var index2 = require('./routes/mainpage2');
var details2 = require('./routes/details2');
var yourparameters2 = require('./routes/yourparameters2');
//var suggJson = require('./suggestions.json');
var getSuggestions = require('./routes/getSuggestions');
var suggestions2 = require('./routes/suggestions2');
var mainPage2Alt = require('./routes/mainPage2Alt');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.viewLogin);
app.get('/index', index.viewName);
app.get('/function1', function1.viewFunction1);
app.get('/function2', function2.viewFunction2);
app.get('/function3', function3.viewFunction3);
app.get('/function4', function4.viewFunction4);
app.get('/saves', saves.viewSaves);
app.get('/login', login.viewLogin);
app.get('/settings', settings.viewSettings);
app.get('/afterhome', afterhome.viewAfterHome);
app.get('/help1', help1.viewHelp1);
app.get('/help2', help2.viewHelp2);
app.get('/fparameters', fparameters.viewFparameters);
app.get('/freturn', freturn.viewFreturn);
app.get('/finished', finished.viewFinished);
app.get('/suggestions', suggestions.viewSuggestions);
app.get('/great', great.viewGreat);
app.get('/mainPage', mainPage.viewMainPage);
app.get('/yourparameters', yourparameters.viewYourParameters);
app.get('/details', details.viewDetails);
app.get('/fparameters2', fparameters2.viewFparameters2);
app.get('/tips', tips.viewTips);
app.get('/mainpage2', index2.viewMainPage);
app.get('/add', yourparameters.addParameter);
app.get('/add2', fparameters.addParameter);
app.get('/details2', details2.viewDetails);
app.get('/yourparameters2', yourparameters2.viewYourParameters);
app.get('/add3', yourparameters2.addParameter);
app.get('/add5', index2.addStep);
app.get('/getSuggs', getSuggestions.suggJson);
app.get('/suggestionstwo', suggestions2.viewSuggestions2);
app.get('/viewAlt', login.viewAlt);
app.get('/suggAlt', suggestions.suggAlts);
app.get('/mainPage2Alt', mainPage2Alt.viewMainPage);
app.get('/add6', mainPage2Alt.addStep);
app.get('/mainPageOld', mainPage.viewMainAlt);
// app.get('/suggestions', function(req, res){
// 	res.json(suggJson);
// });
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
