import express,{Request,Response,NextFunction} from 'express';
// import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controller/LoginController';
import './controller/CrowlerController';

import router from './router';

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieSession({
    name: 'session',
    keys: ['kite yiu'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))

app.use(router);

app.listen(7001,() => {
    console.log('express server listening');
})