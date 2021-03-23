/**
 * 
 * 联合类型即可以通过管道符 (|) 将一个变量设置多个类型
 * 
 */

interface Bird {
    fly:Boolean,
    sing:() => {}
}

interface Dog {
    fly:Boolean,
    bark:() => {}
}

// 1. 通过类型断言的类型保护
function trainAnimal(animal:Bird | Dog) {
    // animal.sing();
    if(animal.fly) {
        (animal as Bird).sing();
    }else {
        (animal as Dog).bark();
    }
}

// 2. 通过 in 语法的类型保护
function trainAnimalSecond(animal:Bird | Dog) {
    if('sing' in animal) {
        animal.sing();
    }else {
        animal.bark();
    }
}

// 3. 通过 typeof 的类型保护
function add(first:number | string,second:number | string) {
    if(typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`;
        // return first + second
    }
    return first + second
}

// 4. 通过 instanceof 的类型保护

class numObj {
    count:number
}

function addSecond(first:object | numObj,second:object | numObj) {
    if(first instanceof numObj && second instanceof numObj) {
        return first.count + second.count;
    }
    return 0;
    // return first.count + second.count
}