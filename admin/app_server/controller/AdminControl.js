var path = require('path');


module.exports.admin = function(req,res){
    res.render('admin',{mesaj:'Admin Sayfası'});
}

