const {News} = require('../models');

module.exports = {
    getNews: async (req, res) => {
        try {
            const news = await News.find();
            res.json(news);
        } catch (e) {
            res.json(e);
        }
    },

    createNews: async (req, res) => {
        try {
            const newNews = await News.create(req.body);
            res.json(newNews);
        } catch (e) {
            res.json(e);
        }
    },

    getNewsById: async (req, res) => {
        try {
            const {id} = req.params;
            const news = await News.findById(id);
            res.json(news);
        } catch (e) {
            res.json(e);
        }
    },

    delete: async (req, res) => {
        try {
            const {id} = req.params;
            const news = await News.findByIdAndDelete(id);
            res.json(news);
        } catch (e) {
            res.json(e);
        }
    },
};
