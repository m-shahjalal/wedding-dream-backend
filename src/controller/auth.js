const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const throwError = require('../utils/throwError')

const auth = {}

auth.signUp = async (req, res, next) => {
    const { name, email, password } = req.body
    try {
        const hashed = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashed })
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            success: true,
        })
    } catch (error) {
        next(error)
    }
}

auth.signIn = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })

        if (user) {
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                res.status(200).json({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    isLoggedIn: true,
                    roles: user.roles,
                    token: jwt.sign(
                        { email: user.email },
                        process.env.JWT_SECRET
                    ),
                    success: true,
                })
            } else {
                res.status(403).json({
                    error: 'credential not match',
                    success: false,
                })
            }
        } else {
            res.status(403).json({
                error: 'credential not match',
                success: false,
            })
        }
    } catch (e) {
        next(e)
    }
}

auth.checkAuth = async (req, res, next) => {
    const { token } = req.params
    try {
        const { email } = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ email })
        if (!user) throwError(403, 'unauthorized')

        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            isLoggedIn: true,
            roles: user.roles,
            token: jwt.sign({ email: user.email }, process.env.JWT_SECRET),
            success: true,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = auth
