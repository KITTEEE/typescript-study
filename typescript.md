# Typescript 学习手记



## TypeScript 基础



### 类型

#### 基础类型

基础类型包括`number`、`string`、 `boolean`、`null`、`undefined`、`symbol`、 `void`等

```typescript
const count:number = 123;
const teacherName:string = '123'
// 数组
const numbers:number[] = [1,2,3];
// 对象
const teacher:{name:string,age:number} = {name:'Kite',age:18}
```

一个变量如果需要有多种不同的类型，可以使用 `|` 来将其变为**联合类型**

```typescript
// temp 是联合类型
let temp:number | string = 123;
temp = '123';
```



#### 函数相关类型

给函数添加类型

```typescript
function add(first:number,second:number):number {
  return first + second
}
```

void 表示该函数没有返回值

```typescript
function hello():void {
  console.log('hello');
}
```

never 表示该函数不会执行完 

```typescript
function errorEmmiter():never {
  throw Error();
  // while(true) {}
}
```



* 箭头函数类型的两种写法

  下面两种写法中比较推荐第一种写法，因为一般用 ts 写函数的时候往往需要对入参进行类型注解，函数的返回值类型一般 ts 也会自动推断出来。

  ```typescript
  // 1.
  const func1 = (str:string) => {
    	return parseInt(str,10);
  }
  
  // 2.
  const func2:(str:string) => number = (str) => {
    return parseInt(str,10)
  }
  ```

  

#### 类型注解和推断

**类型注解**

类型注解是通过注解的方式主动告诉 ts 变量的类型

```typescript
let count:number = 123;
```

**类型推断**

类型推断是 ts 自己自动分析推导出变量的类型

```typescript
let count = 123; // 这里 ts 自己推断出 count 为 number 类型
```



**什么情况下需要进行类型注解**

当 ts 无法自动推断出变量类型时，我们就需要类型注解

```typescript
// 下面这个函数，ts 无法推断出函数的参数和返回值的类型，因此函数的参数和返回值类型都为 any
// function getTotal1(firstNumber: any, secondNumber: any): any
function getTotal1(first,second) {
  return first + second;
}

// 对函数参数进行类型注解，使 ts 能够自动推断出函数返回值类型为 number
// function getTotal2(firstNumber: number, secondNumber: number): number
function getTotal2(first:number,sencond:number) {
  return first + second; // number
}
```



**同样的，如果 ts 能自动推断出类型，我们也就不需要进行类型注解了。**



#### 数组和元组

**数组和数组的类型定义**

1. 元素都是相同类型

   ```typescript
   const arr:number[] = [1,2,3];
   const stringArr:string[] = ['1','2','3'];
   const undefinedArr:undefined[] = [undefined];
   ```

2. 元素有不同种类型

   ```typescript
   const arr:(number | string)[] = [1,'2',3,'4','5'];
   ```

3. 元素是对象类型

   ```typescript
   const objectArr:{name:string,age:number}[] = [
     {name:'kite',age:'12'},
     {name:'yiu',age:'18'}
   ]
   ```

   使用 `type alias` 类型别名

   ```typescript
   type User {
   	name:string,
   	age:number
   }
   const objectArr:User[] = [
     {name:'kite',age:'12'},
     {name:'yiu',age:'18'}
   ]
   ```

   

**元组**

**如果一个数组，它的元素个数固定，每个元素的类型也固定，那么就可以使用元组类型。**

元组示例：

```typescript
const diffTypeCount:[string,string,number,number] = ['1','2',3,4];
```

一个元素类型是元组的数组示例：

```typescript
const teacherList:[string,string,number][] = [
  ['dell','male',18],
  ['kite','male',19],
  ['john','male',20],
]
```



### 接口

**接口的定义**

下面接口定义了一个 Person 类型，且 Person 类型表示必须拥有 `name`和`age`两个属性，如果没有其中一个则会报错。

```typescript
interface Person {
  name:string,
  age:number
}
const person:Person = {name:'kite',age:18};
```

**可选属性**：`? `来表示该属性不是必须的

```typescript
// 这里表示 age 属性不是必须要传的
interface Person {
  name:string,
  age?:number
}
const person:Person = {name:'kite'}; // 不会报错
```

**只读属性：**使用 `readonly `关键字表示该属性不能被修改

```typescript
interface Person {
  name:string,
  readonly age:number
}

const person:Person = {name:'kite',age:'20'};
person.age = 21 // => 报错
```

