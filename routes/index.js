var express = require('express');
var router = express.Router();

var Streak = require('../models/streak');

// home page
router.get('/', function (req, res, next) {
  console.log(req.body);
  Streak.find({}, function (err, streaks) {
    if (err) return handleError(err);
    console.log(streaks);
    res.render('index', { title: 'Daily Accountability', streak_list: streaks}); // load all streaks
  });
});

// undo latest streak
router.get('/streaks/undo', function (req, res, next) {
  let date = req.params.date;
  console.log(date);

  // set last row id (last day)
  Streak.findOneAndDelete({}, {sort: { 'created_at': -1 }}, function (err, streak) {
    if (err) {
      //return handleError(err);
      // no streak found
    }
    console.log("deleted:" + streak);
  });

  res.redirect('/')
});

// add new streak using startdate and update last streak
router.get('/streaks/:date', function (req, res, next) {
  let date = req.params.date;
  console.log(date);

  // set last row id (last day)
  Streak.findOneAndUpdate({}, { 'end_date': date }, {sort: { 'created_at': -1 }}, function (err, streak) {
    if (err) {
      //return handleError(err);
      // no streak found
    }
    console.log("updated end date on last streak:" + streak);
  });

  // create new record
  let newStreak = new Streak({ start_date: date });

  newStreak.save(function (err) {
    if (err) return handleError(err);
    // set today as startdate of new streak
    console.log(newStreak.start_date);
  });

  res.redirect('/')
});

module.exports = router;
