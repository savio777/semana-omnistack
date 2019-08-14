const axios = require('axios')

const DevModel = require('../models/Developer')

module.exports = {
    async store(req, res) {
        const { user } = req.body

        const userExist = await DevModel.findOne({ user: user })

        if (userExist) {
            return res.json(userExist)
        }

        const response = await axios.get(`https://api.github.com/users/${user}`)

        const { name, login, bio, avatar_url } = response.data

        const dev = await DevModel.create({
            name: name,
            user: login,
            bio: bio,
            avatar: avatar_url
        })

        return res.json(dev)
    },

    async index(req, res) {
        const { user } = req.headers

        const currentUser = await DevModel.findOne({ _id: user })

        if (!currentUser) {
            //return res.json(req.headers)
            //return res.json({_id: user})
            return res.status(400).json({ error: 'Dev not exist' })
        }

        const users = await DevModel.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: currentUser.likes } },
                { _id: { $nin: currentUser.dislikes } }
            ]
        })

        return res.json(users)
    }
}
