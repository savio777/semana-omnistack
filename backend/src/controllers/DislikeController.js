const DevModel = require('../models/Developer')

module.exports = {
    async store(req, res) {
        const { devId } = req.params
        const { user } = req.headers

        const currentUser = await DevModel.findById(user)
        const dislikedUser = await DevModel.findById(devId)

        if (!dislikedUser) {
            return res.status(400).json({ error: 'Dev not exist' })
        }

        currentUser.dislikes.push(dislikedUser._id)

        await currentUser.save()

        return res.json(currentUser)

    }
}
