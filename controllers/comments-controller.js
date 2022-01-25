const {Comment} = require('../models');

module.exports = {
    getComments: async (req, res) => {
        try {
            const comments = await Comment.find();
            res.json(comments);
        } catch (e) {
            res.json(e);
        }
    },

    createComment: async (req, res) => {
        try {
            const newComment = await Comment.create(req.body);
            res.json(newComment);
        } catch (e) {
            res.json(e);
        }
    }
};
