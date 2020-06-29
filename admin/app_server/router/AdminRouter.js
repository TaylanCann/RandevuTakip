var express = require('express');
var router = express.Router();
var controller = require('../controller/AdminControl');

router.get('/',controller.admin);

module.exports=router;