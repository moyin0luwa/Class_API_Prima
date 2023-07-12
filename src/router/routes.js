const express = require('express')
const router = express.Router()
const { createClass, enrollStudent } = require('../controllers/classController')


router.route('/createclass').post(createClass)
router.route('/enrollstudent').post(enrollStudent)
module.exports = router