const Router = require('koa-router');
const router = new Router();

const UserControllers = require('../controllers/user-controllers');
const ProductControllers = require('../controllers/product-controllers');
const CardControllers = require('../controllers/card-controllers');
const userControllers = new UserControllers();
const productControllers = new ProductControllers();
const cardControllers = new CardControllers();

//user
router.get('api/user/login', userControllers.loginAUser);
router.post('api/user/signup', userControllers.createAUser);
router.put('api/user/update', userControllers.updateAUser);
router.del('api/user/delete', userControllers.deleteAUser);

//product
router.get('api/product/find', productControllers.findAProduct);
router.post('api/product/add', productControllers.createAProduct);
router.put('api/product/update', productControllers.updateAProduct);
router.del('api/product/delete', productControllers.deleteAProduuct);

//card
router.get('api/card/find', cardControllers.findACard);
router.post('api/card/add', cardControllers.createACard);
router.put('api/card/update', cardControllers.updateACard);
router.del('api/card/delete', cardControllers.deleteACard);