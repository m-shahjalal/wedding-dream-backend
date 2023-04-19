require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./src/lib/logger')
const routes = require('./src/routes')

const imagemin = require('imagemin');

const morganMiddleware = require('./src/middleware/morgan')

const app = express()
app.use(cors())
app.use(express.json({ limit: '200mb' }))
app.use(morganMiddleware)
app.get('/', (_req, res) => res.json({ message: 'Hello World!' }))
routes(app)

// listing server
const port = process.env.PORT || 5000
const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.03nsn8f.mongodb.net/?retryWrites=true&w=majority`
mongoose
    .connect(URL, { useNewUrlParser: true })
    .then(() => {
        app.listen(port, () =>
            logger.info(`🚀 App listening on port http://localhost:${port}`)
        )
    })
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
