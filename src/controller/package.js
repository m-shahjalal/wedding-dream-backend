const Package = require('../Models/Package')

const package = {}

package.getAll = async (req, res) => {
    try {
        const packages = await Package.find()
        res.status(200).json({
            success: true,
            data: packages,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = package