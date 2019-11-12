var express = require('express');
var router = express.Router();

var bankData= require('../bd/fake_bank_data');
var homeRouter= require('./home');
var querystring = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
                        title: 'Bank De Shamme', 
                        errMsg:"" }
  );
});

router.post('/login',function(req,res,next){
  
  const name = req.body.name;
  const email = req.body.email;
  console.log(name);
 var userFound=  bankData.filter(function(user){
     return  user.name== name && user.email== email;
  }); 
  if(userFound.length==0){
    console.log("no user found")
    res.render('index',{
                        title: 'Bank De Shamme',
                        errMsg:" None of Our customers has these details, are you sure you bank with us? Try agian, if not Sign up."
                      }
    );
  }
  else{
    console.log("this user was found");
    console.log(userFound); 

    var query =querystring.stringify({
      "email": email,
      "name": name
    });
 res.redirect('/home?'+query);
  }

  res.end
});


//express().use('/home', homeRouter);
/*
router.get('/home', function(req,res,next){
  res.render('home',{
    title:'Bank De Shamme'
  });
});
*/

module.exports = router;
