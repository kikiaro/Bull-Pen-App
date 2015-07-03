'use strict';

var express = require('express');
var controller = require('./favorite.controller');

var router = express.Router();

router.get   ('/:userid/favorite/',        controller.get);
router.post  ('/:userid/favorite/:teamid', controller.addTeam);
router.delete('/:userid/favorite/:teamid', controller.removeTeam);
router.delete('/:userid/favorite/',        controller.removeAllTeams);
module.exports = router;