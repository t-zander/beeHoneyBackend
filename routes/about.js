const router = require('express').Router();
const aboutController = require('../controllers/about');

router.get('/', aboutController.getInfo);

module.exports = router;