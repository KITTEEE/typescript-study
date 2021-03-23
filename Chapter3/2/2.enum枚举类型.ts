/**
 * 枚举类型默认初始值为 0 且逐个递增
 * 可以给枚举类型设定初始值
 * 若没有该值则返回 undefined
 * 
 */

enum Status {
    OFFLINE = 1,
    ONLINE,
    ERROR,
}

console.log(Status.OFFLINE); // 1
console.log(Status.ONLINE); // 2
console.log(Status.ERROR); // 3
console.log(Status[0]); // undefined

// const Status = {
//     OFFLINE:0,
//     ONLINE:1,
//     ERROR:2
// }

function getResult(status) {
    if(status === Status.OFFLINE) {
        return 'offline';
    }else if(status === Status.ONLINE){
        return 'online';
    }else if(status === Status.ERROR) {
        return 'error'
    }
}

// console.log(getResult(1));