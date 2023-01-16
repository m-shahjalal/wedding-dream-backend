const express = require('express')
const testimonialController = require('../controller/testimonial')
const authGuard = require('../middleware/authGuard')

const router = express.Router()

/* GET users listing. */
router.get('/', /*authGuard, */ testimonialController.getTestimonials) // TODO: uncomment authGuard later

module.exports = router
