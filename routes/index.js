var express = require('express');
var router = express.Router();
const baseController = require('../controllers/baseController')
const profileController = require('../controllers/profileController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    'message': 'Hello world'
  });
});

router.post('/sum', baseController.sum);
router.get('/profile', profileController.profile);

module.exports = router;
