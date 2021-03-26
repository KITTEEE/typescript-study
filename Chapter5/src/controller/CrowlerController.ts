import fs from 'fs';
import path from 'path';

import {Request,Response,NextFunction} from 'express';
import 'reflect-metadata';
import {get,use,controller} from '../decorators';
import {getResponseData} from '../utils/util';
import Crowler from '../utils/crowler';
import Analyzer from '../utils/kiteAnalyzer';


const checkLogin = (req:Request,res:Response,next:NextFunction) => {
    console.log('checklogin middleware');
    const isLogin = !!(req.session ? req.session.login : undefined);
    if(isLogin) {
        next();
    }else {
        res.json(getResponseData(null,'请先登录'));
    }
}

const test = (req:Request,res:Response,next:NextFunction) => {
    console.log('test middleware');
    next();
}
@controller('/')
export class CrowlerController {
    @get('/getData')
    @use(checkLogin)
    getData(req:Request,res:Response) {
        const url = `http://localhost:5500/Chapter5/src/index.html`;
        const analyzer = Analyzer.getInstance();
        new Crowler(url,analyzer);
        res.json(getResponseData(true));
    }

    @get('/showData')
    @use(checkLogin)
    @use(test)
    showData(req:Request,res:Response) {
        try {
            const position = path.join(__dirname,'../../data/course.json');
            const result = fs.readFileSync(position,'utf-8');
            res.json(getResponseData(JSON.parse(result)));
        } catch (error) {
            res.send('尚未抓取内容')
            res.json(getResponseData(false,'数据不存在'));
        }
    }
}