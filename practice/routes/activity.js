var express  = require('express');
var router  = express.Router();
var Activity = require('../models/activityModel');
var  activityController =  require('../controllers/activityCIontroller')(Activity);
router.get('/',activityController.get);
router.post('/',activityController.post);

module.exports = router;