'use strict'


const logger = require('./../src/logger.js').getLogger(process.env.LOG_LEVEL || 'info')
logger.info('web/index.js - Starting...\n')

const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    //ctx.router
    logger.debug('Servind default page.');
    ctx.body = 'Default page';
});

router.get('/hello', (ctx, next) => {
    //ctx.router
    logger.debug('Serving /hello end point!');
    ctx.body = 'Hello Node.js!';
});


const PORT = process.env.PORT

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(PORT);
logger.info(`Listening on localhost:${PORT}`)