import {Router,Request,Response} from 'express';

import Crowler from './crowler';
import kiteAnalyzer from './kiteAnalyzer';
const router = Router();

// 问题 1： express 库的类型定义文件 .d.ts 类型描述不准确
// 解决：通过类型扩展来解决
interface RequestWithBody extends Request {
    body : {
        // password:string | undefined
        [key:string] :string | undefined
    }
}

router.get('/',(req:Request,res:Response) => {
    res.send(`
        <html>
            <body>
                <form method="post" action="/getData">
                    <input type="password" name="password" />
                    <button type="submit">提交</button>
                </form>
            </body>
        </html>
    `);
})

router.post('/getData',(req:RequestWithBody,res:Response) => {
    const {password} = req.body;
    if(password === '123') {
        const url = `http://localhost:5500/Chapter5/src/index.html`;
        const analyzer = kiteAnalyzer.getInstance();
        new Crowler(url,analyzer);
        res.send('getData success');
    }else {
        res.send(`${req.teacherName} password error`)
    }
    
})

export default router;