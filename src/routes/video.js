const express = require('express')
const videoController = require('../controller/video')

const router = express.Router()

/* GET users listing. */
router.get('/', videoController.getAll) // TODO: add authGuard later

module.exports = router
