const express = require('express')
const router = express.Router()
const { createClass } = require('../controllers/classController')


router.route('/createclass').post(createClass)

module.exports = router