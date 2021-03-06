'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TeamSchema = new Schema({
  name: String,
  category: String,
  description: String,
  imageFile: String,
  twitter: String,
  dataId: String
});

module.exports = mongoose.model('Team', TeamSchema);
