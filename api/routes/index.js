var express = require('express');
var router = express.Router();

const api = require('../controllers/api-controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});

module.exports =  router;
