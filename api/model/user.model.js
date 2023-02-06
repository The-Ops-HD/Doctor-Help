const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const PatientSchema = new mongoose.Schema({
	PatientId: {
	type: String,
	required: [true],
	minLength: [3],
},
	Description: {
		type: String,
		required: [true],
    minLength: [3],
	},
  Age: {
    type: Number,
    required: [true],
  },Sex: {
    type: String,
    required: [true],
  },
  ZipCode: {
    type: Number,
    required: [true],
  },
  bmi: {
    type: Number,
    required: [true],
  },imageURL: {
    type : String,
  }

}, {timestamps : true})




module.exports = mongoose.model("Patient", PatientSchema);