const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const port = 7777

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://localhost:27017/omnistack', { useNewUrlParser: true })

const connectedUsers = {}

io.on('connection', (socket) => {
    const { user } = socket.handshake.query

    connectedUsers[user] = socket.id
})

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers

    return next()
})

app.use(express.json())
app.use(cors())

app.use(routes)

server.listen(port)
