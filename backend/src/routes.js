const express = require('express')

const DeveloperController = require('./controllers/DeveloperController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send(`oi ${req.query.nome} :)`)
})

routes.get('/dev', DeveloperController.index)

routes.post('/dev', DeveloperController.store)

routes.post('/dev/:devId/likes', LikeController.store)
routes.post('/dev/:devId/dislikes', DislikeController.store)

module.exports = routes
