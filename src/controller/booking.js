const Booking = require("../Models/Booking");

const booking = {};

booking.addBooking = async (req, res, next) => {
    try {
        const count = await Booking.countDocuments();
        const clientID = 1000 + (count + 1);
        const data = { ...req.body, clientID }
        const booking = await Booking.create(data);
        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        next(error);
    }
};

module.exports = booking