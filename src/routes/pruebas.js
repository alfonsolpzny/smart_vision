const express = require('express');
const router = express.Router();

const db = require('../dbui_connect');
//rutas
router.get('/casa', (req, res, next) => {
  db.all('SELECT * from program LIMIT 1', (err, rows) => {
    if(err) throw err;
    res.render('home',{rows});
    
    });
}); 


router.get("/books", (req, res) => {
  db.all('SELECT * from program LIMIT 1', (err, rows) => {
    if(err) throw err;
    res.render('home',{rows});
    });
});




module.exports = router;