const express = require("express");
const booking = require("../controller/booking");

const router = express.Router();

/* GET users listing. */
router.post("/", booking.addBooking); // TODO: add authGuard later

module.exports = router;
