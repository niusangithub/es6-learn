/*
* 字符串扩展
    字符串新增特性
        Unicode表示法：0xffff
        遍历接口
        模板字符串
        新增方法（10种）
* */

{ // Unicode表示法
    console.log('a', '\u0061'); // a a
    //Unicode 大于两个字节 0xffff
    console.log('s', '\u20BB7'); // s ₻7
    console.log('s', '\u{20BB7}'); // s 𠮷
}
{    //ES5
    let s = '𠮷';
    console.log('length',s.length); // 2
    //字符
    console.log('0',s.charAt(0));  //0 �
    console.log('1',s.charAt(1)); //1 �
    //编码值
    console.log('at0',s.charCodeAt(0)); //at0 55620
    console.log('at1',s.charCodeAt(1)); //at1 56611
}
{     //es6  4个字节
    let s1 = '𠮷a';
    console.log('length',s1.length); // 2
    //字符
    console.log('0',s1.codePointAt(0));  //0 134071
    console.log('0',s1.codePointAt(0).toString(16));  //0 20bb7
    console.log('1',s1.codePointAt(1));  // 57271
    console.log('2',s1.codePointAt(2));  // 97
}
{
    console.log(String.fromCharCode('0x20bb7'));//es5 乱码ஷ
    console.log(String.fromCodePoint('0x20bb7'));//es6 𠮷
}
{ // 字符串的遍历器接口
    let str = '\u{20bb7}abc';
    for (let i=0;i<str.length;i++) {
        console.log('es5',str[i]); // es5 ��abc
    }
    for (let code of str) {
        console.log('es6',code); //es6 𠮷abc
    }

}
{//字符串是否包含某个字符
    let str = 'string';
    console.log('includes',str.includes('r'));// true
    console.log('includes',str.includes('c'));// false
    //判断是不是已某些字符为起始的呢
    console.log('start',str.startsWith('s')); // true
    console.log('start',str.startsWith('t')); // false
    console.log('end',str.endsWith('ng')); // true
}
{   //重复
    let str = 'abc';
    console.log(str.repeat(3)); //重复3遍
}
{ // 模板字符串    数字1左边的那个键 ``    数据项${}
    let name ='list';
    let info = 'hello world';
    let m = `i am ${name},${info}`;
    console.log(m);//i am list,hello world
}
// {   //es7的草案  补白  使用需要babel-polyfill
//     console.log('1',padStart(2,'0')); //01
//     console.log('1',endStart(2,'0')); //10
// }
{//标签模板 作用1，处理多语言转换的时候2，xss攻击
    let user = {
        name:'list',
        info:'hello world'
    };
    abc`i am ${user.name},${user.info}`;
    function abc(s,v1,v2) {
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}
{// raw 方法的使用    把\转译了
    console.log(String.raw`Hi\n${1+2}`);  //  Hi\n3
    console.log(`Hi\n${1+2}`); //  Hi 换行 3
}