const express = require('express')
const router = express.Router()
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const middlewares = require('./middlewares')
const sequelize = require('./api/db')
require('dotenv').config()

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error))

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

router.use('/user', require('./api/routes/user'))

app.use('/api', router)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app
