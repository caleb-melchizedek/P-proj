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
        UDetails:userDetails[0],
        isActive: userDetails[0].isActive? "Yes": "No",
        balance: userDetails[0].balance,
        age: userDetails[0].age,
        eyeColor: userDetails[0].eyeColor,
        name: userDetails[0].name,
        gender: userDetails[0].gender,
        company: userDetails[0].company,
        email: userDetails[0].email,
        phone: userDetails[0].phone,
        address: userDetails[0].address
    });



    console.log(userDetails[0].name);
});

module.exports= router;