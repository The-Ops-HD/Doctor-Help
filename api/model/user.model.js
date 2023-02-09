const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');



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
}, {timestamps : true})




module.exports = mongoose.model("Patient", PatientSchema);