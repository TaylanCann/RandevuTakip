var path = require('path');

module.exports.user = function(req,res){

    res.render('user');
}

module.exports.userPost= function(req,res){

    console.log(req.body.username);  
    res.render('user',
    {   
        username: req.body.username,
        password: req.body.password
    });
}
