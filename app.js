const blogsRouter = require('./controllers/blogs')
const config = require('./utils/config')
const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

module.exports = app