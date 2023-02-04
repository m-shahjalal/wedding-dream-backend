const Booking = require("../Models/Booking");

const booking = {};

booking.addBooking = async (req, res, next) => {
    try {
        const {
            brideName,
            groomName,
            time,
            eventDate,
            packageId,
            contact,
            email,
            venueDetails,
            packageName,
            packageAmount,
            advanceAmount,
            transactionID,
            accountNumber,
        } = req.body;

        const booking = await Booking.create({
            brideName,
            groomName,
            time,
            eventDate,
            packageId,
            contact,
            email,
            venueDetails,
            packageName,
            packageAmount,
            advanceAmount,
            transactionID,
            accountNumber,
        });
        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        next(error);
    }
};

module.exports = booking