/*jshint esversion: 6*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  imageUrl: String,
  occupation: String,
  catchphrase: String
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
