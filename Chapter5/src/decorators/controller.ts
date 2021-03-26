import router from '../router';
import {RequestHandler} from 'express';
import {Method} from './request';

import 'reflect-metadata';

export function controller(root:string) {
    return function (target:new (...args:any[]) => any) {
        for(let key in target.prototype) {
            const path:string = Reflect.getMetadata('path',target.prototype,key);
            const method:Method = Reflect.getMetadata('method',target.prototype,key);
            const middlewares:RequestHandler[] = Reflect.getMetadata('middlewares',target.prototype,key);
            const handler:RequestHandler = target.prototype[key];
            if(path && method) {
                const fullPath = root === '/' ? path : `${root}${path}`;
                if(middlewares && middlewares.length) {
                    router[method](fullPath,...middlewares,handler);
                }else {
                    router[method](fullPath,handler);
                }
            }
        }
    }
}
