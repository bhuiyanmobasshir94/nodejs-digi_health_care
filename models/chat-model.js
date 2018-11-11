var db = require('./db');
module.exports = {
	postChat: function(chat, callbackFromController){
		
		var sql = "INSERT INTO chats VALUES ('', ?, ?, ?, ?)";
		db.execute(sql, [chat.sender,chat.reciever,chat.message,chat.created], function(result){
			callbackFromController(result);
		});
    }


};