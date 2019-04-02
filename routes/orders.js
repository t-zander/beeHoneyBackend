const router = require('express').Router();
const ordersController = require('../controllers/orders');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.checkAuthToken, authMiddleware.chekIfAdmin, ordersController.getAll);
router.get('/:orderId', authMiddleware.checkAuthToken, authMiddleware.chekIfAdmin, ordersController.getOne);

module.exports = router;