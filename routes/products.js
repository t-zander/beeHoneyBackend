const router = require('express').Router();
const productsController = require('../controllers/products');
const checkAdmin = require('../middleware/checkAdmin');

router.get('/', productsController.getAll);
router.get('/:productId', productsController.getById);
router.get('/category/:categoryId', productsController.getByCategory);

/*only for admin*/
router.post('/', checkAdmin, productsController.addOne);
router.delete('/', checkAdmin, productsController.deleteOne);
router.patch('/:productId', checkAdmin, productsController.updateOne);

module.exports = router;