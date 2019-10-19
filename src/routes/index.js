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
router.get('/api/product/find/:userId', productControllers.getUserId, productControllers.findProduct);
router.post('/api/product/add/:userId', productControllers.getUserId, productControllers.createProduct);
router.put('/api/product/update/:userId', productControllers.getUserId, productControllers.updateProduct);
router.del('/api/product/delete/:userId', productControllers.getUserId, productControllers.deleteProduct);

//card
router.get('/api/card/find/:userId', cardControllers.getUserId, cardControllers.findCard);
router.post('/api/card/add/:userId', cardControllers.getUserId, cardControllers.createCard);
router.put('/api/card/update/:userId', cardControllers.getUserId, cardControllers.updateCard);
router.del('/api/card/delete/:userId', cardControllers.getUserId, cardControllers.deleteCard);

module.exports = router;