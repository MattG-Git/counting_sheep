const router = require('express').Router();
const sleepRoutes = require('./sleepRoutes');
const userRoutes = require('./userRoutes');

router.use('/sleep', sleepRoutes);
router.use('/users', userRoutes);

module.exports = router;