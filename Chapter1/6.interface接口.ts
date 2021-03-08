// 接口
// 1 接口的定义
interface Person {
    name:string,
    // readonly name:string; // readonly 表示该属性是只读属性，设置了readonly 则下面的 setPersonNam 函数会报错
    age?:number; // ? 表示该属性可有可无
    // 允许多出其他属性可以使用下面的语法，表示除了 name 或 age 外还可以传入其他属性：
    [propName:string]:any
    // 接口里还能放方法：
    say():string
}
const getPersonName1 = (person:Person):void => {
    console.log(person.name);
}
const setPersonName1 = (person:Person,name:string):void => {
    person.name = name;
}

const person1 = {
    name:'kite',
    say:() => 'hi'
}
getPersonName1(person1);
setPersonName1(person1,'yiu');

// 1.2 以字面量形式传入函数时，ts 会进行强校验
interface Person2 {
    name:string,
}
const getPersonName2 = (person:Person2):void => {
    console.log(person.name);
}
const person2 = {
    name:'hi',
    sex:'male'
}
getPersonName2(person2); // 不会报错
// getPersonName2({
//     name:'kite',
//     sex:'male'
// }) // 报错了

// 2. 类可以应用接口
// 类应用接口后，相当于应用了接口的类型校验规则
class User implements Person {
    name:'kite';
    say(){
        return 'hi'
    }
    // name = 'kite';
    // say = () => 'hi';
} 

// 3. 接口可以被继承
interface Teacher extends Person {
    teach():string;
}
const getPersonName3 = (person:Teacher):void => {
    console.log(person.name);
}
const teacher = {
    name:'kite',
    say:() => 'hi',
    teach:() => 'teach',
}
getPersonName3(teacher);

// 4 接口和类型别名的区别
// 接口和类型别名很相似，但不完全一致
// 类型别名可以定义基本类型，接口不可以
type count = 'string';
// interface count2 = 'string'
type Person4 = {
    name:string,
    age?:number,
    [propName:string] :any,
    say():string
}
const person4 = {
    name:'kite',
    age:18,
    sex:'male',
    say:() => 'hi'
}
const getPersonName4 = (person:Person4):void => {
    console.log(person.name);
}
getPersonName4(person4);

export {}
