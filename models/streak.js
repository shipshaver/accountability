
//Require Mongoose
import { Schema as _Schema, model } from 'mongoose';

//Define a schema
var Schema = _Schema;

var StreakSchema = new Schema({
  start_date  : { type: Date, required: true},
  end_date    : { type: Date},
  rating      : { type: Number}
});

StreakSchema
.virtual('day_duration')
.get(function () { 
  Math.floor((streak.endDate - streak.startDate) / (1000*60*60*24)); 
});

BookInstanceSchema
.virtual('url')
.get(function () {
  return '/streaks/' + this._id;
});

//Export function to create model class
export default model('Streak', StreakSchema );