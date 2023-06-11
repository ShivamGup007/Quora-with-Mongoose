const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/',async (req,res)=>
{
    const {id}=req.query;
    try{
        let allUsers = await User.find({'_id':{$ne: id}});
        console.log(allUsers);
        res.render('allActiveUsers',{allUsers,id});
    }
    catch(err){
        res.send(err);
    }
})

module.exports=router;