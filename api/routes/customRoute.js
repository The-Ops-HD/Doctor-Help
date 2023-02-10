const patientController = require('../controllers/user-controller');
const Patient = require('../model/user.model');
const api = require('../controllers/api-controller');
const express = require('express');
const router = express.Router();

module.exports = (app) => {
  router
  app.get('/api', api.getPosts)
}