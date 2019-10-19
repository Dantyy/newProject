const Koa = require('koa');
const bodyParser = require('koa-bodyParser');
const router = require('./routes');
const mongoose = require('mongoose');
const { port, mongoConfig } = require('./config');

mongoose.connect(`mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`, {useNewUrlParser: true, useUnifiedTopology: true});
const app = new Koa();

app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(port, () => console.log(`listen on port : ${port}`));