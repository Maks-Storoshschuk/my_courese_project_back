const {Place}=require('../models');

module.exports = {
    getPlaces: async (req, res) => {
        try {
            const places = await Place.find();
            res.json(places);
        } catch (e) {
            res.json(e);
        }
    },

    createPlace: async (req, res) => {
        try {
            const newPlace = await Place.create(req.body);
            res.json(newPlace);
        } catch (e) {
            res.json(e);
        }
    },

    getPlaceById: async (req, res) => {
        try {
            const {id} = req.params;
            const place = await Place.findById(id);
            res.json(place);
        } catch (e) {
            res.json(e);
        }
    },

    delete: async (req, res) => {
        try {
            const {id} = req.params;
            const place = await Place.findByIdAndDelete(id);
            res.json(place);
        } catch (e) {
            res.json(e);
        }
    },
};
