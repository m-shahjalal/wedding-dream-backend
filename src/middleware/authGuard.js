const { verify } = require('jsonwebtoken')
const User = require('../models/User')
const throwError = require('../utils/throwError')

module.exports = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(' ')[1] || false
        if (!token) {
            return res.status(409).json({ message: 'Please login first', logout: true })
        }

        const { email } = verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ email }).select('-password -__v')
        if (!user) {
            return res.status(401).json({ message: 'Please login first', logout: true })
        } else {
            req.user = user
            return next()
        }
    } catch (error) {
        res.status(401).json({ message: 'Please login first', logout: true })
    }
}
