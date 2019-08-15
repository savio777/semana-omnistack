const DevModel = require('../models/Developer')
const MatchModel = require('../models/Match')

module.exports = {
    async store(req, res) {
        //      console.log(req.io)
        //      console.log(req.connectedUsers)

        const { devId } = req.params
        const { user } = req.headers

        const loggedUser = await DevModel.findById(user)
        const likedUser = await DevModel.findById(devId)

        if (!likedUser) {
            return res.status(400).json({ error: 'Dev not exist' })
        }

        if (likedUser.likes.includes(loggedUser._id)) {
            //          console.log('deu match')
            const loggedSocket = req.connectedUsers[user]
            const likedSocket = req.connectedUsers[devId]

            if (loggedSocket) {
                req.io.to(loggedSocket).emit('match', likedUser)
            }

            if (likedSocket) {
                req.io.to(likedSocket).emit('match', loggedUser)
            }

            MatchModel.create({
                id_users: [loggedUser._id, likedUser._id],
                name_users: [loggedUser.user, likedUser.user]
            })
        }

        loggedUser.likes.push(likedUser._id)

        await loggedUser.save()

        return res.json(loggedUser)
    }
}