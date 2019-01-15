const router = require('express').Router();
const ordersController = require('../controllers/orders');
const checkAdmin = require('../middleware/checkAdmin');

router.get('/', checkAdmin, ordersController.getAll);
router.get('/:orderId', checkAdmin, ordersController.getOne);

module.exports = router;