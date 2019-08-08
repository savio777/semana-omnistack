const { Schema, model } = require('mongoose')

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Developers'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Developers'
    }]
}, { timestamps: { createdAt: 'created_at' } })

module.exports = model('Developers', DevSchema)
