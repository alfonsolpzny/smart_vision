const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const engine = require('ejs-mate');
const logger = require('morgan');
const SQLiteStore = require('connect-sqlite3')(session);
require('./lib/passport');
/*
Sistema web de monitoreo del proyecto Smart Vision
GKN Driveline Villagran
Autor: Luis Alfonso Lopez Anaya
Linkedin: linkedin.com/in/alfonsolpzny
*/

// Initializations
const app = express();
//Inicializaciones
// Public
app.use(express.static(path.join(__dirname, 'public')));


// Settings
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('/'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'contactsapp',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: 'sesiones.db', dir: '/home/gkn/Desktop/' })
}));
//app.use(passport.authenticate('session'));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
});

// Routes
app.use(require('./routes/'));
//app.use(require('./routes/contacts'));
app.use(require('./routes/authentication'));
app.use(require('./routes/pruebas'));
app.use(require('./routes/index'));
app.use(require('./routes/images'));
app.use(require('./routes/statics'));

// Public


// Server
app.listen(3000, '0.0.0.0', function(){
    console.log('conectado al puerto:' + 3000);
});
/*
app.listen(app.get('port'), () => {
    console.log('Server listening on port', app.get('port'));
});
*/