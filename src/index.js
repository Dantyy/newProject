const Koa = require('koa');
const bodyParser = require('koa-bodyParser');
const router = require('./routes/index');
const mongoose = require('mongoose');
const { mongoConfig, port } = require('./config');

mongoose.connect(`mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`, {useNewUrlParser: true});
const app = new Koa();

app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

app.listenerCount(port, () => console.log(`listen on port : ${port}`));
