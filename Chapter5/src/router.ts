import {Router} from 'express';

export default Router();
// import fs from 'fs';
// import path from 'path';
// import {Router,Request,Response, NextFunction} from 'express';
// import Crowler from './utils/crowler';
// import Analyzer from './utils/kiteAnalyzer';
// import {getResponseData} from './utils/util';

// const router = Router();

// const checkLogin = (req:Request,res:Response,next:NextFunction) => {
//     const isLogin = req.session ? req.session.login : undefined;
//     if(isLogin) {
//         next();
//     }else {
//         res.json(getResponseData(null,'请先登录'));
//     }
// }

// // 问题 1： express 库的类型定义文件 .d.ts 类型描述不准确
// // 解决：通过类型扩展来解决
// interface RequestWithBody extends Request {
//     body : {
//         // password:string | undefined
//         [key:string] :string | undefined
//     }
// }


// router.get('/',(req:Request,res:Response) => {
//     const isLogin = req.session ? req.session.login : undefined;
//     if(isLogin) {
//         res.send(`
//             <html>
//                 <body>
//                     <a href="/getData">爬取数据</a>
//                     <a href="/showData">展示数据</a>
//                     <a href="/logout">退出</a>
//                 </body>
//             </html>
//         `)
//     }else {
//         res.send(`
//             <html>
//                 <body>
//                     <form method="post" action="/login">
//                         <input type="password" name="password" />
//                         <button type="submit">登录</button>
//                     </form>
//                 </body>
//             </html>
//         `);
//     }
// })

// router.get('/logout',(req:RequestWithBody,res:Response) => {
//     if(req.session) {
//         req.session.login = undefined;
//         // res.redirect('/');
//     }
//     res.json(getResponseData(true));
// })

// router.post('/login',(req:RequestWithBody,res:Response) => {
//     const isLogin = req.session ? req.session.login : undefined;
//     const {password} = req.body;
//     if(isLogin) {
//         // res.send('已登陆过')
//         res.json(getResponseData(false,'已登陆过'));
//     }else {
//         if(password === '123' && req.session) {
//             req.session.login = true;
//             res.json(getResponseData(true));
//             // res.redirect('/');
//         }else {
//             res.json(getResponseData(false,'登录失败'));
//         }
//     }
// })

// router.get('/getData',checkLogin,(req:RequestWithBody,res:Response) => {
//     const url = `http://localhost:5500/Chapter5/src/index.html`;
//     const analyzer = Analyzer.getInstance();
//     new Crowler(url,analyzer);
//     // res.send('getData success');
//     res.json(getResponseData(true));
// })

// router.get('/showData',checkLogin,(req:RequestWithBody,res:Response) => {
//     try {
//         const position = path.join(__dirname,'../data/course.json');
//         const result = fs.readFileSync(position,'utf-8');
//         // res.json(JSON.parse(result));
//         res.json(getResponseData(JSON.parse(result)));
//     } catch (error) {
//         res.send('尚未抓取内容')
//         res.json(getResponseData(false,'数据不存在'));
//     }
// })

// export default router;