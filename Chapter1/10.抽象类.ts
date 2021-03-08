// 1. 抽象类/抽象方法的的写法
// 1.1 给类添加 abstract 关键字可以将该类指定为抽象类
// 1.2 给抽象类中的方法添加 abstract 关键字可以指定该方法为抽象方法
abstract class Person {
    constructor(public name:string) {
        this.name = name
    }
    abstract sayHi()
}
// 2. 抽象类/抽象方法的特点
// 2.1 抽象类只能被继承，不能被实例化;
// 2.2 抽象方法只能出现在抽象类中，且抽象方法无需写具体实现
// 2.3 父类如果有抽象方法，子类必须实现

// const person = new Person(); // 无法创建抽象类实例
class Student extends Person{
    sayHi() {
        console.log('hi ' + this.name);
    }
}
const student = new Student('kite');
student.sayHi();

