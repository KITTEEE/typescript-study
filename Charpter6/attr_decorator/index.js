// function nameDecorator(target:any,key:string):any {
//     // console.log(target,key);
//     const descriptor:PropertyDescriptor = {
//         writable:false
//     }
//     return descriptor
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function nameDecorator(target, key) {
    console.log(2);
    target[key] = 'yiu';
}
var Test = /** @class */ (function () {
    function Test(nm) {
        this.age = 12;
        console.log(1);
        this.nm = nm;
    }
    __decorate([
        nameDecorator
    ], Test.prototype, "nm", void 0);
    return Test;
}());
var test = new Test('kite');
console.log(test.nm);
console.log(test.age);
console.log(Test.prototype.nm);
console.log(Test.prototype.age);
console.log(test.__proto__.nm);
