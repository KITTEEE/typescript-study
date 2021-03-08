var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. 抽象类/抽象方法的的写法
// 1.1 给类添加 abstract 关键字可以将该类指定为抽象类
// 1.2 给抽象类中的方法添加 abstract 关键字可以指定该方法为抽象方法
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    return Person;
}());
// 2. 抽象类/抽象方法的特点
// 2.1 抽象类只能被继承，不能被实例化;
// 2.2 抽象方法只能出现在抽象类中，且抽象方法无需写具体实现
// 2.3 父类如果有抽象方法，子类必须实现
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.sayHi = function () {
        console.log('hi' + this.name);
    };
    return Student;
}(Person));
var student = new Student('kite');
student.sayHi();
