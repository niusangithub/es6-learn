/*
*  函数的扩展部分
*       函数新增的特性
*           参数默认值  rest参数  扩展运算符 箭头函数 this绑定  尾调用
* */


{   //默认值后面不能有没有默认值的变量
    function test(x,y='world') {
        console.log('默认值',x,y);
    }
    test('hello');// hello world
    test('hello','你好');// hello 你好
}

{
    let x = 'test';
    function test2(x,y=x) {
        console.log('作用域1',x,y);
    }
    test2('hello'); // hello hello
}
{
    let x = 'test';
    function test2(x,y=x) {
        console.log('作用域2',x,y);
    }
    test2(); //  undefined undefined
}

{
    let x = 'test';
    function test2(c,y=x) {
        console.log('作用域3',c,y);
    }
    test2('hello'); //  hello test
}

{ //把不确定的参数转换成数组
    function test3(...arg) {
        for (let v of arg) {
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,5,'a');  //1 2 3 4 5 a
}
{
    // 扩展运算符
    console.log(...[1,2,3,4]); // 1 2 3 4
    console.log('a',...[1,2,3]); // a 1 2 3
}
//箭头函数   参数 =>  返回值
// 箭头函数没有自己的this, 它的this是继承而来; 默认指向在定义它时,它所处的对象(宿主对象),而不是执行时的对象
{
    let arrow = v => v*2;
    console.log(arrow(3)); //6
    let arrow2 = () => 5;
    console.log(arrow2()); //5
}

{//函数伪调用   提升性能
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x) {
        return tail(x);
    }
    fx(123);
}

/*
* ES6 语法
*   函数新增的方法
*       简洁表示法
*       属性表达式
*       扩展运算符
*       Object新增方法
* */
{
//    简介表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o:o,
        k:k
    };
    let es6 = {
        o,k
    }
    console.log(es5,es6);
    let es5_method = {
        hello:function () {
            console.log('hello')
        }
    };
    let es6_method = {
        hello() {
            console.log('hello');
        }
    }
    console.log(es5_method.hello(),es6_method.hello());
}
{
    // 属性表达式
    let a = 'b';
    let es5_obj = {
        a:'c',
        b:'c'
    };
    let es6_obj = {
        [a]:'c'
    };
    console.log(es5_obj,es6_obj);
}
{
    //新增API
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');//true true
    console.log('数组',Object.is([],[]),[]===[]);// false false
//拷贝  浅拷  只拷贝自身的属性，不拷贝继承和不可枚举的属性
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

    let  test = {k:123,v:456};
    for (let [key,value] of Object.entries(test)) {
        console.log([key,value]); // ["k", 123] ["v", 456]
    }
}
// {
//     // 扩展运算符 'babel-polyfill'支持也不好，暂时不建议使用
//     let {a,b,...c} = {a:'testa',b:'testb',c:'testc',d:'testd'};
//     c = {
//         c:'testc',
//         d:'testd'
//     }
// }