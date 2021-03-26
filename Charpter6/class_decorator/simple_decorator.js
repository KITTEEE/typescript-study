"use strict";
// 装饰器是一个函数
// 装饰器通过 @ 符号来使用
// 多个装饰器的执行顺序为从下往上或从左到右
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// 类的装饰器是用来修饰类的
// 类的装饰器接受的参数是类的构造函数
function testDecorator(constructor) {
    console.log('decorator');
    constructor.prototype.getName = function () {
        console.log('hello kite');
    };
}
// function testDecorator1(constructor:any) {
//     console.log('decorator1');
// }
function testDecorator2(flag) {
    if (flag) {
        return function (constructor) {
            console.log('decorator2');
            constructor.prototype.getName = function () {
                console.log('hello kite');
            };
        };
    }
    else {
        return function (constructor) { };
    }
}
var Test = /** @class */ (function () {
    function Test() {
    }
    Test = __decorate([
        testDecorator
        // @testDecorator1
        ,
        testDecorator2(true)
    ], Test);
    return Test;
}());
var test = new Test();
test.getName();
