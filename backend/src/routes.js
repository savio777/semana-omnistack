const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send(`oi ${req.query.nome} :)`)
})

module.exports = routes
