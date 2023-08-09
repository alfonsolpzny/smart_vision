const express = require('express');
const router = express.Router();
const AdmZip = require('adm-zip');
var fs = require('fs');
//var uploadDir = fs.readdirSync(__dirname);
const db = require('../dbui_connect');
const { isAuthenticated, isNotAuthenticated } = require('../lib/authentication');

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

//################# pagina de ensamble, estadisticas ###################

//Para buscar las del dia
router.post('/monitoreo', (req, res, next) => {
    db.all('SELECT id_program, fecha, hour, coincidence, type_model, program_name, JF_size, ball_number, path_model_load, umbral, clasification from pieces JOIN program using (id_program) WHERE ((fecha = ?))', [req.body.fechas], (err, rows) => {
        if (err) throw err;
        if (rows.length == 0) {
            res.render('advertencias/adv_SpecificDay');
        } else {
            res.render('monitoreo', { rows });
        }
    })
});

router.post('/images', (req, res, next) => {
    fecha1 = (req.body.fechas1 + "T00:00:00");
    fecha2 = (req.body.fechas2 + "T24:59:59");
    db.all('SELECT id, program_name, program_number, result, average, path_rute, submission_time FROM image_saving WHERE (submission_time>? and submission_time<? )', [fecha1, fecha2], (err, rows) => {
        let cont = 0;
        for (let i = 0; i < rows.length; i++) {
            if(fs.existsSync(rows[i].path_rute)){ cont++;           
            }
        }
        if (err) throw err;
        if (rows.length == 0) {
            res.render('advertencias/adv_SpecificDay');
        } else {
            res.render('images', { rows, cont });
        }
    })
});


router.post('/export', (req, res, next) => {
    fecha1 = (req.body.fechas1 + "T00:00:00");
    fecha2 = (req.body.fechas2 + "T24:59:59");
    db.all('SELECT  path_rute  FROM image_saving WHERE (submission_time>? and submission_time<? )', [fecha1, fecha2], (err, rows) => {
        const zip = new AdmZip();
        let cont = 0;
        for (let i = 0; i < rows.length; i++) {
            if(fs.existsSync(rows[i].path_rute)){
                zip.addLocalFile(rows[i].path_rute);
                //console.log('ok');
            }else{
                cont++;
                //console.log('no');
            }
        }
        
        console.log('No se encontraron '+cont+' imagenes');
        const downloadName = `${Date.now()}.zip`;

        const data = zip.toBuffer();
        res.set('Content-Disposition', `attachment; filename=${downloadName}`);
        res.set('content-length', data.length);
        req.flash('success', 'User Deleted Successfully');
        res.send(data);

        //res.render('home');
    })
});

router.get('/deletedb', isAuthenticated,(req, res, next) => {    
   res.render('delete_files')
});

router.post('/deleteimages', (req, res, next) => {
    fecha1 = (req.body.fechas1 + "T00:00:00");
    fecha2 = (req.body.fechas2 + "T24:59:59");
    db.all('SELECT path_rute FROM image_saving WHERE (submission_time>? and submission_time<? )', [fecha1, fecha2], (err, rows) => {
        
        for (let i = 0; i < rows.length; i++) {
            if(fs.existsSync(rows[i].path_rute)){
                fs.unlinkSync(rows[i].path_rute);
            }
        }
        
        //fs.unlink('/home/gkn/Desktop/Images/Program_38/OK_99_10436864_2022-12-27T00:00:22.jpg');
        res.render('delete_files');
    })
});

router.post('/deletefiles', (req, res, next) => {
    fecha1 = (req.body.fechas1 + "T00:00:00");
    fecha2 = (req.body.fechas2 + "T24:59:59");
    db.all('DELETE FROM image_saving WHERE (submission_time>? and submission_time<? )', [fecha1, fecha2], (err, rows) => {
        res.render('delete_files');
    })
});







module.exports = router;