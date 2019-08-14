const DevModel = require('../models/Developer')

module.exports = {
    async store(req, res) {
//      console.log(req.io)
//      console.log(req.connectedUsers)

        const { devId } = req.params
        const { user } = req.headers

        const currentUser = await DevModel.findById(user)
        const likedUser = await DevModel.findById(devId)

        if (!likedUser) {
            return res.status(400).json({ error: 'Dev not exist' })
        }

        if (likedUser.likes.includes(currentUser._id)) {
//          console.log('deu match')
            
            // CONTINUAR
            // 18:57 do ultimo video da semana omnistack
        }

        currentUser.likes.push(likedUser._id)

        await currentUser.save()

        return res.json(currentUser)
    }
}