// 1. 类中的访问类型有 public private protected 三种类型

// 1.1 public 属性允许在类的内外被调用，属性没有指定访问类型时默认为 public 
class Person1 {
    // name: string;
    // sayHi() {
    //     console.log(this.name);
    // }
    public name:string;
    public sayHi() {
        console.log(this.name);
    }
}

const person1 = new Person1();
person1.name = 'kite';

// 1.2 private 只允许属性在类内被调用
class Person2 {
    private name:string
    sayHi() {
        this.name = 'kite';
        console.log(this.name);
    }
}
const person2 = new Person2();
// console.log(person2.name);
// person2.name = 'kite'; // private 的属性不能在类外被访问
person2.sayHi(); // => 'kite

// 1.3 protected 属性只能在类内或子类内部使用
class Person3 {
    public name:string = 'kite'
    protected sayHi() {
        console.log(this.name);
    }
}
class Teacher1 extends Person3 {
    sayBye() {
        this.sayHi(); // 可以在子类内部被访问
    }
}
const person3 = new Person3();
// person3.sayHi(); // 不能再类外访问
const teacher1 = new Teacher1();
teacher1.name = 'yiu';
teacher1.sayBye(); // => yiu

// 2. 类的构造器
// 2.1 构造器的写法
class Person4 {
    // 传统写法
    // public name:string
    // constructor(name:string) {
    //     this.name = name;
    // }
    // 简化写法
    constructor(public name:string) {
        this.name = name;
    }
}
// 创建一个对象的时候，类的构造器会被自动执行
const person4 = new Person4('kite yiu');
console.log(person4.name);
// 2.2 子类如果需要构造器，则构造器里必须显式调用 super 来继承父类的属性
class Teacher2 extends Person4{
    constructor(public age:number) {
        // super(); 
        super('kite yiu');
        this.age = age;
    }
} 
const teacher2 = new Teacher2(18);
console.log(teacher2.name,teacher2.age);

export {}