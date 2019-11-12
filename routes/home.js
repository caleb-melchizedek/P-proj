var express = require('express');
var router = express.Router();

//bank data
var data= require('../bd/fake_bank_data');


router.get('/', function(req,res,next){

    var userEmail = req.query.email;

    var userDetails= data.filter(function(user){
        return user.email == userEmail;
        });

    res.render('home',{
        title:'Bank De Shamme',
        userDetails:userDetails[0].values()

    });


    console.log(userEmail);
    console.log(userDetails);
});

module.exports= router;