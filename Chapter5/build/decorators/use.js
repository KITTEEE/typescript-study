"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
function use(middleware) {
    return function (target, key) {
        var mdw = Reflect.getMetadata('middlewares', target, key) || [];
        mdw.push(middleware);
        Reflect.defineMetadata('middlewares', mdw, target, key);
    };
}
exports.use = use;
