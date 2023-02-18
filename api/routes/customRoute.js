var express = require('express');
const api = require('../controllers/api-controller');
const Patient = require('../controllers/user-controller');




module.exports = (app) => {
  app.get('/api', api.getPosts);
  app.get('/api/getall', Patient.getAllPateints);
  app.get('/api/get/:PatientId', Patient.findPatientId);
  app.get('/api/getExam/:id', Patient.findOneExam);
  app.post('/api/create', Patient.createPatient);
  app.delete('/api/delete/:id', Patient.deletePAtient);
  app.put('/api/edit/:id', Patient.updatePatient);
}