var mongoose =require('mongoose');
var activityModel = new mongoose.Schema({
    activityname:String,
    activitycateogory:String
});

module.exports = mongoose.model('Activity',activityModel);
