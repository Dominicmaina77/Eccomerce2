const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/ProductControllers');
const router = express.Router();
router.use(express.json());

router.use(express.urlencoded({extended:true}));

router.post('/createproduct', createProduct);
router.get('/getproduct', getProducts);
router.put('/updateproduct/:id', updateProduct);
router.delete('/deleteproduct', deleteProduct);

module.exports = router;