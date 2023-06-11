const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/',async (req,res)=>{
    res.render('login')});

router.post('/',async (req,res)=>{
    const {username,password} = req.body;
    console.log(username,password);
    try{
        let user = await User.findOne({username});
        if(user){
            res.send("User is Already Present");
            }
        else
          {
            await User.create({
                username,
                password
            })
            res.redirect('/login');
            };
        }
    catch(err){
        res.send(err);
    }

})

module.exports=router;