var express = require('express');
var router = express.Router();
var controller = require('../controller/UserControl');


router.get('/',controller.user);
module.exports=router;