**额外属性：** 通过添加 `[propName:string]:any`使得接口支持任意数量的其它属性传入

```typescript
interface Person {
  name:string,
  [propName:string]:any
}

const person:Person = {name:'kite',age:20,weight:18kg}
```

**接口可以添加方法**

```typescript
interface Person {
  name:string,
  say():string
}
```

**接口可以被继承**

```typescript
interface Person {
  name:string,
  say():string
}
interface Teacher extends Person{
  teach():string
}

const teacher:Teacher = {
  name:'kite',
  say:() => 'hi',
  teach:() => 'teach'
}

teacher.say(); // => 'hi'
teacher.teach(); // => 'teach'
```

**接口和类型别名的区别**

1. 类型别名可以定义基本类型，接口不可以

   ```typescript
   type count = 123;
   interface count = 123; // 报错
   ```

   

### 类

#### 类的定义和继承

```typescript
// 定义一个 Person 类
class Person {
    name = 'kite';
    getName() {
        return this.name;
    }
}

// 定义一个 Teacher 类，并继承 Person
class Teacher extends Person {
    getTeacherName() {
        return 'Teacher';
    }
    // 重载
    getName() {
        // return 'yiu';
      	// 需要通过 super 来获取父类的上下文
        return super.getName() + 'yiu';
    }
}

const teacher = new Teacher();
console.log(teacher.getName()); // => 'kite'
console.log(teacher.getTeacherName()); // => 'kite yiu'
```



#### 类的访问类型和构造函数

* **类的访问类型**

1. `public` 关键字表示属性或方法**允许在类的内部或外部被访问**，在没有指定访问类型时，访问类型默认为 public。

   ```typescript
   class Person {
     public name:string
     public sayHi() {
       console.log(this.name)
     }
   }
   const person = new Person();
   person.name = 'kite';
   person.sayHi(); // => 'kite'
   ```

   

2. `private`关键字表示属性或方法**只允许在类的内部被访问**

   ```typescript
   class Person {
     private name:string
     sayHi() {
       this.name = 'kite';
       console.log(this.name);
     }
   }
   
   const person = new Person();
   console.log(person.name); // 无法访问
   person.name = 'yiu'; // 无法修改
   person.sayHi(); // => 'kite' 只能在类内部访问
   ```

   将构造器设为私有属性，可以防止类通过 `new` 被调用

   ```typescript
   // 一个简单的单例模式
   class Demo {
     private static instance:any
     private constructor() {}
     static getInstance() {
       if(!this.instance) {
         this.instance = new Demo(); 
       }
       return this.instance
     }
   }
   
   const demo = new Demo(); // => 报错
   const demo1 = Demo.getInstance();
   const demo2 = Demo.getInstance();
   console.log(demo1 === demo2); // => true
   ```

   

3. `protected`关键字表示属性**只能在类内或子类内部被访问**

   ```typescript
   class Person {
     public name:string = 'kite'
     protected sayHi() {
       console.log(this.name);
     }
   }
   
   class Teacher extends Person{
     sayBye() {
       this.sayHi(); // 可以在子类的内部被访问
     }
   }
   
   const person = new Person();
   person.sayHi(); // 无法在类的外部被访问
   ```



* **类的构造器**

实例化某个类的时候，类的构造器会被自动执行

1. 构造器写法

   传统写法：

   ```typescript
   class Person {
     public name:string
     constructor(name:string) {
       this.name = name;
     }
   }
   ```

   简化写法：

   ```typescript
   class Person {
     constructor(public name:string) { // 这里 public 不能省略
       this.name = name
     }
   }
   ```

2. **子类需要构造器时，子类需要在构造器中显式调用 ` super()`来继承父类的属性**

   ```typescript
   class Person {
     public name:string
     constructor(name:string) {
       this.name = name;
     }
   }
   class Student extends Person{
     	constructor(public age:number) {
         super('kite'); // Person 类构造器需要传入参数
         this.age = age;
       }
   }
   ```



#### 静态属性 / 方法

1. **在属性或方法的访问类型后面加上 `static` 关键字，表示该属性或方法为静态属性/方法。**

   ```typescript
   class Person {
     private static sayHi() {
       console.log('hi');
     }
    	static sayBye() {
       console.log('bye');
     }
   }
   ```

