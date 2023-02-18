const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');



const PatientSchema = new mongoose.Schema({
	PatientId: {
	type: String,
	required: [true],
	minLength: [3],
},
	ExamID: {
		type: String,
		required: [true],
    minLength: [3],
	},
  Age:{
    type: Number,
    required: [true],
  },
  ImageUrl:{
    type: String,
    required: [true]
  },
  Sex:{
    type: String,
    required: [true]
  },
  Date:{
    type: String,
    required: [true]
  },
  bmi: {
    type: String,
    required: [true]
  },
  KeyFindings: {
    type: String,
    required: [true]
  },
  ZipCode:{
    type: Number,
    required: [true]
  }
}, {timestamps : true})




module.exports = mongoose.model("Patient", PatientSchema);