const sqlite3 = require('sqlite3').verbose();

// open the database

let db = new sqlite3.Database('/home/gkn/catkin_ws/src/detection_gkn/src/dbui.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the dbui database.');
});


module.exports = db;