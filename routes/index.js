const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

module.exports = function(){


    router.get('/',(req, res)=>{
        res.send('Welcome to bookstore API');
    });

    router.get('/products/:text/search',ProductController.search);
    
    router.get('/products', ProductController.getAll);

    router.post('/products',ProductController.store);

    router.put('/products/:id',ProductController.update);

    router.get('/products/:id',ProductController.getOne);

    router.delete('/products/:id',ProductController.delete);

    return router;
}