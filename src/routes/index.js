const Router = require('koa-router');
const router = new Router();

const UserControllers = require('../controllers/user-controllers');
const ProductControllers = require('../controllers/product-controllers');
const CartControllers = require('../controllers/cart-controllers');
const ProductListControllers = require('../controllers/productList-controllers');
const userControllers = new UserControllers();
const productControllers = new ProductControllers();
const cartControllers = new CartControllers();
const productListControllers = new ProductListControllers();

//user
router.get('/api/user/login/', userControllers.loginUser);
router.post('/api/user/signup/', userControllers.createUser);
router.put('/api/user/update/', userControllers.updateUser);
router.del('/api/user/delete/', userControllers.deleteUser);

//product
router.get('/api/product/find/', productControllers.findProduct);
router.post('/api/product/add/', productControllers.createProduct);
router.put('/api/product/update/', productControllers.updateProduct);
router.del('/api/product/delete/', productControllers.deleteProduct);
router.get('/api/productlist/find/', productListControllers.findProductList);

//cart
router.get('/api/cart/find/', cartControllers.findCart);
router.post('/api/cart/add/', cartControllers.createCart);
// router.put('/api/cart/update/', cartControllers.updateCart);
router.del('/api/cart/delete/', cartControllers.deleteCart);

module.exports = router;