// 类型注解：我们主动告诉 ts  变量的类型
let count:number = 123; // 我们主动告诉 ts count 为 number 类型

// 类型推断：ts 自动分析变量的类型
let countInference = 123; // ts 自己把 countInference 分析为 number 类型

// 如果 ts 无法分析变量类型的话我们就需要使用类型注释
function getTotal1(firstNumber,secondNumber) {
    return firstNumber + secondNumber;
}
const total1 = getTotal1(1,2);
// 上面这个函数 ts 无法分析出具体类型，所以都为 any 这时我们就需要使用类型注释
function getTotal2(firstNumber:number,secondNumber:number) {
    return firstNumber + secondNumber;
}
const total2 = getTotal2(1,2);

// 如果 ts 能够自动分析变量类型，我们也就不用加类型注解了，比如下面这段代码
let firstNumber = 1;
let secondNumber = 2;
let total = firstNumber + secondNumber; 

export {}