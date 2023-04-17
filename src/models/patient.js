const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const PatientSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    dob: {type: Date, required: true},
    address: {type: String, required: true}
  })
  
  const Patient = mongoose.model('Patient', PatientSchema)
  
  module.exports = Patient