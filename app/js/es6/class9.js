/*
* Symbol 数据类型 es6 新增的数据类型
*       Symbol的概念
*       Symbol的作用 声明的值永远不相等，保证唯一
* */

{//声明
    let  a1 = Symbol();
    let  a2 = Symbol();
    console.log(a1===a2); // false
    let a3 =Symbol.for('a3');//区别：a3是key值，如果注册过，返回值
    let a4 = Symbol.for('a3');
    console.log(a3===a4); // true
}
{//作用
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]:123,
        'abc':345,
        'c':345
    };
    console.log(obj);//{abc: 345, c: 345, Symbol(abc): 123}
//    对象中用Symble  for in 、let of 是拿不到属性的
    for (let [key,value] of Object.entries(obj)) {
        console.log('let of',key,value);
    }
    let arr =  Object.getOwnPropertySymbols(obj);
    arr.forEach(function (item) {
        console.log(obj[item]); // 123
    })
    //包含非Symbol和 Symbol
    console.log(Reflect.ownKeys(obj));
}

