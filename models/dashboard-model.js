var db = require('./db');
module.exports = {
	pullUser: function(user, callbackFromController){
		var sql = "SELECT * FROM users WHERE user_id=?";
		db.execute(sql,[user.user_id], function (result){
            if(result.length == 1){
				callbackFromController(result);
            }else{
                console.log("Couldn't pull the signed user from database.");
            }
		});
		//connection.end();
	},
	pullUserName: function(term, callbackFromController){
		var sql = "SELECT * FROM users WHERE username LIKE '"+term+"%'";
		console.log(sql);
		db.execute(sql,null, function (result){
            if(result.length >= 1){
				callbackFromController(result);
            }else{
                console.log("Couldn't pull the username from database.");
            }
		});
		//connection.end();
    },
    pullUsers: function(obj,callbackFromController){
		var sql = "SELECT * FROM users";
		db.execute(sql,null, function (result){
            if(result.length >= 1){
                callbackFromController(result);
            }else{
                console.log("Couldn't pull the users from database.");
            }
		});
		 
		//connection.end();
	},
	pullComments: function(obj,callbackFromController){
		var sql = "SELECT * FROM comments ORDER BY `comment_created` DESC";
		db.execute(sql,null, function (result){
            if(result.length >= 1){
                callbackFromController(result);
            }else{
                console.log("Couldn't pull the comments from database.");
            }
		});
		 
		//connection.end();
	},
	pullPosts: function(obj,callbackFromController){
		var sql = "SELECT * FROM posts ORDER BY `post_created` DESC";
		db.execute(sql,null, function (result){
            if(result.length >= 1){
                callbackFromController(result);
            }else{
                console.log("Couldn't pull the posts from database.");
            }
		});
		 
		//connection.end();
	},
	pullChats: function(obj,callbackFromController){
		var sql = "SELECT * FROM chats ORDER BY `created_at` DESC";
		db.execute(sql,null, function (result){
            if(result.length >= 1){
                callbackFromController(result);
            }else{
                console.log("Couldn't pull the chats from database.");
            }
		});
		 
		//connection.end();
	},
	pullAds: function(obj,callbackFromController){
		var sql = "SELECT * FROM ads ORDER BY `ad_created` DESC";
		db.execute(sql,null, function (result){
            if(result.length >= 1){
                callbackFromController(result);
            }else{
                console.log("Couldn't pull the ads from database.");
            }
		});
		 
		//connection.end();
	},
	updateProfile: function(l,p, callbackFromController) {
		var sql = "UPDATE users SET username=?, email=?, image=? WHERE user_id=?";
		db.execute(sql, [p.username,p.email,p.image,l.user_id], function(result){
			callbackFromController(result);
		});

	},
	approveUser: function(user, callbackFromController) {
		var sql = "UPDATE users SET status='Approved', user_type=? WHERE user_id=?";
		db.execute(sql, [user.type,user.id], function(result){
			callbackFromController(result);
		});

	},
	blockUser: function(user, callbackFromController) {
		var sql = "UPDATE users SET status='Disapproved' WHERE user_id=?";
		db.execute(sql, [user.id], function(result){
			callbackFromController(result);
		});

	},
	approvePost: function(post, callbackFromController) {
		var sql = "UPDATE posts SET status='Approved' WHERE post_id=?";
		db.execute(sql, [post.id], function(result){
			callbackFromController(result);
		});

	},
	blockpost: function(post, callbackFromController) {
		var sql = "UPDATE posts SET status='Disapproved' WHERE post_id=?";
		db.execute(sql, [post.id], function(result){
			callbackFromController(result);
		});

	},
	approveAd: function(ad, callbackFromController) {
		var sql = "UPDATE ads SET status='Approved' WHERE ad_id=?";
		db.execute(sql, [ad.id], function(result){
			callbackFromController(result);
		});

	},
	blockAd: function(ad, callbackFromController) {
		var sql = "UPDATE ads SET status='Disapproved' WHERE ad_id=?";
		db.execute(sql, [ad.id], function(result){
			callbackFromController(result);
		});

	},
	postAd: function(x, callbackFromController){
		
		var sql = "INSERT INTO ads VALUES ('', ?, ?, ?, ?,?)";
		db.execute(sql, [x.name,x.speciality,x.address,x.created,"Disapproved"], function(result){
			callbackFromController(result);
		});
	}

};
