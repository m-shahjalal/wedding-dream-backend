const { model, Schema } = require('mongoose')

const videoSchema = new Schema({
    title: { type: String, required: true, trim: true },
    link: {type: String, required: true},
})

const Video = model('Video', videoSchema)
module.exports = Video
