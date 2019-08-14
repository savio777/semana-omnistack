const { Schema, model } = require('mongoose')

const MatchSchema = new Schema({
    id_users: [{
        type: Schema.Types.ObjectId,
        required: true
    }],
/*    name_users: [{
        type: String,
        required: true
    }]*/
}, { timestamps: { createdAt: 'created' } })

module.exports = model('Matchs', MatchSchema)
