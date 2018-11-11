var express = require('express');
var router = express.Router();

var postModel = require.main.require('./models/post-model');
var dashboardModel = require.main.require('./models/dashboard-model');
var chatModel = require.main.require('./models/chat-model');
router.get('/chat',function(req,res){
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
                      dashboardModel.pullChats(dash,function(value){
                        dash.chats = value;
                      res.render('chat/index',{ user:dash.user,users:dash.users,massage:"",posts:dash.posts,comments:dash.comments,chats:dash.chats});
                     })
                  })
                })
          }) 
          
        })
  }else{
        res.redirect('/signin');
  }
});
router.post('/chat',function(req,res){
    var date = new Date();   
    var msz={
           sender:req.body.sender,
           reciever:req.body.reciever,
           message:req.body.message,
           created:date
       };
       chatModel.postChat(msz,function(value){
           if(value){
              res.redirect('/chat');
           }
       })
});
module.exports = router;