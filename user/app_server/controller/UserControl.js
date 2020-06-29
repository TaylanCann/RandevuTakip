var path = require('path');

module.exports.user = function(req,res){

    var doktorlar = ['Dr.Ahmet','Dr.Mehmet','Dr.Ali','Dr.Veli'];

    res.render('user',{
        mesaj:'Kullanıcı Sayfası',
        RandevuDr : doktorlar
    });
}

