const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const port = 7777

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = {}

io.on('connection', (socket) => {
    const { user } = socket.handshake.query

//    console.log(`id do user~> ${user}, id do socket~> ${socket.id}`)

    connectedUsers[user] = socket.id
})

mongoose.connect('mongodb://localhost:27017/omnistack', { useNewUrlParser: true })

app.use(express.json())
app.use(cors())

// CONTINUAR
// 18:57 do ultimo video da semana omnistack


app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers

    return next()
})

app.use(routes)

server.listen(port)
