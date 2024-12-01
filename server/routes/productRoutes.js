const { Router } = require('express');

const productController = require('../controllers/productController');

const router = Router();

router.route('/').post(productController.AddProduct);
router.route('/').get(productController.GetProduct);
router.route('/:Id').patch(productController.UpdateProduct);
router.route('/:Id').delete(productController.DeleteProduct);

module.exports = router;