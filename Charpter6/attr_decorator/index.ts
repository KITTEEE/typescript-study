
// function nameDecorator(target:any,key:string):any {
//     // console.log(target,key);
//     const descriptor:PropertyDescriptor = {
//         writable:false
//     }
//     return descriptor
// }


function nameDecorator(target:any,key:string):any {
    console.log(2);    
    target[key] = 'yiu'
}


class Test {
    @nameDecorator
    nm:string

    age:number = 12
    constructor(nm:string) {
        console.log(1);
        this.nm = nm
    }
}

const test = new Test('kite');
console.log(test.nm);
console.log(test.age);
console.log(Test.prototype.nm);
console.log(Test.prototype.age);
console.log((test as any).__proto__.nm);
