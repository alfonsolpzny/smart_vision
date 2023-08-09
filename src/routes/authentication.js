const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../dbui_connect');
const { isAuthenticated, isNotAuthenticated } = require('../lib/authentication');

//isAuthenticated Solo deja pasar si  se esta logeado
//isNotAuthenticated Solo deja pasar si no se esta logead
//SignUp - Agregar usuario
//SignIn - Entrar, iniciar sesion (logearse)
//LogOut Cerrar sesion


//################### pagina para login ###################
// Sign Up
router.get('/signup', isAuthenticated, (req, res) => {  
    res.render('authentication/signup');
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash: true
}));


// Sign In
router.get('/signin', (req, res) => {
    res.render('authentication/signin');
});

router.post('/signin', (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/home',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});

// Profile
router.get('/profile', isAuthenticated, (req, res) => {
    res.redirect('admin');
});

// Log Out
router.get('/logout', (req, res) => {
    req.logout(req.user, err => {
        if(err) return next(err);
        res.redirect('/home');
    });
}); 

/*
router.get('/edituser/:username', isAuthenticated, async (req, res) => {
    const { username } = req.params;
    await db.all('SELECT * FROM users WHERE username = ?', [username],(err,rows)=>{
      res.render('edituser', { rows });
    });
    //req.flash('success', 'User Deleted Successfully');
  
  });
  
  router.post('/changueuser/:username', isAuthenticated, async (req, res) => {
    const { username } = req.params;
    var data = {
      saturation: req.body.saturation,
      contrast: req.body.contrast,
      brightness: req.body.brightness,
    }
    db.all(
      `UPDATE users set 
           saturation = ?, 
           WHERE id_program = ?`,
      [data.saturation,
      data.contrast,
      data.brightness,
      ],
      function (err, result) {
  
        req.flash('success', 'Contact Updated Successfully');
        res.redirect('/admin');
      });
  })
  */

module.exports = router;
    
