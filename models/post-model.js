var db = require('./db');
module.exports = {
	postUpload: function(post, callbackFromController){
		
		var sql = "INSERT INTO posts VALUES ('', ?, ?, ?, ?,?, ?, ?,?,?)";
		db.execute(sql, [post.postUserType,post.postUserId,post.postUserName,post.body,'','',post.postDate,'',"Disapproved"], function(result){
			callbackFromController(result);
		});
    },
    postComment: function(x, callbackFromController){
		
		var sql = "INSERT INTO comments VALUES ('', ?, ?, ?, ?,?)";
		db.execute(sql, [x.postId,x.postUserId,x.commentUserName,x.body,x.postDate], function(result){
			callbackFromController(result);
		});
	},
	deletePost: function(x, callbackFromController){
		
		var sql = "DELETE FROM posts WHERE post_id=?";
		db.execute(sql, [x], function(result){
			callbackFromController(result);
		});
	},
	updatePost: function(post, callbackFromController) {
        var sql = "UPDATE posts SET post_body=?,post_created=? WHERE post_id=?";
		db.execute(sql, [post.body,post.created,post.id], function(result){
			callbackFromController(result);
		});

	}

};
