var express = require('express');
var router = express.Router();

var postModel = require.main.require('./models/post-model');
var dashboardModel = require.main.require('./models/dashboard-model');

router.post('/post/upload', function (req, res){

    var today = new Date();
    var post = {
        body: req.body.postbox,
        postUserId: req.body.user_id,
        postUserType:req.body.user_type,
        postUserName:req.body.username,
        postDate:today
    };
    postModel.postUpload(post,function(success){
        if(success){
            res.redirect('/dashboard');
        }else{
            res.redirect('/dashboard');
        }
    })
});
router.post('/post/comment', function (req, res){
    var date = new Date();
    var comment = {
        body: req.body.comment_body,
        postUserId: req.body.user_id,
        postId: req.body.post_id,
        postUserType:req.body.user_type,
        commentUserName:req.body.username,
        postDate:date
    };
    postModel.postComment(comment,function(success){
        if(success){
            res.redirect('/dashboard');
        }else{
            res.redirect('/dashboard');
        }
    })
});
router.get('/post/delete/:id', function (req, res){
    var id = req.params.id;
    postModel.deletePost(id,function(success){
        if(success){
            res.redirect('/dashboard');
        }else{
            res.redirect('/dashboard');
        }
    })
});
router.get('/post/edit/:id', function (req, res){
    var id = req.params.id;
    dashboardModel.pullPosts(id,function(value){
        value.forEach(function(post_){
            if(post_.post_id == id){
                console.log(post_);
                res.render('dashboard/post-edit',{post:post_});
            }
        })
    })
});
router.post('/post/edit/:id', function (req, res){
    var id = req.params.id;
    var date = new Date();
    var post ={
        id:req.params.id,
        body: req.body.postbox,
        created:date
    };
    postModel.updatePost(post,function(value){
            if(value){
                res.redirect('/dashboard');
            }
    })
});
module.exports = router;