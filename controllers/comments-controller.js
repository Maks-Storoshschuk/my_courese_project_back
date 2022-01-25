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
    },

    getCommentById: async (req, res) => {
        try {
            const {id} = req.params;
            const comment = await Comment.findById(id);
            res.json(comment);
        } catch (e) {
            res.json(e);
        }
    },

    delete: async (req, res) => {
        try {
            const {id} = req.params;
            const comment = await Comment.findByIdAndDelete(id);
            res.json(comment);
        } catch (e) {
            res.json(e);
        }
    },
};
