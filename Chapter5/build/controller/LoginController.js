"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
require("reflect-metadata");
var decorators_1 = require("../decorators");
var util_1 = require("../utils/util");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController_1 = LoginController;
    LoginController.isLogin = function (req) {
        return !!(req.session ? req.session.login : undefined);
    };
    LoginController.prototype.isLogin = function (req, res) {
        var isLogin = LoginController_1.isLogin(req);
        res.json(util_1.getResponseData(isLogin));
    };
    LoginController.prototype.login = function (req, res) {
        console.log(req.body);
        var isLogin = LoginController_1.isLogin(req);
        var password = req.body.password;
        if (isLogin) {
            res.json(util_1.getResponseData(true));
        }
        else {
            if (password === '123' && req.session) {
                req.session.login = true;
                res.json(util_1.getResponseData(true));
            }
            else {
                res.json(util_1.getResponseData(false, '登录失败'));
            }
        }
    };
    LoginController.prototype.logout = function (req, res) {
        if (req.session) {
            req.session.login = undefined;
            // res.redirect('/'); 
        }
        res.json(util_1.getResponseData(true));
    };
    LoginController.prototype.home = function (req, res) {
        var isLogin = LoginController_1.isLogin(req);
        if (isLogin) {
            res.send("\n                <html>\n                    <body>\n                        <a href=\"/getData\">\u722C\u53D6\u6570\u636E</a>\n                        <a href=\"/showData\">\u5C55\u793A\u6570\u636E</a>\n                        <a href=\"/logout\">\u9000\u51FA</a>\n                    </body>\n                </html>\n            ");
        }
        else {
            res.send("\n                <html>\n                    <body>\n                        <form method=\"post\" action=\"/api/login\">\n                            <input type=\"password\" name=\"password\" />\n                            <button type=\"submit\">\u767B\u5F55</button>\n                        </form>\n                    </body>\n                </html>\n            ");
        }
    };
    var LoginController_1;
    __decorate([
        decorators_1.get('/islogin'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "isLogin", null);
    __decorate([
        decorators_1.post('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "login", null);
    __decorate([
        decorators_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "logout", null);
    __decorate([
        decorators_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "home", null);
    LoginController = LoginController_1 = __decorate([
        decorators_1.controller('/api')
    ], LoginController);
    return LoginController;
}());
exports.LoginController = LoginController;
