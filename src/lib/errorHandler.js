const logger = require('../utils/logger')

module.exports = (app) => {
    app.use((_req, _res, next) => {
        let error = new Error('404 not found')
        error.status = 404
        next(error)
    })

    app.use((error, _req, res, next) => {
        console.log(error)
        logger.error(error.message || 'internal server error')
        res.status(error.status || 500).json({
            error: error.message || 'internal server error!',
        })
        next()
    })
}
