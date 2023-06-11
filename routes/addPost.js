const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Post= require('../models/posts');

router.get('/',async (req,res)=>{
   const {id}=req.query;
   console.log(id);
   await Post.find({userId:id}).populate('userId')
      .then((Posts)=>{
         console.log(Posts);
         res.send(Posts);
       })
       .catch(err => {
        res.send(err);
       });
})

router.post('/',async (req,res)=>{
   const {id,inputText,username}=req.body;
   console.log(inputText);
   const newPost= new Post({
    inputText,
    userId:id,
    username
   });
    await User.findOne({_id:id})
           .then((user)=>{
              user.postId.push(newPost._id);
              user.save();
            })
             newPost.save()
             .then(()=>{
             res.send({newPost})})
            .catch(err => {
                res.send(err);
            })
 })
              
module.exports=router;