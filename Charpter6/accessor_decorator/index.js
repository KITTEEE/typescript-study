// TypeScript不允许同时装饰一个成员的get和set访问器
// 因为在装饰器应用于一个属性描述符时，它联合了get和set访问器，而不是分开声明的
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function accessorDecorator(target, key, descriptor) {
    // console.log(target,key,descriptor);
    descriptor.writable = false;
}
var Test = /** @class */ (function () {
    function Test(name) {
        this._name = name;
    }
    Object.defineProperty(Test.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        accessorDecorator
    ], Test.prototype, "name", null);
    return Test;
}());
var test = new Test('kite');
test.name = 'kite yiu';
console.log(test.name);
