const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user-controller');
const api = require('../controllers/api-controller');

router.get('/', UserController.getUser);
router.get('/', UserController.getUser);

module.exports = (app) => {
  router
  app.get('/api/', api.getPosts)
  
}
