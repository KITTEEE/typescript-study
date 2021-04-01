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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function testDecorator() {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = 'yiu';
                return _this;
            }
            class_1.prototype.getName = function () {
                return this.name;
            };
            return class_1;
        }(constructor));
    };
}
var Test = /** @class */ (function () {
    function Test(name) {
        console.log(1);
        this.name = name;
        console.log(2);
    }
    Test = __decorate([
        testDecorator()
    ], Test);
    return Test;
}());
var test = new Test('kite');
console.log(Test.prototype);
console.log(test);
console.log(test.getName());
// function testDecorator() {
//     // 这里的 T 继承了构造函数，因此 T 是一个构造函数的类型
//     return function<T extends new (...args:any[]) => {}>(constructor:T) {
//         return class extends constructor {
//             name = 'yiu';
//             getName() {
//                 return this.name;
//             }
//         }
//     }    
// }
// const Test = testDecorator()(class {
//     name:string
//     constructor(name:string) {
//         this.name = name;
//     }
// })
// const test = new Test('kite');
// console.log(test);
// console.log(test.getName());
