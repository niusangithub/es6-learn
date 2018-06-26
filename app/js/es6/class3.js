//  ES6正则扩展
//     正则新增的特性： 构造函数的变化 正则方法的扩展，u修饰符，y修饰符，s修饰符
{   //es5写法
    let reg1 = new RegExp('xyz','i');
    let reg2 = new RegExp(/xyz/i);
    console.log(reg1.test('xyz123'),reg2.test('xyz123')); // true true
    //es6写法 es6允许第一个参数是正则表达式,后面的修饰符会覆盖前面表达式的修饰符
    let reg3 = new RegExp(/xyz/ig,'i');
    console.log(reg3.flags); //i
}
{// y修饰符 y与g都是全局匹配，g是从上次匹配的位置开始继续寻找，直到找到匹配的位置开始，中间任何匹配上都算。y修饰符紧跟着的笑一个必须匹配成功才算
    let a  = 'aaaa_aaaa_a';
    let a1 = /a+/g;
    let a2 = /a+/y;
    console.log('one',a1.exec(a),a2.exec(a));//one ["aaaa", index: 0, input: "aaaa_aaaa_a"] ["aaaa", index: 0, input: "aaaa_aaaa_a"]
    console.log('two',a1.exec(a),a2.exec(a));//two ["aaaa", index: 5, input: "aaaa_aaaa_a"] null
    //是否开启了y
    console.log(a1.sticky,a2.sticky);//false true
}
{// u修饰符 unicode  正则处理unicode的一个特征值
    //有大于两个字节的时候 一定要加上u
    // . 只能匹配小于两个字节的字符，也不能识别换行符，回车符，行分隔符，段分隔符 遇到这些要用s修饰符
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A')); //当成两个unicode    true
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));//当成一个unicode解析     false
    console.log('\u{20BB7}'); //𠮷
    let s = '𠮷';
    console.log('u1',/^.$/.test(s)); // false
    console.log('u2',/^.$/u.test(s)); // true
}