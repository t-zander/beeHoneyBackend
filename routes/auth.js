const router = require('express').Router();
const authController = require('../controllers/auth');

router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.post('/loginasadmin', authController.loginAsAdmin);

module.exports = router;