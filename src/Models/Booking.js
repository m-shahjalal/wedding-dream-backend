const { model, Schema } = require('mongoose')

const bookingSchema = new Schema({
    brideName: { type: String, required: true },
    groomName: { type: String, required: true },
    time: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, default: '' },
    venueDetails: { type: String, required: true },
    packageName: { type: String, required: true },
    packageAmount: { type: Number, default: 0 },
    advanceAmount: { type: Number, default: 0 },
    transactionID: { type: String, default: '' },
    accountNumber: { type: String, required: true }
}, { timestamps: true })

const Booking = model('Booking', bookingSchema)
module.exports = Booking
