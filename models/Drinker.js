const {Schema, model} = require('mongoose');

const drinkerSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    placeId: {
        type: String,
        required: true
    },
    reserve: {
        type: Date,
    },
    goal: {
        type: String
    },
    details: {
        maleCount: {
            type: Number
        },
        femaleCount: {
            type: Number
        },
        street: {
            type: String
        },
        desiredAmount: {
            type: String
        },
        pays: {
            type:String
        }
    },
    status: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});

module.exports = model('drinker',drinkerSchema);
