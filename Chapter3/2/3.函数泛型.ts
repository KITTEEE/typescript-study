// 泛型 generic 即 泛指的类型

function join<T>(first:T,second:T) {
    return `${first}${second}`;
}
// join(1,'1'); // => 报错
join<string>('1','1');
join<number>(1,1);

function map<T>(params:Array<T>) {
    return params;
}
map(['123']);
map<string>(['123']);

// 指定多个泛型
function join2<T,P>(first:T,second:P) {
    return `${first}${second}`;
}
join2('1',1);
join2<string,number>('1',1);    
join2<number,number>(1,1);

function anotherJoin<T>(first:T,second:T):T {
    // return `${first}${second}`;
    return first
}
