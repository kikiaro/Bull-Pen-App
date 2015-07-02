'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FavoriteSchema = new Schema({
  team: {
  type : Schema.Types.ObjectId,
    ref: 'Team'
  },
  qty : Number
});

module.exports = mongoose.model('FavoriteTeam', FavoriteTeamSchema);
