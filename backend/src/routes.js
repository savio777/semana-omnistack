const express = require('express')

const DeveloperController = require('./controllers/DeveloperController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send(`oi ${req.query.nome} :)`)
})

routes.post('/dev', DeveloperController.store)

routes.post('/teste', (req, res) => {
    console.log(req.body.name)
    return res.json(req.body)
})

module.exports = routes
