const Booking = require("../Models/Booking");

const booking = {};

{
    "packageId": "63d6859faffda9096738413f",
    "brideName": "bobie",
    "groomName": "leone",
    "time": "19:52",
    "contact": "01451245688",
    "packageName": "Top photographer combo",
    "packageAmount": "19999",
    "advanceAmount": "5000",
    "eventDate": "2023-03-31",
    "transactionID": "20068563",
    "accountNumber": "6539632",
    "email": "wedding@gmail.com",
    "venueDetails": "iccb"
}


booking.addBooking = async (req, res, next) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        next(error);
    }
};

module.exports = booking