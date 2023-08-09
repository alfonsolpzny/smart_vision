const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('../lib/bcrypt');

//isAuthenticated Solo deja pasar si  se esta logeado
//isNotAuthenticated Solo deja pasar si no se esta logead
const { isAuthenticated, isNotAuthenticated } = require('../lib/authentication');

//########## base datos sqlite3 #############
const db = require('../dbui_connect');


//###############################################
//############## RENDERIZAR PAGINAS #############
//###############################################

//############# Pagina de home #####################
function addZero(i) {
  if (i < 10) { i = "0" + i }
  return i;
}

router.get('/home', (req, res, next) => {
  res.render('home');
});

router.get('/imagenenvivo', (req, res, next) => {
  res.render('home');
});
router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/test', async (req, res, next) => {
  db.all('SELECT id_program, fecha, hour, coincidence, type_model, program_name, JF_size, ball_number from pieces JOIN program using (id_program)', (err, rows) => {
    if (err) throw err;
    res.render('template_copy', { rows });

  });
});

//################### Pagina para admin (tablas-modficaciones) ###################
router.get('/admin', (req, res) => {
  db.all('SELECT * from program LIMIT 33', (err, rows) => {
    if (err) throw err;
    res.render('admin', { rows });
  });
});




//##############################################################################
//################### Para editar los programas individuales ###################
//##############################################################################
router.get("/editprogram/:id", isAuthenticated, (req, res, next) => {
  var parametros = req.params.id
  db.all('SELECT * FROM program WHERE id_program = ?', [parametros], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.render('editprogram', { rows: rows[0] });
  });
});

//############################ Actualiza los programas #########################
router.post('/updateprogram/:id', isAuthenticated, async (req, res) => {
  var data = {
    saturation: req.body.saturation,
    contrast: req.body.contrast,
    brightness: req.body.brightness,
    X: req.body.X,
    Y: req.body.Y,
    width: req.body.width,
    high: req.body.high,
    umbral: req.body.umbral,
    zoom: req.body.zoom,
    origin_x: req.body.origin_x,
    origin_y: req.body.origin_y,
    external: req.body.external,
    internal: req.body.internal,
    mask_on: req.body.mask_on,
    type_model: req.body.type_model,
    path_model_load: req.body.path_model_load,
    creation_date: req.body.creation_date,
    lastupdate_date: req.body.lastupdate_date,
    program_name: req.body.program_name,
    JF_size: req.body.JF_size,
    ball_number: req.body.ball_number,
    ball_diameter: req.body.ball_diameter,
    save_images: req.body.save_images,
  }
  db.all(
    `UPDATE program set 
         saturation = ?, 
         contrast = ?,
         brightness = ?,
         X = ?,
         Y = ?,
         width = ?,
         high = ?,
         umbral = ?,
         zoom = ?,
         origin_x = ?,
         origin_y = ?,
         external = ?,
         internal = ?,
         mask_on = ?,
         type_model = ?,
         path_model_load = ?,
         creation_date = ?,
         lastupdate_date = ?,
         program_name = ?,
         JF_size = ?,
         ball_number = ?,
         ball_diameter = ?,
         save_images = ?
         WHERE id_program = ?`,
    [data.saturation,
    data.contrast,
    data.brightness,
    data.X, data.Y,
    data.width, data.high,
    data.umbral,
    data.zoom,
    data.origin_x,
    data.origin_y,
    data.external,
    data.internal,
    data.mask_on,
    data.type_model,
    data.path_model_load,
    data.creation_date,
    data.lastupdate_date,
    data.program_name,
    data.JF_size,
    data.ball_number,
    data.ball_diameter,
    data.save_images,
    req.params.id],
    function (err, result) {

      req.flash('success', 'Contact Updated Successfully');
      res.redirect('/admin');
    });
})


//################### Lista de los Usuarios #######################
router.get('/userlist', (req, res, next) => {
  db.all('SELECT * from users', (err, rows) => {
    if (err) throw err;
    res.render('userlist', { rows });
  });
});

//############ Eliminar a los  usuarios en la pagina de listas ################
router.get('/deleteuser/:username', isAuthenticated, async (req, res) => {
  const { username } = req.params;
  await db.all('DELETE FROM users WHERE username = ?', [username]);
  req.flash('success', 'User Deleted Successfully');
  res.redirect('/userlist');
});

module.exports = router;