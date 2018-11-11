var express = require('express');
var router = express.Router();

var postModel = require.main.require('./models/post-model');
var dashboardModel = require.main.require('./models/dashboard-model');

router.get('/admin',function(req,res){
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
                      res.render('admin/index',{ user:dash.user,users:dash.users,massage:"",posts:dash.posts,comments:dash.comments});
                    })
                })
          }) 
          
        })
  }else{
        res.redirect('/signin');
  }
});
router.post('/admin/approve',function(req,res){
       var user={
           id:req.body.user_id,
           type:req.body.user_type
       };
       dashboardModel.approveUser(user,function(value){
           if(value){
              res.redirect('/admin');
           }
       })
});
router.post('/admin/block',function(req,res){
    var user={
        id:req.body.user_id
    };
    dashboardModel.blockUser(user,function(value){
        if(value){
           res.redirect('/admin');
        }
    })
    });
module.exports = router;