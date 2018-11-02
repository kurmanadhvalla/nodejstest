var activityController = function (Activity) {

    var get = function (req,res) {
       var query = req.query;
       Activity.find(query,function (err,activities) {
           if(err)
               res.status(404).send(err);
           else
               res.json(activities);
           
       })
    }
    var post = function (req,res) {
        var activity = new Activity(req.body);
        activity.save();
        res.status(201).send(activity);

    }
    return{
        get:get,
        post:post
    }
}

module.exports = activityController;
