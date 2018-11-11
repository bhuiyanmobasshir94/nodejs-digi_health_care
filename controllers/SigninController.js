var express = require('express');
var router = express.Router();

var accessModel = require.main.require('./models/access-model');


router.get('/signin', function (req, res){
	res.render('signin/index', {errors:[],massage:""});
});


router.post('/signin', function (req, res){
	req.checkBody('email', 'Email address is required').isEmail().notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.getValidationResult().then(function(result){
		if(!result.isEmpty())
		{
			var data = {errors:result.array(),massage:""};
			res.render('signin/index', data);
		}
		else
		{
	    var user = {
			email: req.body.email,
			password: req.body.password
		};

		accessModel.verifyUser(user, function(valid,signedUser){
		if(valid)
		{  
			req.session.loggedUser = signedUser[0];
			res.redirect('/dashboard');
		}
		else
		{
			if(signedUser.length == 1){
				var data = {errors:[],massage:"Your account is not being approved by admin yet. Please wait for approval."};
				console.log(signedUser[0]);
				res.render('signin/index', data);
			}
			else{
				var data = {errors:[],massage:"You are not signed up. Sign Up for Digi Health care"};
			    res.render('signin/index', data);}
			
		}
	})

    }

	});

});

module.exports = router;