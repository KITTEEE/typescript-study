// 普通方法 target 对应的是类的 prototype
// 静态方法 target 对应的是类的构造函数
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function getNameDecorator(target, key, descriptor) {
    // console.log(target,key,descriptor);
    // descriptor.writable = false;
    // console.log(descriptor);
    descriptor.value = function () {
        return '123';
    };
    console.log(descriptor);
}
var Test = /** @class */ (function () {
    function Test(name) {
        this.name = name;
    }
    Test.prototype.getName = function () {
        return this.name;
    };
    __decorate([
        getNameDecorator
    ], Test.prototype, "getName", null);
    return Test;
}());
var test = new Test('kite');
// test.getName = () => {
//     return '456'
// }
console.log(test.getName());
