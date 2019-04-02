const router = require('express').Router();
const productsController = require('../controllers/products');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', productsController.getAll);
router.get('/:productId', productsController.getById);
router.get('/category/:categoryId', productsController.getByCategory);

/*only for admin*/
router.post('/', /* authMiddleware.checkAuthToken, authMiddleware.chekIfAdmin,  */productsController.addOne);
router.delete('/:productId',/*  authMiddleware.checkAuthToken, authMiddleware.chekIfAdmin,  */productsController.deleteOne);
router.patch('/:productId',/*  authMiddleware.checkAuthToken, authMiddleware.chekIfAdmin,  */productsController.updateOne);

module.exports = router;