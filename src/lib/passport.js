const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bcrypt = require('../lib/bcrypt');
const db = require('../dbui_connect');

passport.use('local.signin', new Strategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  await db.all('SELECT * FROM users WHERE username = ?', [req.body.username], async (err, rows) => {
    if (rows.length > 0) {
      console.log(typeof rows[0].password);
    console.log(typeof password);
      const user = rows[0];
      const validPassword = await bcrypt.comparePasswords(password, user.password);
      if (validPassword) {
        console.log('contraseña valida');
        done(null, user);
      }
      else {
        console.log('contraseña incorrecta');
        done(null, false, req.flash('message', 'Incorrect Password'));
      }
    }
    else {
      console.log('usuario invalido');
      done(null, false, req.flash('message', 'Incorrect Username'));
    }
  });
}));

passport.use('local.signup', new Strategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, res, next, done) => {
  var data = {
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
  }
  data.password = await bcrypt.encryptPassword(data.password);
  await db.all('INSERT INTO users (username, password, fullname) VALUES (?,?,?)', [data.username, data.password, data.fullname]);
  done(null);
}));


passport.serializeUser((user, done) => {
  console.log("Serialize: ");
  done(null, user.username);
});

passport.deserializeUser(async (id, done) => {
  await db.all('SELECT * FROM users WHERE username = ?', [id], async (err, rows) => {
    done(null, rows[0]);
  })
});

