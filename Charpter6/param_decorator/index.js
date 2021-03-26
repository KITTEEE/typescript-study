var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function paramDecorator(target, key, paramIndex) {
    console.log(target, key, paramIndex); // 原型，方法名，参数位置索引
}
var Test1 = /** @class */ (function () {
    function Test1() {
    }
    Test1.prototype.getInfo = function (name, age) {
        console.log(name, age);
    };
    __decorate([
        __param(1, paramDecorator)
    ], Test1.prototype, "getInfo", null);
    return Test1;
}());
var test1 = new Test1();
test1.getInfo('kite', 20);
