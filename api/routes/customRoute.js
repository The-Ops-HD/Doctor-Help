var express = require('express');
const api = require('../controllers/api-controller');
const Patient = require('../controllers/user-controller');




module.exports = (app) => {
  app.get('/api', api.getPosts);
  app.get('/api/getall', Patient.getAllPateints);
  app.post('/api/create', Patient.createPatient);
  app.put('/api/edit/:id', Patient.updatePatient);
}