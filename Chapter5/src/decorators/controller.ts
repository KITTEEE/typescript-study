import router from '../router';
import {RequestHandler} from 'express';
import {Method} from './request';

import 'reflect-metadata';

export function controller(root:string) {
    return function (target:new (...args:any[]) => any) {
        for(let key in target.prototype) {
            const path:string = Reflect.getMetadata('path',target.prototype,key);
            const method:Method = Reflect.getMetadata('method',target.prototype,key);
            const middleware = Reflect.getMetadata('middleware',target.prototype,key);
            const handler:RequestHandler = target.prototype[key];
            if(path && method) {
                const fullPath = root === '/' ? path : `${root}${path}`;
                if(middleware) {
                    router[method](fullPath,middleware,handler);
                }else {
                    router[method](fullPath,handler);
                }
            }
        }
    }
}
