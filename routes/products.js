const router = require('express').Router();
const productsController = require('../controllers/products');
const checkAdmin = require('../middleware/checkAdmin');

router.get('/', productsController.getAll);
router.get('/category/:categoryId', productsController.getByCategory);

/*only for admin*/
router.post('/', checkAdmin, productsController.addOne);
router.delete('/', checkAdmin, productsController.deleteOne);
router.patch('/', checkAdmin, productsController.updateOne);

module.exports = router;