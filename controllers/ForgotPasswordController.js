var express = require('express');
var router = express.Router();

var accessModel = require.main.require('./models/access-model');


router.get('/forgotpassword', function (req, res){
	res.render('forgotpassword/index', {errors:[],massage:""});
});


router.post('/forgotpassword', function (req, res){
	req.checkBody('email', 'Email address is not validated').isEmail().notEmpty();
    req.checkBody('oldpassword', 'Old password is not validated').notEmpty();
    req.checkBody('confirmnewpassword', 'Confirm new password is not validated').notEmpty();
    req.checkBody('newpassword', 'New password is not validated').notEmpty();
	req.getValidationResult().then(function(result){

		if(!result.isEmpty())
		{
			var data = {errors:result.array(),massage:""};
			res.render('forgotpassword/index', data);
		}
		else
		{
            if(req.body.newpassword !== req.body.confirmnewpassword){
                var data = {errors:[],massage:"New password and Confirm new password are not same."};
                res.render('forgotpassword/index', data); 
            }else{
                var user = {
                    email: req.body.email,
                    oldpassword: req.body.oldpassword,
                    confirmnewpassword:req.body.confirmnewpassword,
                    newpassword:req.body.newpassword
                };
                accessModel.updateNewPassword(user,function(valid){
                    console.log(valid);
                    if (valid){
                        res.redirect('/signin');
                    }else{
                        var data = {errors:[],massage:"Couldn't update with new password."};
                        res.render('forgotpassword/index', data);
                    }
                });
            }
        }
    });
});

module.exports = router;