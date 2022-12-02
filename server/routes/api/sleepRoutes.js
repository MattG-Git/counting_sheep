const router = require('express').Router();
const { userSleepData, logSleep } = require('../../controllers/sleepController');

router.route('/').get(userSleepData).post(logSleep);

module.exports = router;