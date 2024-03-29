const { model, Schema } = require('mongoose')

const testimonialSchema = new Schema({
    user: { type: String, trim: true },
    text: { type: String, trim: true },
    image: String

}, { timestamps: true })

const Testimonial = model('Testimonial', testimonialSchema)
module.exports = Testimonial
