
// function nameDecorator(target:any,key:string):any {
//     // console.log(target,key);
//     const descriptor:PropertyDescriptor = {
//         writable:false
//     }
//     return descriptor
// }


function nameDecorator(target:any,key:string):any {
    target[key] = 'yiu'
}


class Test {
    @nameDecorator
    name:string = 'kite'
}

const test = new Test();
console.log((test as any).__proto__.name);
