const { response, request } = require('express');
const Patient = require('../model/user.model');
const axios = require('axios');


const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API is working.',
  });
}

module.exports = {
  getUser,

  getAllPateints: (request, response) => {
    Patient.find({})
      .then( allPatients => {
        console.log(allPatients);
        response.json(allPatients);
      })
      .catch((err)=> {
        console.log(err);
        response.json(err);
      })
  },
  createPatient: (request, response) =>{
    Patient.create(request.body)
      .then(patient => response.json(patient))
      .catch(err=> response.status(400).json(err))
  },

};
