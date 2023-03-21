const {model, Schema} = require('mongoose')

const quoteSchema = new Schema({
    text: {type: String, required: true},
    author: {type: String, required: true},
    image: {type: String, required: true},
})

const Quote = model('Quote', quoteSchema)

module.exports = Quote