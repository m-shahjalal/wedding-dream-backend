const express = require('express')
const authController = require('../controller/auth')
const authCheck = require('../middleware/authGuard')
const loginValidator = require('../validator/loginValidator')
const signupValidator = require('../validator/signUpValidator')

const router = express.Router()

/* GET users listing. */
router.post('/signup', signupValidator, authController.signUp)
router.get('/check/:token', authController.checkAuth)
router.post('/signin', loginValidator, authController.signIn)

module.exports = router
