const Quote = require('../Models/Quote')

const quote = {}

quote.getQuote = async (req, res, next) => {
    try {
        const quote = await Quote.find()
        res.status(200).json({
            success: true,
            data: quote,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = quote
