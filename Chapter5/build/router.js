"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_1 = require("express");
var crowler_1 = __importDefault(require("./utils/crowler"));
var kiteAnalyzer_1 = __importDefault(require("./utils/kiteAnalyzer"));
var util_1 = require("./utils/util");
var router = express_1.Router();
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        next();
    }
    else {
        res.json(util_1.getResponseData(null, '请先登录'));
    }
};
router.get('/', function (req, res) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.send("\n            <html>\n                <body>\n                    <a href=\"/getData\">\u722C\u53D6\u6570\u636E</a>\n                    <a href=\"/showData\">\u5C55\u793A\u6570\u636E</a>\n                    <a href=\"/logout\">\u9000\u51FA</a>\n                </body>\n            </html>\n        ");
    }
    else {
        res.send("\n            <html>\n                <body>\n                    <form method=\"post\" action=\"/login\">\n                        <input type=\"password\" name=\"password\" />\n                        <button type=\"submit\">\u767B\u5F55</button>\n                    </form>\n                </body>\n            </html>\n        ");
    }
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.login = undefined;
        // res.redirect('/');
    }
    res.json(util_1.getResponseData(true));
});
router.post('/login', function (req, res) {
    var isLogin = req.session ? req.session.login : undefined;
    var password = req.body.password;
    if (isLogin) {
        // res.send('已登陆过')
        res.json(util_1.getResponseData(false, '已登陆过'));
    }
    else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.json(util_1.getResponseData(true));
            // res.redirect('/');
        }
        else {
            res.json(util_1.getResponseData(false, '登录失败'));
        }
    }
});
router.get('/getData', checkLogin, function (req, res) {
    var url = "http://localhost:5500/Chapter5/src/index.html";
    var analyzer = kiteAnalyzer_1.default.getInstance();
    new crowler_1.default(url, analyzer);
    // res.send('getData success');
    res.json(util_1.getResponseData(true));
});
router.get('/showData', checkLogin, function (req, res) {
    try {
        var position = path_1.default.join(__dirname, '../data/course.json');
        var result = fs_1.default.readFileSync(position, 'utf-8');
        // res.json(JSON.parse(result));
        res.json(util_1.getResponseData(JSON.parse(result)));
    }
    catch (error) {
        res.send('尚未抓取内容');
        res.json(util_1.getResponseData(false, '数据不存在'));
    }
});
exports.default = router;
