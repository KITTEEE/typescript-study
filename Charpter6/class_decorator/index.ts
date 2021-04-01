function testDecorator() {
    return function<T extends new (...args:any[]) => {}>(constructor:T) {
        return class extends constructor {
            name = 'yiu';
            getName() {
                return this.name;
            }
        }
    } 
}

@testDecorator()
class Test{
    name:string
    constructor(name:string) {
        console.log(1);
        this.name = name
        console.log(2);
    }
}

const test = new Test('kite');
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
