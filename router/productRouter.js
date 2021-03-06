let express = require('express');
let router = express.Router();
let productController = require('./../controller/productController');
let authentication = require('./../controller/authentication');
router.get('/', productController.getProducts);
router.post(
  '/',
  authentication.protect,
  authentication.restrictTo,
  // productController.uploadProductPhotos,
  productController.createProduct
);
router.get('/:id', productController.getProductsDetails);
module.exports = router;
