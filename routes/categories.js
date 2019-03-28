const router = require('express').Router();
const categoriesController = require('../controllers/categories');
const checkAdmin = require('../middleware/checkAdmin');

router.get('/', categoriesController.getAll);

/* for admin only */
router.post('/', checkAdmin, categoriesController.addOne);
router.delete('/:categoryId', checkAdmin, categoriesController.removeOne);

module.exports = router;