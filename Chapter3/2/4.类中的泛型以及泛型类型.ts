// 1. 假如有一个这样的数据管理类，其中数据 data 是一个字符串数组
// class DataManager {
//     constructor(private data:string[]) {}
//     getItem(index:number):string {
//         return this.data[index];
//     }
// }

// const data = new DataManager(['1']);
// data.getItem(0);

// 2. 如果我们想要 data 数组可以有 string 类型也可以有 number 类型，则我们可以使用联合类型：
// class DataManager {
//     constructor(private data:string[] | number[]) {}
//     getItem(index:number):string | number {
//         return this.data[index];
//     }
// }

// 3. 但是如果我们以后需要 data 数组可以包容更多类型，我们就可以使用泛型
// class DataManager<T> {
//     constructor(private data:T[]) {}
//     getItem(index:number):T {
//         return this.data[index];
//     }
// }
// // const data = new DataManager([1])
// const data = new DataManager<string>(['1'])

// interface Item {
//     name:string
// }
// class DataManager<T extends Item> {
//     constructor(private data:T[]) {}
//     getItem(index:number):T {
//         return this.data[index]
//     }
//     getItemName(index:number):string {
//         return this.data[index].name
//     }
// }
// const data = new DataManager([{name:'kite'}]);

// 4. 如果我们只希望data数组是字符串或数字类型
interface Test {
    name:string
}
class DataManager<T extends string | number> {
    constructor(private data:T[]) {}
    getItem(index:number):T {
        return this.data[index]
    }
}
// let data = new DataManager<Test>([]); // 报错
// let data = new DataManager<string>([]);
// let data = new DataManager<number>([]);


// 使用泛型作为类型注解
const func:<T> (params:T) => T = hello;
function hello<T>(params:T):T {
    return params
}




