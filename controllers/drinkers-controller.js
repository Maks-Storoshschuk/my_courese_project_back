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
    }
};
