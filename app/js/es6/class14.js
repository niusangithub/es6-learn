/*
*   iterator，for of 循环
*   什么是iterator接口
*   iterator的基本用法
*   for of循环
* */
{
    let arr = ['hello','world'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}
{ // 自定义iterator
    let obj = {
        start:[1,3,2],
        end:[7,9,8],
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return {
                next(){
                    //怎么遍历的过程
                    if(index<len) {
                        return {
                            value:arr[index++],
                            done:false // 是否结束 false表示没有结束
                        }
                    }else {
                        return{
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    };
    for (let key of obj) {
        console.log(key); // 1 3 2 7 9 8
    }
}

{ // for of 循环
    let arr = ['hello','world'];
    for (let value of arr) {
        console.log(value); // hello world
    }
}