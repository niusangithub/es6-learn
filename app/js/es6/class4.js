/*
*  数值扩展
*       1，新增方法
*       2，方法调整
* */

{
// es6 二进制数值是以0b开头  八进制0o开头
    console.log(0b11111); //15  二进制
    console.log(0o11111)  //4681 八进制
}
{//判断是不是有尽的
    console.log('15', Number.isFinite(15)); // true
    console.log('NaN', Number.isFinite(NaN)); //false
    console.log('1/0', Number.isFinite('true'/0)); //false
    console.log('NaN', Number.isNaN(NaN)); //true
    console.log('NaN', Number.isNaN(0)); //false
}
{//判断是不是整数 Number.isInteger  -2^53~2^53 不包括两端
    console.log('25',Number.isInteger(25));//true
    console.log('25.0',Number.isInteger(25.0));//true
    console.log('25.1',Number.isInteger(25.1));//false
    console.log('String-25',Number.isInteger('25'));//false
    console.log('NaN',Number.isInteger(NaN));//false
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    //判断是不是一个安全的数
    console.log('10',Number.isSafeInteger(10)); // 10 true
    console.log('a',Number.isSafeInteger('a')); // a false
}
{//取小数的整数部分
    console.log(4.1,Math.trunc(4.1)); // 4,4
    console.log(4.9,Math.trunc(4.9)); // 4,4
}
{
    //判断是是正数负数  返回值 -1，0，1，NaN
    console.log(-5,Math.sign(-5)); // -1
    console.log(0,Math.sign(0));  // 0
    console.log(5,Math.sign(5)); // 1
    console.log('5',Math.sign('5')); // 1
    console.log('5aa',Math.sign('5aa')); // NaN
}

{ //立方根的计算 Math.cbrt()
    console.log('-1',Math.cbrt(-1)); //-1
    console.log('8',Math.cbrt(8)); //2
}