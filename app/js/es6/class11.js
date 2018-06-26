/*
*   Generator 基本概念  异步编程的一种解决方案
*   next函数的用法
*   yield的语法
* */
{// genertaor基本定义  注意*  返回的是一个iterator
    let tell = function* () {
        yield 'a';
        yield 'b';
        return 'c';
    }
    let k =tell();
    console.log(k.next()); //{value: "a", done: false}
    console.log(k.next());//{value: "b", done: false}
    console.log(k.next());//{value: "c", done: true}
    console.log(k.next());//{value:undefined,done:true}
}
{
    let obj = {};
    obj[Symbol.iterator]=function* () {
        yield 1;
        yield 2;
        yield 3;
    }
    for (let key of obj) {
        console.log(key); // 1 2 3
    }
}
{
    let state = function* () {
        while(1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());  // A B C A
}
// {//   async  await
//     let state = async function () {
//         while(1) {
//             await 'A';
//             await 'B';
//             await 'C';
//         }
//     }
//     let status = state();
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());  // A B C A
// }

{ // 应用案列  抽奖
    let draw = function (count) {
        //具体的业务逻辑
        console.log(`剩余${count}次`);
    }
    let residue = function* (count) {
        while (count>0) {
            count--;
            yield draw(count);
        }
    }
    //默认五次
    let start = residue(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function () {
        start.next();
    },false);
}
{ // 长轮询
    let ajax = function* () {
        yield new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({code:0});
            },1000);
        });
    }
    let pull = function () {
        let genertaor = ajax();
        let step = genertaor.next();
        step.value.then(function (d) {
            if (d.code!=0) {
                setTimeout(function () {
                    console.info('wait');
                    pull();
                },1000);
            }else {
                console.info(d)
            }
        });
    }
    pull();
}