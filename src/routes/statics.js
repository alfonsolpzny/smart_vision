const express = require('express');
const router = express.Router();
const AdmZip = require('adm-zip');
var fs = require('fs');
//var uploadDir = fs.readdirSync(__dirname);
const db = require('../dbui_connect');

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

//################# pagina de ensamble, estadisticas ###################
router.get('/ensamble/horas', async (req, res, next) => {
    const dTiempo = new Date();
    let h = addZero(dTiempo.getHours());
    let m = addZero(dTiempo.getMinutes());
    let s = addZero(dTiempo.getSeconds());

    var k = parseInt(h);
    k = k - 1;
    k = addZero(k.toString());

    let hora_actual = h + ":" + m + ":" + s;
    let hora_pasada = k + ":" + m + ":" + s;

    let anio = dTiempo.getFullYear();
    let mes = addZero(dTiempo.getMonth() + 1);
    let dia = addZero(dTiempo.getDate());
    let fechaDias = anio + "-" + mes + "-" + dia;
    console.log(fechaDias);
    console.log(hora_actual);
    console.log(hora_pasada);

    db.all('SELECT id_program, fecha, hour, coincidence, type_model, program_name, JF_size, ball_number, path_model_load, umbral, clasification from pieces JOIN program using (id_program) WHERE ((fecha = ?) and(hour < ? and hour > ?)) ', [fechaDias, hora_actual, hora_pasada], (err, rows) => {
        if (err) throw err;
        if (rows.length == 0) {
            res.render('advertencias/adv_horas')
        } else {
            res.render('ensamble_horas', { rows });
        }
    });
});

//############## Pagina para las estadisticas del dia #########################
router.get('/ensamble/dias', async (req, res, next) => {
    const dTiempo = new Date();
    let anio = dTiempo.getFullYear();
    let mes = addZero(dTiempo.getMonth() + 1);
    let dia = addZero(dTiempo.getDate());
    let fechaDias = anio + "-" + mes + "-" + dia;
    console.log(fechaDias);

    db.all('SELECT id_program, fecha, hour, coincidence, type_model, program_name, JF_size, ball_number, path_model_load, umbral, clasification from pieces JOIN program using (id_program) WHERE fecha = ?', [fechaDias], (err, rows) => {
        if (err) throw err;
        if (rows.length == 0) {
            res.render('advertencias/adv_dias')
        } else {
            res.render('ensamble_dias', { rows });
        }
    });
});

//############## Pagina para las estadisticas de la semana #########################
router.get('/ensamble/semanas', async (req, res, next) => {
    db.all('SELECT id_program, fecha, hour, coincidence, type_model, program_name, JF_size, ball_number, path_model_load, umbral, clasification from pieces JOIN program using (id_program) WHERE fecha > (SELECT DATETIME("now", "-7 day"))', (err, rows) => {
        if (err) throw err;
        if (rows.length == 0) {
            res.render('advertencias/adv_semanas')
        } else {
            res.render('ensamble_semana', { rows });
        }
    });
});

//############## Pagina para las estadisticas del  mes #########################
router.get('/ensamble/meses', async (req, res, next) => {
    db.all('SELECT id_program, fecha, hour, coincidence, type_model, program_name, JF_size, ball_number, path_model_load, umbral, clasification from pieces JOIN program using (id_program) WHERE fecha > (SELECT DATETIME("now", "-30 day"))', (err, rows) => {
        if (err) throw err;
        if (rows.length == 0) {
            res.render('advertencias/adv_meses')
        } else {
            res.render('ensamble_meses', { rows });
        }
    });
});
//################################## 
// Archivos JSON
//##################################
//Manda los archivos json 
router.get('/estadisticasHoras', (req, res, next) => {
    const dTiempo = new Date();
    let h = addZero(dTiempo.getHours());
    let m = addZero(dTiempo.getMinutes());
    let s = addZero(dTiempo.getSeconds());

    var k = parseInt(h);
    k = k - 1;
    k = addZero(k.toString());

    let hora_actual = h + ":" + m + ":" + s;
    let hora_pasada = k + ":" + m + ":" + s;

    let anio = dTiempo.getFullYear();
    let mes = addZero(dTiempo.getMonth() + 1);
    let dia = addZero(dTiempo.getDate());
    let fechaDias = anio + "-" + mes + "-" + dia;

    db.all('SELECT id_program, fecha, hour, coincidence, type_model, program_name, JF_size, ball_number, path_model_load, umbral, clasification from pieces JOIN program using (id_program) WHERE ((fecha = ?) and(hour < ? and hour > ?)) ', [fechaDias, hora_actual, hora_pasada], (err, rows) => {
        if (err) throw err;
        res.json(rows);
    })
});

router.get('/tesjson', (req, res, next) => {

    db.all('SELECT * FROM image_saving', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    })
});

router.get('/estadisticasDias', (req, res, next) => {
    const dTiempo = new Date();
    let anio = dTiempo.getFullYear();
    let mes = addZero(dTiempo.getMonth() + 1);
    let dia = addZero(dTiempo.getDate());
    let fechaDias = anio + "-" + mes + "-" + dia;

    db.all('SELECT id_program, fecha, hour, coincidence, type_model, program_name, JF_size, ball_number, path_model_load, umbral, clasification from pieces JOIN program using (id_program) WHERE ((fecha = ?)) ', [fechaDias], (err, rows) => {
        if (err) throw err;
        res.json(rows);
    })
});

router.get('/estadisticasSemanas', (req, res, next) => {
    db.all('SELECT id_program, fecha, hour, coincidence, type_model, program_name, JF_size, ball_number, path_model_load, umbral, clasification from pieces JOIN program using (id_program) WHERE fecha > (SELECT DATETIME("now", "-7 day"))', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    })
});

router.get('/estadisticasMeses', (req, res, next) => {
    db.all('SELECT id_program, fecha, hour, coincidence, type_model, program_name, JF_size, ball_number, path_model_load, umbral, clasification from pieces JOIN program using (id_program) WHERE fecha > (SELECT DATETIME("now", "-30 day"))', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    })
});




module.exports = router;