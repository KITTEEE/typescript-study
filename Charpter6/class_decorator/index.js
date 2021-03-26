// function testDecorator<T extends new (...args:any[]) => {}>(constructor:T) {
//     return class extends constructor {
//         name = 'yiu';
//         getName() {
//             return this.name;
//         }
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @testDecorator
// class Test {
//     name:string
//     constructor(name:string) {
//         console.log(1);
//         this.name = name
//         console.log(2);
//     }
// }
// const test = new Test('kite');
// console.log(test);
// console.log(test.getName());
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
var Test = testDecorator()(/** @class */ (function () {
    function class_2(name) {
        this.name = name;
    }
    return class_2;
}()));
var test = new Test('kite');
console.log(test);
console.log(test.getName());
