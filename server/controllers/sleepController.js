const { Sleep } = require('../models');

module.exports = {
    // Find sleep data by user id
    async userSleepData(req, res) {
        try {
            const sleepData = await Sleep.find({ user: req.params.id });
            res.json(sleepData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async logSleep(req, res) {
        try {
            const sleepData = await Sleep.create(req.body);
            res.json(sleepData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};