const { model, Schema } = require('mongoose')

const memberSchema = new Schema({
    name: { type: String, required: true, trim: true },
    designation: { type: String, default: 'Photographer', trim: true },
    image: { type: String, required: true },
    Social: {
        facebook: String, linkedIn: String, Instagram: String, twitter: String
    }
}, { timestamps: true })

const Team = model('Team', memberSchema)
module.exports = Team
