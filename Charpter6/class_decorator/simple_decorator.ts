// 装饰器是一个函数
// 装饰器通过 @ 符号来使用
// 多个装饰器的执行顺序为从下往上或从左到右

// 类的装饰器是用来修饰类的
// 类的装饰器接受的参数是类的构造函数


function testDecorator(constructor:any) {
    console.log('decorator');
    constructor.prototype.getName = function() {
        console.log('hello kite');
    }
}

// function testDecorator1(constructor:any) {
//     console.log('decorator1');
// }

function testDecorator2(flag:boolean) {
    if(flag) {
        return function (constructor:any) {
            console.log('decorator2');
            constructor.prototype.getName = function() {
                console.log('hello kite');
            }
        }
    }else {
        return function(constructor:any){}
    }

}

@testDecorator
// @testDecorator1
@testDecorator2(true)
class Test {}

const test = new Test();
(test as any).getName();

export {}