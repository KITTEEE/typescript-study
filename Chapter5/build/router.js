"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crowler_1 = __importDefault(require("./crowler"));
var kiteAnalyzer_1 = __importDefault(require("./kiteAnalyzer"));
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send("\n        <html>\n            <body>\n                <form method=\"post\" action=\"/getData\">\n                    <input type=\"password\" name=\"password\" />\n                    <button type=\"submit\">\u63D0\u4EA4</button>\n                </form>\n            </body>\n        </html>\n    ");
});
router.post('/getData', function (req, res) {
    var password = req.body.password;
    if (password === '123') {
        var url = "http://localhost:5500/Chapter5/src/index.html";
        var analyzer = kiteAnalyzer_1.default.getInstance();
        new crowler_1.default(url, analyzer);
        res.send('getData success');
    }
    else {
        res.send(req.teacherName + " password error");
    }
});
exports.default = router;
