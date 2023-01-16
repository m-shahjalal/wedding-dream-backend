const express = require('express')
const packageController = require('../Controller/package')

const router = express.Router()

/* GET users listing. */
router.get('/', packageController.getAll) // TODO: add authGuard later

module.exports = router
