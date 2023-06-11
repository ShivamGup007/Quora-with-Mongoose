const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/',async (req,res)=>{
    res.render('login');})

router.post('/',async (req,res)=>{
    const {username,password} = req.body;
    console.log(username);
    try{
        let user = await User.findOne({username});
        if(!user){res.send("Invalid Username");}
        else
        if(user.password!=password){res.send("Invalid Password");}
        else
        console.log(user.id);
        res.render('profile',{user});
    }
    catch(err){
        res.send(err);
    }
})

module.exports=router;