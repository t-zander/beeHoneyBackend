const router = require('express').Router();
const categoriesController = require('../controllers/categories');

router.get('/', categoriesController.getAll);
router.post('/', categoriesController.addOne);

module.exports = router;