// 数组
// 1. 数组的类型定义
// 1.1 元素都是相同类型
const arr1:number[] = [1,2,3]; 
const stringArr:string[] = ['1','2','3'];
const undefinedArr:undefined[] = [undefined];
// 1.2 元素有不同种的类型
const arr2:(number | string)[] = [1,'2',3];
// 1.3 元素是对象类型
// 1.3.1 
const objectArr1:{name:string,age:number}[] = [
    {name:'Kite',age:18}
]
// 1.3.2 使用 type alias 类型别名
type User = {name:string,age:number,gender:string}; // 类型别名
const objectArr2:User[] = [
    {name:'Kite',age:18,gender:''}
]

// 元组 tuple
// 1. 如果一个数组元素个数固定，每个元素的类型也是固定的，就可以使用元组类型
const teacherInfo:[string,string,number] = ['1','2',3];
// 2. 元组的应用场景
// 假如要导出一个 csv 文件
const teacherList:[string,string,number][] = [
    ['dell','male',18],
    ['kite','male',19],
    ['john','male',20],
]; // 一个元素类型是元组的数组 

export {}
