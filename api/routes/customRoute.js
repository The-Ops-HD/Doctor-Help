var express = require('express');
var router = express.Router();
const axios = require('axios');
const api = require('../controllers/api-controller');




module.exports = (app) => {
  app.get('/api', api.getPosts);
}