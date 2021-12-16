const { Router } = require('express');

const router = Router();

const {pageCart} = require('../controller/cart')

router.get('/cart',pageCart);

module.exports = router;