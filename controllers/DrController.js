var express = require('express');
var router = express.Router();

var dashboardModel = require.main.require('./models/dashboard-model');

router.get('/doctor',function(req,res){
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
                        dashboardModel.pullAds(dash,function(value){
                          dash.ads = value;
                      res.render('dr/index',{ user:dash.user,users:dash.users,massage:"",posts:dash.posts,comments:dash.comments,chats:dash.chats,ads:dash.ads});
                    }) 
                    })
                  })
                })
          }) 
          
        })
  }else{
        res.redirect('/signin');
  }
});

router.post('/doctor/ad',function(req,res){
  if(req.session.loggedUser){
    var loggedUser = req.session.loggedUser;
    var time = new Date();
    dashboardModel.pullUser(loggedUser, function(value){
          var user = value[0];
          var ad = {
            name:req.body.name,
            speciality:req.body.speciality,
            address:req.body.address,
            created:time,
            dr:user
          };
          dashboardModel.postAd(ad, function(value){
              if(value){
                  res.redirect('/doctor');
              }
          })
    })
       
  }else{
    res.redirect('/signin');
  }
});
router.post('/doctor/ad/approve',function(req,res){
  var ad={
      id:req.body.ad_id
  };
  console.log(ad.id);
  dashboardModel.approveAd(ad,function(value){
      if(value){
        console.log(value);
         res.redirect('/moderator');
      }
  })
});
router.post('/doctor/ad/block',function(req,res){
var ad={
   id:req.body.ad_id
};
console.log(ad.id);
dashboardModel.blockAd(ad,function(value){
   if(value){
    console.log(value);
      res.redirect('/moderator');
   }
})
});

module.exports = router;