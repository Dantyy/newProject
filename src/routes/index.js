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
router.get(
    '/api/product/find/:id', );
router.post(
    '/api/product/add/:id', );
router.put(
    '/api/product/update/:id', );
router.del(
    '/api/product/delete/:id', );

//card
router.get(
    '/api/card/find/:userId',);
router.post(
    '/api/card/add/:userId',);
router.put(
    '/api/card/update/:userId',);
router.del(
    '/api/card/delete/:userId',);

module.exports = router;