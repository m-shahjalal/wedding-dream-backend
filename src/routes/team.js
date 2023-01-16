const express = require('express')
const teamController = require('../controller/team')
const authGuard = require('../middleware/authGuard')

const router = express.Router()

/* GET users listing. */
router.get('/', /*authGuard, */ teamController.getTeam) // TODO: uncomment authGuard later

module.exports = router
