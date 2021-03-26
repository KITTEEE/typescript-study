import {RequestHandler} from 'express';
import 'reflect-metadata';

export function use(middleware:RequestHandler) {
    return function(target:any,key:string) {
        const mdw = Reflect.getMetadata('middlewares',target,key) || [];
        mdw.push(middleware)
        Reflect.defineMetadata('middlewares',mdw,target,key);
    }
}
