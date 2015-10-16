var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Record = new Schema(
  {
    name: String,
    langTo: String,
    langFrom: String,
    correct: Number,
    incorrect: Number
  }
);

mongoose.model('records', Record);

mongoose.connect(process.env.MONGOLAB_URI);
