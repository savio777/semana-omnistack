const DevModel = require('../models/Developer')

module.exports = {
    async store(req, res) {
        const { devId } = req.params
        const { user } = req.headers

        const currentUser = await DevModel.findById(user)
        const likedUser = await DevModel.findById(devId)

        if (!likedUser) {
            return res.status(400).json({ error: 'Dev not exist' })
        }

        if (likedUser.likes.includes(currentUser._id)) {
            //return res.json({ match: true })
            console.log('deu match')
        }

        currentUser.likes.push(likedUser._id)

        await currentUser.save()

        return res.json(currentUser)
    }
}