// 给函数添加返回值类型
function add(first:number,second:number):number {
    // return first + second + ''; // 没给函数返回值添加类型不会报错
    return first + second
}
// let total = add(1,2);

// void 表示函数没有返回值
function hello():void {
    console.log('hello kite');
}

// never 表示函数不会执行完
function errorEmmiter():never {
    // throw Error
    while(true) {}
}

// 解构语法的注解
// 错误的语法：
// function add2({first:number,second:number}):number {}
// 正确的语法：
function add2({first,second}:{first:number,second:number}):number {
    return first + second;
}
add2({first:1,second:2});