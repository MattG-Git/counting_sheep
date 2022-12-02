const router = require('express').Router();
const { userSignUp, userLogin } = require('../../controllers/userController');

router.route('/').post(userSignUp);
router.route('/login').post(userLogin);

module.exports = router;