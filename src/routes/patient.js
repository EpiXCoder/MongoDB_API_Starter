const express = require('express')
const router = express.Router();

const Patient = require('../models/patient')

router.get('/', (req, res) => {
    Patient.find().then((patients) => {
        return res.json({patients})
    })
    .catch((err) => {
        throw err.message
    });
})

router.get('/:patientId', (req, res) => {
    console.log(`Patient id: ${req.params.patientId}`)
    Patient.findById(req.params.patientId).then((patient) => {
        return res.json({patient})
    })
    .catch((err) => {
        throw err.message
    });
})

router.post('/', (req, res) => {
    let patient = new Patient(req.body)
    patient.save().then(patientResult => {
        return res.json({patient: patientResult})
    }).catch((err) => {
        throw err.message
    })
})

router.put('/:patientId', (req, res) => {
    Patient.findByIdAndUpdate(req.params.patientId, req.body).then((patient) => {
        return res.json({patient})
    }).catch((err) => {
        throw err.message
    })
})

router.delete('/:patientId', (req, res) => {
    Patient.findByIdAndDelete(req.params.patientId).then(() => {
        return res.json({
            'message': 'Successfully deleted.',
            '_id': req.params.patientId
        })
    })
    .catch((err) => {
        throw err.message
    })
})
module.exports = router

