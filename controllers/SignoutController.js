var express = require('express');
var router = express.Router();

router.get('/signout', function (req, res){
    req.session.loggedUser = false;
	res.redirect('/signin');
});


module.exports = router;