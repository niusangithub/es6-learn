/*
*  数组新增特性
*   Array.from  Array.of copyWithin find\findIndex fill
*   inludes  entries\keys\values
*
* */

{  // 转换成数组
    let arr = Array.of(3,4,7,8,9);
    console.log(arr); // [3, 4, 7, 8, 9]
    let arrEmpty = Array.of();
    console.log(arrEmpty); // []
}
{ // 把伪数组转换成数组
    let a = document.querySelectorAll('a');
    console.log(a);
    let aArr = Array.from(a);
    aArr.forEach(function (item) {
        console.log(item.textContent);
    });
    console.log(Array.from([1,3,5],function (item) {
        return item*2;
    })); // [2,6,10]
}
{ //填充数组
    console.log('fill',[1,2,3,4].fill(8)); //  [8, 8, 8, 8]
    console.log('fill',['a','b','c','d'].fill(8,1,3)); // ["a", 8, 8, "d"]
}
{   // 返回下标的集合
    for(let index of ['1','b','c','d'].keys() ) {
        console.log('keys',index); //  0123
    }
    // 兼容有问题
    for(let index of ['1','b','c','d'].values() ) {
        console.log('values',index); //1bcd
    }
    for(let [index,value] of ['1','b','c','d'].entries() ) {
        console.log('entries',index,value); // 01  1b 2c 3d
    }
}
{ //把指定位置的成员赋值到指定位置 copyWithin(从哪个位置开始替换,从哪个位置开始读取数据,从哪个位置截止)
    console.log([1,2,3,4,5].copyWithin(0,3,4)); //[4, 2, 3, 4, 5]
}

{ //查找 find
    console.log([1,2,3,4,5,6].find(function (item) {
        return item >3;  // 4  find 只找第一个符合的成员
    }))
    console.log([1,2,3,4,5,6].findIndex(function (item) {
        return item >3;  // 3  find 只找第一个符合的成员
    }))
}
{
    console.log('number',[1,2,NaN].includes(1)); // true
    console.log('number',[1,2,NaN].includes(NaN)); // true
}