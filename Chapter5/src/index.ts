import express,{Request,Response,NextFunction} from 'express';

import router from './router';

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use((req:Request,res:Response,next:NextFunction) => {
    req.teacherName = 'kite';
    next();
})
app.use(router);

app.listen(7001,() => {
    console.log('express server listening');
})