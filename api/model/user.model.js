const mongoose = require('mongoose');




const PatientSchema = new mongoose.Schema({
	PatientId: {
	type: String,
	required: [true, 'PatientId required.'],
	minLength: [3],
},
	ExamID: {
		type: String,
		required: [true, 'Exam-ID required'],
    minLength: [3, "EXAM-ID Must be at least 3 charcters"],
	},
  Age:{
    type: String,
    required: [true, 'Age Required'],
  },
  ImageUrl:{
    type: String,
    required: [true, 'Image Url Required']
  },
  Sex:{
    type: String,
    required: [true, 'Enter Sex of patient']
  },
  Date:{
    type: String,
    required: [true, 'Date required']
  },
  bmi: {
    type: String,
    required: [true, 'Body Mass Index required']
  },
  KeyFindings: {
    type: String,
    required: [true, 'Key Findings required']
  },
  ZipCode:{
    type: String,
    required: [true, 'ZipCode required']
  },
  BrixiaScore: {
    type: String,
    required: [true, 'BrixiaScore required']
  },
}, {timestamps : true})




module.exports = mongoose.model("Patient", PatientSchema);