// 基础类型 null,undefined,symbol,boolean,void
const count:number = 123;
const teacherName:string = 'Kite';

// 对象类型 
const teacher: {
    name:string,
    age:number
} = {
    name:'Kite',
    age:18
};

const numbers:number[] = [1,2,3];

class Person {}
const Kite:Person = new Person();

const getTotal:() => number = () => {
    return 123;
}

export {}