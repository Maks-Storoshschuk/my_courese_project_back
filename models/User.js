const {Schema, model} = require('mongoose');

const {userRoles} = require('../constants');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        uniq: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: userRoles.USER,
        enum: Object.values(userRoles)
    },
    avatar: {
        type: String,
    },
    isCritic: {
        type: Boolean,
        default: false,
    },
    favoritePlacesId: {
        type: Array
    },
    commentsId: {
        type: Array
    },
    ratingPlaces: {
        StarPlacesId1: {
            type: Array
        },
        StarPlacesId2: {
            type: Array
        },
        StarPlacesId3: {
            type: Array
        },
        StarPlacesId4: {
            type: Array
        },
        StarPlacesId5: {
            type: Array
        },
    }
}, {timestamps: true});

module.exports = model('user', userSchema);

