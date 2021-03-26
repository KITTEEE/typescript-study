// TypeScript不允许同时装饰一个成员的get和set访问器
// 因为在装饰器应用于一个属性描述符时，它联合了get和set访问器，而不是分开声明的

function accessorDecorator(target:any,key:string,descriptor:PropertyDescriptor) {
    // console.log(target,key,descriptor);
    descriptor.writable = false;
}


class Test {
    private _name:string
    constructor(name:string) {
        this._name = name;
    }

    @accessorDecorator
    get name() {
        return this._name;
    }

    set name(name:string) {
        this._name = name;
    }
}

const test = new Test('kite');
test.name = 'kite yiu';
console.log(test.name);
