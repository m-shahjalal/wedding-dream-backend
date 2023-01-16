const CoverImage = require("../Models/CoverImage");

const cover = {}

cover.getCoverImage = async (req, res, next) => {
    try {
        const coverImage = await CoverImage.find();
        
        res.status(200).json({ success: true, data: coverImage.reverse() });
    } catch (error) {
        next(error);
    }
};

module.exports = cover;