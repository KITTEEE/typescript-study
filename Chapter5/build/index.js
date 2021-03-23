"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    req.teacherName = 'kite';
    next();
});
app.use(router_1.default);
app.listen(7001, function () {
    console.log('express server listening');
});
