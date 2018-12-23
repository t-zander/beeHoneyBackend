const router = require('express').Router();
const productsController = require('../controllers/products');

router.get('/', productsController.getAll);
router.get('/:categoryId', productsController.getByCategory);
router.post('/', productsController.addOne);

module.exports = router;