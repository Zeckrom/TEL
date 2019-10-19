var express = require('express');
var router = express.Router();
const Controller = require('../controller/CategoryController')



router.post('/add', Controller.add)
router.post('/login', Controller.getAll)






module.exports = router;
