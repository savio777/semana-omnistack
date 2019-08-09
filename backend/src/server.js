const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const port = 7777

const server = express()

mongoose.connect('mongodb://localhost:27017/omnistack', {useNewUrlParser: true})

server.use(express.json())
server.use(cors())

server.use(routes)

server.listen(port)
