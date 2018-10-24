'use strict'

const Koa = require('koa');
const Router = require('koa-router');
const logger = require('./../src/logger.js').getLogger();

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT



router.get('/', (ctx, next) => {
    ctx.body = 'Default page';
});

router.get('/hello', (ctx, next) => {
    ctx.body = 'Hello Node.js!';
});

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(PORT);
logger.info(`Listening on localhost:${PORT}`)