'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FavoriteTeamSchema = new Schema({
  team : {
    type : Schema.Types.ObjectId,
    ref: 'Team'
  }
});

module.exports = mongoose.model('FavoriteItem', FavoriteTeamSchema);