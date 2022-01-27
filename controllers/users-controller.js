const {User} = require('../models');
const {userNormalizer}= require('../util');
const {passwordService} = require('../services');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find().lean();
            const clearUsers =[];

            users.forEach(user=> clearUsers.push(userNormalizer.userNormalizer(user)));

            res.json(clearUsers);
        } catch (e) {
            res.json(e);
        }
    },

    createUser: async (req, res) => {
        try {
            const {password} = req.body;
            const hashedPassword = await passwordService.hash(password);
            const newUser = await User.create({...req.body,password:hashedPassword});
            res.json(newUser);
        } catch (e) {
            res.json(e);
        }
    },

    getUserById: async (req, res) => {
        try {
            const {id} = req.params;
            const user = await User.findById(id);
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },

    delete: async (req, res) => {
        try {
            const {id} = req.params;
            const user = await User.findByIdAndDelete(id);
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },

};
