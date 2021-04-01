var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function getNameDecorator() {
    return function (target, key, desc) {
        var descr = { value: 123 };
        return descr;
    };
}
var TestD = /** @class */ (function () {
    function TestD(name) {
        this.name = name;
        this.name = name;
    }
    TestD.prototype.getName = function () {
        return this.name;
    };
    __decorate([
        getNameDecorator()
    ], TestD.prototype, "getName", null);
    return TestD;
}());
var testd = new TestD('kite');
console.log(testd.getName);
