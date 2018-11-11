var express = require('express');
var router = express.Router();

var accessModel = require.main.require('./models/access-model');


router.get('/signup', function (req, res){
	res.render('signup/index', {errors:[],massage:""});
});


router.post('/signup', function (req, res){
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1; 
    var yyyy = date.getFullYear();
    if(dd<10){dd='0'+dd;} 
    if(mm<10){mm='0'+mm;} 
    var today = dd+'/'+mm+'/'+yyyy;
	req.checkBody('email', 'Email address is not validated').isEmail().notEmpty();
    req.checkBody('password', 'Password is not validated').notEmpty();
    req.checkBody('confirmpassword', 'Confirm password is not validated').notEmpty();
    req.checkBody('username', 'Username is not validated').notEmpty();
	req.getValidationResult().then(function(result){

        if(req.body.password !== req.body.confirmpassword){
            var data = {errors:[],massage:"Password and Confirm password are not same."};
			res.render('signup/index', data); 
        }

		if(!result.isEmpty())
		{
			var data = {errors:result.array(),massage:""};
			res.render('signup/index', data);
		}
		else
		{
            var user = {
                email: req.body.email,
                password: req.body.password,
                username:req.body.username,
                signupdate:today
            };
            accessModel.verifyEmail(user,function(valid){
                if (valid){
                    res.render('signup/index',{errors:[],massage:"User already exits with this email. Please try new one."});
                }else{
                accessModel.signupUser(user, function(valid){
                    if(valid)
                    {  
                        res.redirect('/signin');
                    }
                    else
                    {
                        res.redirect('/signup');
                    }
                });
                     }
            });
        }
    });
});

module.exports = router;