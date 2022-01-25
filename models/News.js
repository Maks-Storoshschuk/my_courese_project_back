const {Schema, model} = require('mongoose');

const newsSchema = new Schema({
    placeId: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: [
            'загальні',
            'акції',
            'події'
        ]
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    picture: {
        type: String
    },
    price: {
        type: Number
    },
    status: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});

module.exports = model('news', newsSchema);