2. **静态属性 / 方法 是挂载在类上的，而不是类的示例上，只能通过类来直接访问**

   ```typescript
   class Person {
    	static sayHi() {
       console.log('hi');
     }
   }
   
   Person.sayHi(); // => 'hi'
   
   const person = new Person();
   person.sayHi(); // 报错，实例上没有这个方法
   
   ```

3. **静态方法无法访问到实例的属性或方法，不过可以访问到其他的静态属性或方法，即只能访问挂载在类上的属性或方法。**

   ```typescript
   class Person {
     name:string
     constructor(name:string) {
       console.log('this is constructor');
       this.name = name;
     }
     static sayBye() {
       console.log('bye');
     }
     sayGood() {
       console.log('good');
     }
     static sayHi() {
       this.sayBye(); // => hi
       this.constructor(); // => this is constructor
       this.sayGood(); // 报错
       console.log(this.name); // 报错
     }
   }
   ```



#### 存取器 getter / setter 

1. getter 和 setter 的写法

   **按照约定，如果某个属性需要用到存取器，一般会在属性名前加上下划线，而在存取器中使用真实的属性名**

   ```typescript
   // 示例
   class Person {
     private _name:string
     constructor(name:string) {
       this._name = name;
     }
     get name() {
       return this._name + 'yiu';
     }
     set name(name:string) {
       this._name = name;
     }
   }
   
   const person = new Person('kite');
   console.log(person.name) // => kiteyiu
   person.name = 'hi';
   console.log(person.name) // => hiyiu
   ```

2. **getter 和 setter 用于私有属性在类外被访问时对私有属性的保护，起到安全作用**

3. 只带有 `get`不带有 `set`的存取器自动被推断为 `readonly`。



#### 抽象类

**抽象类**

1. 给类添加 `abstract` 关键字可以将类定义为抽象类
2. 抽象类一般作为派生类的基类来使用，**不能被实例化，只能被继承**

**抽象方法**

1. **抽象方法只能出现在抽象类中**
2. 给方法名添加 `abstract` 关键字可以将方法定义为抽象方法
3. **抽象方法不需要具体实现**
4. **父类如果有抽象方法，则子类必须实现该抽象方法**

```typescript
abstract class Person {
  constructor(public name:string){}
  abstract sayHi()
  // abstract sayHi{} // => 错误写法，抽象方法不需要具体实现
}

class Student extends Person {
  // 必须实现 sayHi 这个抽象方法
  sayHi() {
    console.log('hi');
  }
}
```





## Typescript 高级

### 类型保护

假设有下面这样两个接口

```typescript
interface Bird {
  fly:boolean
  sing:() => {}
}
interface Dog {
  fly:boolean
  bark:() => {}
}
```

且有一个变量的类型为这两个类型的联合类型，如：

```typescript
let animal:Bird | Dog
```

当我们将 animal 这个变量当做参数传入函数时，typescript 无法判断这个变量是实现了 Bird 还是 Dog 接口，于是会出现下面这种情况

```typescript
function trainAnimal(animal:Bird | Dog) {
  animal.sing(); // 报错：类型“Dog”上不存在属性“sing”
}
```

这时候我们就需要用到 **类型保护**，类型保护一般有下面几种方式：

1. 通过类型断言的类型保护

   ```typescript
   function trainAnimal(animal:Bird | Dog) {
     if(animal.sing) {
     	(animal as Bird).sing()
     }else {
       (animal as Dog).bark();
     }
   }
   ```

2. 通过 `in` 语法的类型保护

   ```typescript
   function trainAnimal(animal:Bird | Dog) {
     if('sing' in animal) {
       animal.sing();
     }else {
       animal.bar();
     }
   }
   ```

3. 通过 `typeof` 的类型保护

   ```typescript
   function add(first:number | string,second:number | string) {
     if(type first === 'string' || typeof second === 'string') {
       return `${first}${second}`
     }
     return first + second
   }
   ```

4. 通过 `instanceof` 的类型保护

   ```typescript
   class numObj {
     count:number
   }
   
   function add(first:object | numObj,second:object | numObj) {
     if(first instanceof numObj && second instanceof numObj) {
       return first.count + second.count
     }
     return 0;
   }
   ```



### 枚举类型

* 枚举类型默认初始值为 0 且逐个递增

* 可以给枚举类型设定初始值

* 若没有该值则返回 `undefined`

