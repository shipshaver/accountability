var express = require('express');
var router = express.Router();

var Streak = require('../models/streak').default;

//let lastID = 0;

// add new streak using startdate and update last streak
router.get('/:date', function (req,res,next) {
  let date = req.params.date;

  // set last row id (last day)
  Streak.findOneAndUpdate({}, {}, { sort: { 'created_at' : -1 } }, function(err, streak) {
    console.log( streak );
  });    

  // create new record
let newStreak = new Streak({ start_date: date });

newStreak.save(function (err) {
  if (err) return handleError(err);
  // set today as startdate of new streak
    console.log(newStreak.start_date);

  db.close();
});

// home page
router.get('/', function (req, res, next) {
  console.log(req.body);

  res.render('index', { title: 'Daily Accountability', streak_list: Streak.find() }); // load all streaks
  db.close();
});



module.exports = router;
