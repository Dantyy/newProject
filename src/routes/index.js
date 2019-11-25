const Router = require('koa-router');
const router = new Router();

const UserControllers = require('../controllers/user-controllers');
const ProductControllers = require('../controllers/product-controllers');
const CardControllers = require('../controllers/card-controllers');
const userControllers = new UserControllers();
const productControllers = new ProductControllers();
const cardControllers = new CardControllers();

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
router.get('/api/productlist/find/', );

//card
router.get('/api/card/find/', cardControllers.findCard);
router.post('/api/card/add/', cardControllers.createCard);
router.put('/api/card/update/', cardControllers.updateCard);
router.del('/api/card/delete/', cardControllers.deleteCard);

module.exports = router;