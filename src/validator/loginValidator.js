const { body, validationResult } = require('express-validator')

const loginValidator = [
    body('email')
        .isLength({ min: 5, max: 15 })
        .withMessage('email is required!')
        .trim()
        .toLowerCase(),
    body('password')
        .isLength({ min: 5, max: 15 })
        .withMessage('Password is required'),

    (req, res, next) => {
        const errorValidation = validationResult(req)
        if (!errorValidation.isEmpty()) {
            return res.status(400).json({
                error: errorValidation.array({ onlyFirstError: true })[0].msg,
                success: false
            })
        }
        return next()
    },
]

module.exports = loginValidator
