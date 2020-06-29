const { wrap } = require('module');
var path=require('path');
var express = require('express');
var app= express();
var ejsLayouts = require('express-ejs-layouts')


app.set('view engine','ejs');
app.set('views',path.join(__dirname, '/joint/app_server/views'));


app.use(ejsLayouts);
app.use('/public',express.static(path.join(__dirname,'public')));

app.use(function(req, res, next){

    console.log('Url....:'+req.url);
    console.log('Date...:'+Date.now());
    next();
});

require('./joint/app_server/routers/routerManager')(app);

app.listen(8000);