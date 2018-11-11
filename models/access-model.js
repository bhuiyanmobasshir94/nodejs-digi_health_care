var db = require('./db');
module.exports = {
	verifyUser: function(user, callbackFromController){
		var sql = "SELECT * FROM users WHERE email=? AND password=? AND status=?";
		db.execute(sql, [user.email, user.password,"Approved"], function (result){
			if(result.length == 1)
			{
				callbackFromController(true,result);
			}
			else
			{
				db.execute(sql, [user.email, user.password,"Disapproved"], function (result_){
					if(result_.length == 1)
					{
						callbackFromController(false,result_);
					}
					else{
						callbackFromController(false,{});
					}
				});
			}
		});
		 
		//connection.end();
	},
	verifyEmail: function(user, callbackFromController){
		var sql = "SELECT * FROM users WHERE email=? AND username=?";
		//console.log(sql);	 
		db.execute(sql, [user.email,user.username], function (result){
			if(result.length >= 1)
			{
				callbackFromController(true);
			}
			else
			{
				callbackFromController(false);
			}
		});
		 
		//connection.end();
	},
	signupUser: function(user, callbackFromController){
		
		var sql = "INSERT INTO users VALUES ('', ?, ?, ?, ?,'', ?, ?)";
		db.execute(sql, [user.username,user.password,user.email,"User","Disapproved",user.signupdate], function(result){
			callbackFromController(result);
		});
	},
	updateNewPassword: function(user, callbackFromController) {
		var sql = "UPDATE users SET password=? WHERE email=? AND password=?";
		db.execute(sql, [user.confirmnewpassword, user.email,user.oldpassword], function(result){
			callbackFromController(result);
		});

	}

};