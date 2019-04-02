const router = require('express').Router();
const categoriesController = require('../controllers/categories');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', categoriesController.getAll);

/* for admin only */
// TODO: remove this when auth on frontend is ready
router.post('/', /* authMiddleware.checkAuthToken, authMiddleware.chekIfAdmin, */ categoriesController.addOne);
router.delete('/:categoryId', /* authMiddleware.checkAuthToken, authMiddleware.chekIfAdmin, */ categoriesController.removeOne);
router.patch('/:categoryId', /* authMiddleware.checkAuthToken, authMiddleware.chekIfAdmin, */ categoriesController.updateOne)

module.exports = router;