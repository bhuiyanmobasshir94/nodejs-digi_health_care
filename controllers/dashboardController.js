var express = require('express');
var router = express.Router();
//
var multer  =   require('multer');
var storage =   multer.diskStorage({  
	destination: function (req, file, callback) {  
	  callback(null, './public/images');  
	},
	filename: function (req, file, callback) {  
		callback(null, file.originalname);  
	  }  
	});  
var upload = multer({ storage : storage}).single('pic');  

var dashboardModel = require.main.require('./models/dashboard-model');

router.get('/dashboard', function (req, res){
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
                        res.render('dashboard/index',{ user:dash.user,users:dash.users,massage:"",errors:[],posts:dash.posts,comments:dash.comments,ads:dash.ads});
                        })  
                    })
                  })
            }) 
            
          })
    }else{
          res.redirect('/signin');
    }
});
router.get('/user/profile', function (req, res){
    if(req.session.loggedUser){
    var loggedUser = req.session.loggedUser;
    dashboardModel.pullUser(loggedUser, function(value){
       res.render('user/profile',{user:value[0],massage:""});
    })
    }else{
        res.redirect('/signin');
    }
});
router.post('/user/profile', function (req, res){

    upload(req,res,function(err) {  
        if(err) {  
            res.redirect('/user/profile');  
        }  
        var profile = {
           username: req.body.username,
           email: req.body.email,
           image:req.file.originalname
        };
        var loggedUser = req.session.loggedUser;
        dashboardModel.updateProfile(loggedUser,profile,function(value){
            if(value){
                res.redirect('/user/profile');
            }
            else{
                res.redirect('/user/profile');
            }
         })

    });  
});

router.get('/user/username', function (req, res){
    if(req.session.loggedUser){
    var term = req.query.term;
    console.log(term);
    dashboardModel.pullUserName(term, function(value){
        console.log(value[0].username);
        res.json({username:value[0].username});
        //res.end(JSON(value[0].username));
    })
    }else{
        res.redirect('/signin');
    }
});

module.exports = router;