```typescript
enum Status {
	OFFLINE = 1,
	ONLINE = 3,
	ERROR,
}

console.log(Status.OFFLINE); // 1
console.log(Status.ONLINE); // 3
console.log(Status.ERROR); // 4
console.log(Status[0]); // undefined

function getResult(status) {
	if(status === Status.OFFLINE) {
		return 'offline';
	}else if(status === Status.ONLINE){
		return 'online';
	}else if(status === Status.ERROR) {
		return 'error'
	}
}

console.log(getResult(1)); // => offline
```



### 泛型

在编写函数或类的时候，我们需要他们不仅能够支持当前的数据类型，也想要他们能够支持面向未来的数据类型，这时候可以使用 **泛型( generic 即泛指的类型)** 来达到我们的目的，使得他们可以支持多种基础类型和自定义类型。

**泛型的写法：**

```typescript
function join<T>(first:T,second:T) {
  	return `${first}${second}`
}
let j1 = join<string>('1','1');
let j2 = join<number>(1,1)
console.log(j1,j2); // => '11' '11'
```

可以同时指定多个泛型

```typescript
function join<T,U>(first:T,second:U) {
  return `${first}${second}`;
}
let j1 = join<string,number>('1',1);
let j2 = join<number,number>(1,2);
console.log(j1,j2); // => '11' '12'
```



#### 泛型类和泛型约束

假如我们有下面这样一个用作数据管理的类

```typescript
class DataManager {
    constructor(private data:string[]) {}
    getItem(index:number):string {
        return this.data[index];
    }
}
```

我们希望 data 数据除了能够是 string 类型，也能够是 number 或者其他类型，我们就可以使用**泛型类**来进行改造。

泛型类使用（ `<>`）括起泛型类型，跟在类名后面

```typescript
class DataManager<T> {
  constructor(private data:T[]) {}
  getItem(index:number):T {
    return this.data[index];
  }
}
```

假设这时候我们希望 data 的每一项都是 `Item` 类型，且 `Item` 类型有固定的一个 `name` 属性，我们给泛型类增加一个方法使其能够返回这个`name`属性

```typescript
class DataManager<T> {
  constructor(private data:T[]){}
  getItem(index:number):T {
    return this.data[index]
  }
  getItemName(index:number):string {
    return this.data[index].name;
  }
}
```

这时我们发现`getItemName` 方法会报错，因为 ts 推断类型上没有 `name` 属性。

这时我们就要用到 **泛型约束**。

**如果有时候我们想操作某类型的一组值，并且我们知道这组值具有什么样的属性，我们就可以使用泛型约束，对泛型进行约束要求。**

**一般我们使用接口和`extends`关键字来实现约束。**

```typescript
interface Item {
  name:string
}
// 让 T 继承 Item 接口，实现泛型约束
class DataManager<T extends Item> {
  constructor(private data:T[]){}
  getItem(index:number):T {
    return this.data[index]
  }
  getItemName(index:number):string {
    return this.data[index].name;
  }
}
```



### 命名空间

命名空间是一种 typescript 用来组织代码的手段，以便于在记录它们类型的同时还**不用担心与其它对象产生命名冲突**。

示例：

```typescript
namespace Components {
    // 命名空间里还可以导出命名空间
    export namespace SubComponent {
        export function testFunc() {
            console.log('test');
        }
    }
    export interface User{
        name:'kite'
    }
    export class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'this is Header';
            document.body.appendChild(elem);
        }
    }
    export class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'this is Content';
            document.body.appendChild(elem);
        }
    }
    export class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'this is Footer';
            document.body.appendChild(elem);
        }
    }
}
  
// 可以这样访问：
new Components.Header();
new Components.Content();
new Components.Footer();
```

当应用越来越大，我们也需要将文件拆分成多文件的形式，由于不同文件之间存在依赖关系，我们可以加入引用标签来告诉编译器文件之间的关联

```typescript
///<reference path="./components.ts" />

namespace Home {
    export class Page {
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
}
```



#### 别名

可以使用`import q = x.y.z`给常用的对象起一个短的名字，来简化命名空间操作的方法。

示例：

```typescript
namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}

import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // 等价于 new Shapes.Polygons.Square()
```





### 装饰器

概念：装饰器是一个函数，通过`@`符号来使用，多个装饰器的执行顺序为从下到上或从右往左



#### 类的装饰器

类的装饰器接收的参数是类的构造函数

示例1：

```typescript
function testDecorator(constructor) {
  constructor.prototype.getName = function() {
    console.log('hello kite');
  }
}

@testDecorator
class Test {}

const test = new Test();
test.getName(); // => hello kite
```

示例2：

