"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = exports.Method = void 0;
require("reflect-metadata");
var Method;
(function (Method) {
    Method["get"] = "get";
    Method["post"] = "post";
})(Method = exports.Method || (exports.Method = {}));
function getRequestDecorator(type) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', type, target, key);
        };
    };
}
exports.get = getRequestDecorator(Method.get);
exports.post = getRequestDecorator(Method.post);
