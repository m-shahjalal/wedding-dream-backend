const express = require("express");
const coverImageController = require("../controller/coverImage");

const router = express.Router();

/* GET users listing. */
router.get("/", coverImageController.getCoverImage); // TODO: uncomment authGuard later

module.exports = router;
