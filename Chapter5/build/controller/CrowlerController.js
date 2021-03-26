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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrowlerController = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
require("reflect-metadata");
var decorators_1 = require("../decorators");
var util_1 = require("../utils/util");
var crowler_1 = __importDefault(require("../utils/crowler"));
var kiteAnalyzer_1 = __importDefault(require("../utils/kiteAnalyzer"));
var checkLogin = function (req, res, next) {
    console.log('checklogin middleware');
    var isLogin = !!(req.session ? req.session.login : undefined);
    if (isLogin) {
        next();
    }
    else {
        res.json(util_1.getResponseData(null, '请先登录'));
    }
};
var test = function (req, res, next) {
    console.log('test middleware');
    next();
};
var CrowlerController = /** @class */ (function () {
    function CrowlerController() {
    }
    CrowlerController.prototype.getData = function (req, res) {
        var url = "http://localhost:5500/Chapter5/src/index.html";
        var analyzer = kiteAnalyzer_1.default.getInstance();
        new crowler_1.default(url, analyzer);
        res.json(util_1.getResponseData(true));
    };
    CrowlerController.prototype.showData = function (req, res) {
        try {
            var position = path_1.default.join(__dirname, '../../data/course.json');
            var result = fs_1.default.readFileSync(position, 'utf-8');
            res.json(util_1.getResponseData(JSON.parse(result)));
        }
        catch (error) {
            res.send('尚未抓取内容');
            res.json(util_1.getResponseData(false, '数据不存在'));
        }
    };
    __decorate([
        decorators_1.get('/getData'),
        decorators_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrowlerController.prototype, "getData", null);
    __decorate([
        decorators_1.get('/showData'),
        decorators_1.use(checkLogin),
        decorators_1.use(test),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrowlerController.prototype, "showData", null);
    CrowlerController = __decorate([
        decorators_1.controller('/')
    ], CrowlerController);
    return CrowlerController;
}());
exports.CrowlerController = CrowlerController;
