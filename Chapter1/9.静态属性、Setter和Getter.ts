// 1. getter 和 setter
// 1.1 getter 和 setter 的写法
// 一般私有属性的属性名会在前面加上下划线，然后 getter setter 方法使用真正的属性名
class Person1 {
    constructor(private _name:string) {}
    get name():string {
        return this._name + ' yiu';
    }
    set name(name:string) {
        this._name = name.split(' ')[0];
    }
}
const person1 = new Person1('kite');
person1.name = 'kite yiu';
console.log(person1.name);
class Person2 {
    constructor(private name:string) {}
    get getName() {
        return this.name + ' yiu';
    }
    set setName(name:string) {
        this.name = name.split(' ')[0];
    }
}
const person2 = new Person1('kite');
person2.name = 'kite yiu';
console.log(person2.name);
// 1.2 getter setter 的作用
// getter 和 setter用于私有属性在类外被访问时对私有属性的保护，起到安全作用

// 2. 静态属性
// 2.1 静态属性的写法：在访问类型后加上 static 表示该属性为静态属性
// 2.2 静态属性是直接挂载在类上的，而不是类的实例上，静态属性直接通过类进行访问
// 2.3 静态方法里是无法访问到实例的属性的，
class Person3 {
    static sayHi() {
        console.log('hi');
        // console.log(this.name);
    }
}
const person3 = new Person3();
// person3.sayHi(); // Person3的实例访问不到静态属性
Person3.sayHi();

// 3. 写一个单例模式
class Demo {
    private static instance:any
    // 将构造器设为私有属性，防止通过 new Demo 调用
    private constructor(public name:string) {
        this.name = name;
    }
    // 通过 getInstance 方法获取实例
    static getInstance() {
        if(!this.instance) {
            this.instance =  new Demo('kite');
            return this.instance;
        }
        return this.instance
    }
}
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();

export {}