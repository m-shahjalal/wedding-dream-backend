const Gallery = require('../Models/Gallery')

const gallery = {}

gallery.getAll = async (req, res, next) => {
    try {
        const gallery = await Gallery.find()
        res.json({
            success: true,
            data: gallery,
        })
    } catch (error) {
        next(error)
    }
}

gallery.getOne = async (req, res, next) => {
    try {
        const gallery = await Gallery.findById(req.params.id)
        res.status(200).json({
            success: true,
            data: gallery,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = gallery