const {Schema, model} = require('mongoose');

const placeSchema = new Schema({
    adminId: {
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: [
            'Клуб',
            'Ресторан',
            'Паб'
        ]
    },
    averagePrice: {
        type: Number
    },
    specifics: {
        type: Array,
    },
    address: {
        city: {
            type: String
        },
        street: {
            type: String
        },
        houseNumber: {
            type: String
        },
        Geo: {
            latitude: {
                type: Number
            },
            longitude: {
                type: Number
            }
        }
    },
    photos: {
        type: Array
    },
    description: {
        type: String
    },
    commentsId: {
        type: Array
    },
    news_id: {
        type: Array
    },
    ratingUsers: {
        StarUserId1: {type: Array},
        StarUserId2: {type: Array},
        StarUserId3: {type: Array},
        StarUserId4: {type: Array},
        StarUserId5: {type: Array},
    },
    contacts: {
        phone: {
            type: String
        },
        email: {
            type: String
        },
    },
    tags: {
        type: Array
    },
    status: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});

module.exports = model('place', placeSchema);
