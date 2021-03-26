var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var userInfo = undefined;
function catchError(msg) {
    return function (target, key, descriptor) {
        var fn = descriptor.value;
        descriptor.value = function () {
            try {
                fn();
            }
            catch (error) {
                console.log(msg);
            }
        };
    };
}
var Testtest = /** @class */ (function () {
    function Testtest() {
    }
    Testtest.prototype.getName = function () {
        return userInfo.name;
    };
    Testtest.prototype.getAge = function () {
        return userInfo.age;
    };
    __decorate([
        catchError('userInfo.name 存在问题')
    ], Testtest.prototype, "getName", null);
    __decorate([
        catchError('userInfo.age 存在问题')
    ], Testtest.prototype, "getAge", null);
    return Testtest;
}());
var obj = new Testtest();
obj.getName();
obj.getAge();
