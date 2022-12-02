const { User } = require('../models');

module.exports = {
    async userSignUp(req, res) {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async userLogin(req, res) {
        try {
            const userData = await User.findOne({ username
                : req.body.username });
            if (!userData) {
                res.status(400).json({ message: 'Incorrect username or password, please try again' });
                return;
            }
            const validPassword = await userData.isCorrectPassword(req.body.password);
            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect username or password, please try again' });
                return;
            }
            res.json({ user: userData, message: 'You are now logged in!' });
        } catch (err) {
            res.status(400).json(err);
        }
    },
};