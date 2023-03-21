const Video = require('../Models/Vidoe')

const video = {}

video.getAll = async (req, res, next) => {
    try {
        const video = await Video.find()
        res.json({
            success: true,
            data: video,
        })
    } catch (error) {
        next(error)
    }
}

video.getOne = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json({
            success: true,
            data: video,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = video