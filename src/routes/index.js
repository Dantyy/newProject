const Router = require('koa-router');
const router = new Router();

const UserControllers = require('../controllers/user-controllers');
const ProductControllers = require('../controllers/product-controllers');
const CardControllers = require('../controllers/card-controllers');
const userControllers = new UserControllers();
const productControllers = new ProductControllers();
const cardControllers = new CardControllers();

const CartController = require('../controllers/cart-controller');

// 举例：
// 用户会将产品放进自己的购物车，所以应该有一个放进购物车接口
// 步骤：
// 验证用户是否你的用户（在用户列表中）
// 将产品id与用户id关联并创建一条记录在购物车表中
router.post('/api/cart/create', CartController.createCartProduct);

//user
router.get('/api/user/login/', userControllers.loginUser);
router.post('/api/user/signup/', userControllers.createUser);
router.put('/api/user/update/', userControllers.updateUser);
router.del('/api/user/delete/', userControllers.deleteUser);

//product
router.get(
    '/api/product/find/:id', 
    (ctx) => {
        productControllers.getUserId
        productControllers.findProduct
    });
router.post(
    '/api/product/add/:id', 
    (ctx)=>{
        productControllers.getUserId
        productControllers.createProduct
    });
router.put(
    '/api/product/update/:id', 
    (ctx)=>{
        productControllers.getUserId
        productControllers.updateProduct
    });
router.del(
    '/api/product/delete/:id', 
    (ctx)=>{
        productControllers.getUserId
        productControllers.deleteProduct
    });

//card
router.get(
    '/api/card/find/:userId',
    (ctx)=>{
        cardControllers.getUserId
        cardControllers.findCard
    });
router.post(
    '/api/card/add/:userId',
    (ctx)=>{
        cardControllers.getUserId
        cardControllers.createCard
    });
router.put(
    '/api/card/update/:userId',
    (ctx)=>{
        cardControllers.getUserId
        cardControllers.updateCard
    });
router.del(
    '/api/card/delete/:userId',
    (ctx)=>{
        cardControllers.getUserId
        cardControllers.deleteCard
    });

module.exports = router;