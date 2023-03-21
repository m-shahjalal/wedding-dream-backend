const Booking = require('../Models/Booking');

const booking = {};

booking.addBooking = async (req, res, next) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        next(error);
    }
};

module.exports = booking;
