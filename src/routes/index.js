const express = require('express')
const messageRoutes = require('./message.js')
const patientRoutes = require('./patient.js')

const router = express.Router()

router.use('/messages', messageRoutes)
router.use('/patients', patientRoutes)

module.exports = router