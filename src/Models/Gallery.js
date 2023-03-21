const { model, Schema } = require('mongoose')

const gallerySchema = new Schema({
    title: { type: String, required: true, trim: true },
    albumLink: {type: String, required: true},
    image: {type: String, required: true}
}, { timestamps: true })

const Gallery = model('Gallery', gallerySchema)
module.exports = Gallery
