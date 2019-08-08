const axios = require('axios')

const DevModel = require('../models/Developer')

module.exports = {
    async store(req, res) {
        const { user } = req.body

        const userExist = await DevModel.findOne({ user: user })

        if (userExist) {
            return res.json({exist: true})
        }

        const response = await axios.get(`https://api.github.com/users/${user}`)

        const { name, login, bio, avatar_url } = response.data

        const dev = await DevModel.create({
            name: name,
            user: login,
            bio: bio,
            avatar: avatar_url
        })

        return res.json({criado: true})
    }
}
