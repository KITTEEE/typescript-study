// 普通方法 target 对应的是类的 prototype
// 静态方法 target 对应的是类的构造函数

function getNameDecorator(target:any,key:string,descriptor:PropertyDescriptor) {
    // console.log(target,key,descriptor);
    // descriptor.writable = false;
    // console.log(descriptor);
    descriptor.value = function() {
        return '123';
    }
    console.log(descriptor);
}

class Test {
    name:string
    constructor(name:string) {
        this.name = name;
    }

    @getNameDecorator
    getName() {
        return this.name;
    }
}

const test = new Test('kite');
// test.getName = () => {
//     return '456'
// }
console.log(test.getName());
