const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    name: { type: String, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    password: { type: String, required: true },
    roles: { type: Array, default: ['user'] },
}, { timestamps: true })

const User = model('User', userSchema)
module.exports = User
