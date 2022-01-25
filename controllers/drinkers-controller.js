const {Drinker} = require('../models');

module.exports = {
    getDrinkers: async (req, res) => {
        try {
            const drinkers = await Drinker.find();
            res.json(drinkers);
        } catch (e) {
            res.json(e);
        }
    },

    reserveDrinker: async (req, res) => {
        try {
            const newReserve = await Drinker.create(req.body);
            res.json(newReserve);
        } catch (e) {
            res.json(e);
        }
    },

    getDrinkerById: async (req, res) => {
        try {
            const {id} = req.params;
            const drinker = await Drinker.findById(id);
            res.json(drinker);
        } catch (e) {
            res.json(e);
        }
    },

    delete: async (req, res) => {
        try {
            const {id} = req.params;
            const drinker = await Drinker.findByIdAndDelete(id);
            res.json(drinker);
        } catch (e) {
            res.json(e);
        }
    },
};