```typescript
function testDecorator<T extends new (...args:any[]) => {}> (consturctor:T) {
  return class extends constructor {
    name = 'yiu'
    getName() {
      return this.name
    }
  }
}

@testDecorator
class Test {
  name:string
  constructor(name:string) {
    this.name = name;
  }
}

const test = new Test('kite');
console.log(test); // => class_1 { name: 'yiu' }
console.log(test.getName()); // => yiu
```



#### 方法的装饰器

方法的装饰器接收的参数分别是`target`、`key`、`descriptor`

普通方法的`target` 对应的是类的 prototype

静态方法的`target`对应的是类的构造函数

`descriptor` 对应的 `PropertyDescriptor` 接口

```typescript
interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}
```

示例1：

```typescript
function getNameDecorator(target:any,key:string,descriptor:PropertyDescriptor) {
  descriptor.value = function() {
    return '123'
  }
  // descriptor.writable = false;
}

class Test {
  name:string
  constructor(name:string) {
    this.name = name;
    
    @getNameDecorator
    getName() {
      return this.name
    }
  }
}
const test = new Test('kite');
console.log(test.getName()); // => 123
```



#### 参数的装饰器

参数的装饰器接收的参数分别是`target` (类的原型)、`key`(方法名)、`paramIndex`(参数的索引位置)

示例：

```typescript
function paramDecorator(target:any,key:string,paramIndex:number) {
    console.log(target,key,paramIndex); 
  	// => 原型 { getInfo: [Function (anonymous)] } 方法名 getInfo 参数位置索引 1
}

class Test {
    getInfo(name:string,@paramDecorator age:number) {
        console.log(name,age);
    }
}

const test = new Test();
```





#### 属性的装饰器

属性的装饰器接收的参数分别是 `target` 、`key`

`target` 在属性为静态属性时为类的构造函数，否则为类的 prototype

`key` 指属性名

示例：

```typescript
function nameDescriptor(target:any,key:string) {
  target[key] = 'yiu'
}
class Test {
  @nameDescriptor
  name:string = 'kite';
}

const test = new Test();
console.log(test.name); // => kite
console.log(Test.prototype.name); // => yiu
```



#### 存取器的装饰器

存取器的装饰器接收的参数分别是`target`、`key`、`descriptor`

存取器的装饰器使用时需要注意：

**TypeScript不允许同时装饰一个成员的 get 和 set 存取器，因为在装饰器应用于一个属性描述符时，它联合了 get 和 set 存取器，而不是分开声明的**

示例：

```typescript
function accessDecorator(target:any,key:string,desc:PropertyDescriptor) {
  desc.writable = false;
}

class Test {
  private _name:string
  constructor(name:string) {
    this._name = name;
  }
  
  @accessDecorator
  get name() {
    return this._name;
  }

  set name（）{
    this._name = name;
  }
}

const test = new Test('kite');
test.name = 'kite yiu'; // => 报错
console.log(test.name); // kite

```



## tsconfig.json 配置项解析

### include / exclude / files 

* 默认情况下，在项目根目录下执行 `tsc` 命令，会将当前目录和子目录里的所有 ts 文件进行解析

* `include`、 `exclude` 和 `files` 都表示执行 `tsc` 命令时哪些文件需要被编译，哪些不需要

* `files` 指定一个相对或绝对路径的文件列表，`include` 可以指定一个文件 `glob` 匹配模式列表



### complierOptions 配置项

#### 基础配置

* **outFile：** 将输出文件合并为一个文件。合并的顺序是根据传入编译器的文件顺序和 `///<reference``>`和 import的文件顺序决定的

* **rootDir：** 指定 tsc 命令运行的根目录
* **outDir：** 指定编译后的 js 文件存放的目录

* **allowJs：** 允许编译 js 文件
* **checkJs：** 对 js 文件进行检查



#### 严格的类型检查配置

* **noImplicitAny：** 为 `true` 时代码中不能有隐含的 `any` 类型，即需要显式地指定 `any` 类型

  ```typescript
  function test(name:any) { // 为 true 时需要显式地指定 any 类型
  	return name;
  }
  ```

* **strictNullChecks：** 为` true` 时 `null` 和 `undefined` 类型不能包含在其他类型里，即 `null` 和 `undefined` 不能赋值给其他类型



#### 额外检查配置

* **noUnusedLocals：** 有声明但没有使用的变量则报错
* **noUnusedParameters：** 函数里有声明但未使用的参数则报错