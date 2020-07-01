var express = require('express');
var router = express.Router();
var controller = require('../controller/UserControl');


router.get('/',controller.user);
router.post('/',controller.userPost);
module.exports=router;