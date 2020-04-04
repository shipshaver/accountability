var express = require('express');
var router = express.Router();

const sqlite3 = require("sqlite3").verbose();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.body);

  let db = new sqlite3.Database('./data.db');

  let sql = `SELECT * FROM streaks`;

  db.serialize(function () {
    db.all(sql, [], (err, rows) => {
      if (err != null) {
        return next(err);
      }
      res.render('index', { title: 'Daily Accountability', streak_list: rows });
    });
  });

  db.close();
});

//let lastID = 0;

router.get('/:date', function (req,res,next) {
  let db = new sqlite3.Database('./data.db');
  
  let date = req.params.date;

  // set last row id (last day)
  let sql = `UPDATE streaks
              SET endDate = ?
              WHERE id = (SELECT MAX(ID) FROM TABLE)`;

  // set today as end date of previous streak
  db.run(sql, [date], function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log(`Streak updated: ${this.changes}`);
  });

  //
  sql = 'INSERT INTO streaks(startDate) VALUES(?)'

  // set today as startdate of new streak
  db.run(sql, [date], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // update last row id (last day)
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    //lastID = this.lastID;
  });

  db.close();
});

module.exports = router;
