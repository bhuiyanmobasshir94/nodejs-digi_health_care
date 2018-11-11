var express = require('express');
var router = express.Router();

var postModel = require.main.require('./models/post-model');
var dashboardModel = require.main.require('./models/dashboard-model');

router.get('/moderator',function(req,res){
    if(req.session.loggedUser){
        var loggedUser = req.session.loggedUser;
        dashboardModel.pullUser(loggedUser, function(value){
          var dash = {};
          dash.user = value[0];
          dashboardModel.pullUsers(dash,function(value){
              dash.users = value;
              dashboardModel.pullComments(dash,function(value){
                  dash.comments = value;
                  dashboardModel.pullPosts(dash,function(value){
                      dash.posts = value;
                      dashboardModel.pullAds(dash,function(value){
                        dash.ads = value;
                      res.render('moderator/index',{ user:dash.user,users:dash.users,massage:"",posts:dash.posts,comments:dash.comments,ads:dash.ads});
                      })
                    })
                })
          }) 
          
        })
  }else{
        res.redirect('/signin');
  }
});
router.post('/moderator/approve',function(req,res){
       var post={
           id:req.body.post_id
       };
       dashboardModel.approvePost(post,function(value){
           if(value){
              res.redirect('/moderator');
           }
       })
});
router.post('/moderator/block',function(req,res){
    var post={
        id:req.body.post_id
    };
    dashboardModel.blockpost(post,function(value){
        if(value){
           res.redirect('/moderator');
        }
    })
});
module.exports = router;