
//Require Mongoose
mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var StreakSchema = new Schema({
  start_date  : { type: Date, required: true},
  end_date    : { type: Date},
  rating      : { type: Number}
});

StreakSchema
.virtual('day_duration')
.get(function () { 
  Math.floor((this.endDate - this.startDate) / (1000*60*60*24)); 
});

StreakSchema
.virtual('url')
.get(function () {
  return '/streaks/' + this._id;
});

//Export function to create model class
module.exports = mongoose.model('Streak', StreakSchema );