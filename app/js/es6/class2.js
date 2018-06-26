// 2， 解构赋值 （左右解构一一对应进行赋值）
//      分类 ： 数组解构赋值 对象解构赋值 字符串结构赋值
//            布尔值解构赋值  函数参数解构赋值  数值解构赋值

{
    let a,b,c;
    [a,b]=[1,2];
    console.log(a,b); // 1  2  数组类型解构赋值
}
{
    let a,b,c;
    [a,b,c]=[1,2];
    console.log(a,b,c); // 1  2  undefined  如果没有配对成功，用默认值 undefined
}
{
    let a,b,c;
    [a,b,...c] = [1,2,3,4,5,6,7,8,9];
    console.log(a,b,c);// 1 2 [3, 4, 5, 6, 7, 8, 9]
}
{
    let a,b;
    ({a,b} = {a:1,b:2})
    console.log(a,b);// 1 2  对象解构赋值
}
// 使用场景 1, 变量交换
{
    let a = 1,b =2;
    [a,b] = [b,a];
    console.log(a,b); // 2 1
}
// 使用场景2   选择性的接受某个变量
{
    function fun() {
        return [1,2]
    }
    let a,b;
    [a,b] =fun();
    console.log(a,b) // 1,2
}
{
    function fun2() {
        return [1,2,3,4,5];
    }
    let a,b;
    [a,,,b] = fun2();
    console.log(a,b); // 1 4
}
{
    function fun3() {
        return [1,2,3,4,5];
    }
    let a,b;
    [a,...b] = fun3();
    console.log(a,b); // 1 [2,3,4,5]
}
//对象的解构赋值 (注意key对应)
{
    let obj = {a:111,b:false,c:'test'};
    let {a,b,c} = obj;
    console.log(a,b,c); // 111 false "test"
    let {x,y,z} = obj;
    console.log(x,y,z); //undefined undefined undefined
}
{
    let metaData = {
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    };
    let {title:esTitle,test:[{title:testTitle}]} =metaData;
    console.log(esTitle,testTitle); //abc test
}
