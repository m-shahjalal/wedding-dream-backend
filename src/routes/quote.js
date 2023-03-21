const express = require('express')
const quote = require('../controller/quote')

const router = express.Router()

/* GET users listing. */
router.get('/', quote.getQuote) 

module.exports = router
