// 基础类型
// 下面这样的写法 ts 是无法推断出类型的
let count;
count = 123;

// 对象类型 {} Class function []

// 箭头函数类型的两种写法
const func = (str:string) => {
    // 用 ts 写函数的时候往往需要对入参进行类型注解，函数返回值的类型一般 ts 都能自动推断出来
    // 所以是否给函数返回值添加类型注解可以根据类型推断的结果来决定
    return parseInt(str,10);
} 

const func1:(str:string) => number = (str) => {
    return parseInt(str,10);
}



// Date 类型
const date = new Date();

// 其他的 case
let temp:number | string = 123;
temp = '456';

// const rawData = {name:"Kite"};
// const newData = JSON.stringify(rawData);

// interface Person {}
// const rawData = '{name:"Kite"}';
// const newData = JSON.parse(rawData);