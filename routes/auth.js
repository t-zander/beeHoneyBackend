const router = require('express').Router();
const authController = require('../controllers/auth');
const signupValidator = require('../middleware/signupValidation');

router.post('/login', authController.login);
router.post('/signup', signupValidator.checkCredentials, authController.signup);
router.post('/loginasadmin', authController.loginAsAdmin);

module.exports = router;