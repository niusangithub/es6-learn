// let 声明的变量只在作用域有效
function test() {
    for (let i = 1;i<3;i++) {
        console.log(i);
    }
    // console.log(i); //报错
    //ES6 强制使用严格模式  变量未声明不能引用，所以不是undefined
    let a = 1;
    //let a = 2; 不能用一个变量定义

    const PI = 3.1415926; //常量 声明的时候必须赋值
    //PI = 2; PI是一个只读属性 不能修改

    const obj = {
        a:1
    };
    obj.a = 3;
    console.log(obj); // obj可以改变  指针不改变
}