const express = require('express')
const galleryController = require('../controller/gallery')
const authGuard = require('../middleware/authGuard')

const router = express.Router()

/* GET users listing. */
router.get('/', /*authGuard, */ galleryController.getAll) // TODO: uncomment authGuard later
router.get('/:id', authGuard, galleryController.getOne) // TODO: uncomment authGuard later

module.exports = router
