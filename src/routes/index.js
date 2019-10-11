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
router.get('api/product/find/:userId', productControllers.getUserId, productControllers.findAProduct);
router.post('api/product/add/:userId', productControllers.getUserId, productControllers.createAProduct);
router.put('api/product/update/:userId', productControllers.getUserId, productControllers.updateAProduct);
router.del('api/product/delete/:userId', productControllers.getUserId, productControllers.deleteAProduct);

//card
router.get('api/card/find/:getUserId', cardControllers.getUserId, cardControllers.findACard);
router.post('api/card/add/:getUserId', cardControllers.getUserId, cardControllers.createACard);
router.put('api/card/update/:getUserId', cardControllers.getUserId, cardControllers.updateACard);
router.del('api/card/delete/:getUserId', cardControllers.getUserId, cardControllers.deleteACard);

module.exports = router;