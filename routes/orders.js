const router = require('express').Router();
const ordersController = require('../controllers/orders');


router.get('/', ordersController.getAll);
router.get('/:orderId', ordersController.getOne);

module.exports = router;