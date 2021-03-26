import 'reflect-metadata';
import {Request,Response} from 'express';
import {get,post,controller} from '../decorators';
import {getResponseData} from '../utils/util';


@controller('/')
export class LoginController {

    static isLogin(req:Request):boolean {
        return !!(req.session ? req.session.login : undefined);
    }

    @post('/login')
    login(req:Request,res:Response) {
        const isLogin = LoginController.isLogin(req);
        const {password} = req.body;
        if(isLogin) {
            res.json(getResponseData(false,'已登陆过'));
        }else {
            if(password === '123' && req.session) {
                req.session.login = true;
                res.json(getResponseData(true));
            }else {
                res.json(getResponseData(false,'登录失败'));
            }
        }
    }


    @get('/logout')
    logout(req:Request,res:Response) {
        if(req.session) {
            req.session.login = undefined;
            // res.redirect('/'); 
        }
        res.json(getResponseData(true));
    }


    @get('/')
    home(req:Request,res:Response) {
        const isLogin = LoginController.isLogin(req);
        if(isLogin) {
            res.send(`
                <html>
                    <body>
                        <a href="/getData">爬取数据</a>
                        <a href="/showData">展示数据</a>
                        <a href="/logout">退出</a>
                    </body>
                </html>
            `)
        }else {
            res.send(`
                <html>
                    <body>
                        <form method="post" action="/login">
                            <input type="password" name="password" />
                            <button type="submit">登录</button>
                        </form>
                    </body>
                </html>
            `);
        }
    }
}