const { body, validationResult } = require('express-validator')
const logger = require('../lib/logger')
const User = require('../models/User')

module.exports = [
    body('email')
        .exists()
        .withMessage('email is required')
        .isEmail()
        .withMessage('should enter a valid email address')
        .custom(async (value) => {
            try {
                const user = await User.findOne({ email: value })
                if (user) throw new Error('email already exists')
                return true
            } catch (error) {
                logger.error(error)
                throw new Error(error.message)
            }
        }),
    body('password')
        .exists()
        .withMessage('password field should not be empty')
        .isLength({ min: 5, max: 64 })
        .withMessage('password should be more then 5 character'),

    body('confirmPassword')
        .exists()
        .withMessage('confirm password field should not be empty')
        .isLength({ min: 5, max: 64 })

        .custom((value, { req }) => {
            const match = value === req.body.password
            if (!match) throw new Error('password does not match')
            return true
        })
        .withMessage('confirm password does not match'),

    (req, res, next) => {
        const errorValidation = validationResult(req)
        if (!errorValidation.isEmpty()) {
            return res.status(400).json({
                error: errorValidation.array({ onlyFirstError: true })[0].msg,
                success: false,
            })
        }
        next()
    },
]
