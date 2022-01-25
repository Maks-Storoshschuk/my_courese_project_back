const {Schema, model} = require('mongoose');

const commentSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    placeId: {
        type: String,
        required: true
    },
    star: {
        type: Number,
        required: true
    },
    check: {
        type: Number,
    },
    body:{
        type:String,
        required:true,
    }
},{timestamps:true});

module.exports = model('comment', commentSchema);

