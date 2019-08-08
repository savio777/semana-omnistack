const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const port = 7777

const server = express()

mongoose.connect('mongodb://localhost:27017/omnistack', {useNewUrlParser: true})

server.use(express.json())

server.use(routes)

server.listen(port)
