function paramDecorator(target:any,key:string,paramIndex:number) {
    console.log(target,key,paramIndex); // 原型，方法名，参数位置索引
}


class Test1 {
    getInfo(name:string,@paramDecorator age:number) {
        console.log(name,age);
    }
}

const test1 = new Test1();
// test1.getInfo('kite',20);
// console.log(test1.getInfo);