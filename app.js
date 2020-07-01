const { wrap } = require('module');
var path=require('path');
var express = require('express');
var app= express();
var ejsLayouts = require('express-ejs-layouts')
var bodyParser = require('body-parser');

app.set('view engine','ejs');
app.set('views',path.join(__dirname, '/joint/app_server/views'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(ejsLayouts);
app.use('/public',express.static(path.join(__dirname,'public')));


require('./joint/app_server/routers/routerManager')(app);

app.listen(8000);