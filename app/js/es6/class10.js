/*
* Promise 异步编程的解决方案
*    什么是异步
*    Promise的作用
*    Promise的基本用法
* */
{
    let ajax = function (callback) {
        console.log('执行');
        setTimeout(function () {
            callback&&callback.call();
        },1000);
    }
    ajax(function () {
        console.log('timeout');
    });
    // 执行  timeout
}

{//用Promise
    let ajax = function () {
        console.log('执行2');
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve();
            },1010);
        })
    }
    ajax().then(function () {
        console.log('promise','timeout');
    })
    //执行2  timeout
}
{
    let ajax = function () {
        console.log('执行3');
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve();
            },1010);
        })
    }
    ajax()
        .then(function () {
            return new Promise(function (resolve,reject) {
                setTimeout(function () {

                    resolve();
                },2000);
            })
                .then(function (resolve,reject) {
                    console.log('timeout3');
                })
        })
    // 执行3  timeout3
}
{// Promise 捕获异常错误catch
    let ajax = function (num) {
        return new Promise(function (resolve,reject) {
            if (num>5) {
                resolve();
            }else {
                throw new Error('出错');
            }
        });
    }

    ajax(6).then(function () {
        console.log('log',6);
    }).catch(function (err) {
        console.log('catch',err);
    });  // 6
    ajax(3).then(function () {
        console.log('log',6);
    }).catch(function (err) {
        console.log('catch',err);
    });  // catch Error
}
{ //all
    // 所有图片加载完成再添加到页面
    function loadImage(src) {
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src=src;
            img.onload=function () {
                resolve(img);
            }
            img.onerror = function (err) {
                reject(err);
            }
        })
    }
    function showImgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img);
        });
    }
    //都加载完成才执行
    Promise.all([
        loadImage('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3261108149,2762297919&fm=27&gp=0.jpg'),
        loadImage('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=153589139,1805251811&fm=27&gp=0.jpg')
    ]).then(showImgs);
}

{
    //有一个图片加载完就添加到页面
    function loadImage(src) {
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src=src;
            img.onload=function () {
                resolve(img);
            }
            img.onerror = function (err) {
                reject(err);
            }
        })
    }

    function showImgs(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }
    // 有一个状态改变，就执行 先到先得
    Promise.race([
        loadImage('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=153589139,1805251811&fm=27&gp=0.jpg'),
        loadImage('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3261108149,2762297919&fm=27&gp=0.jpg')

    ]).then(showImgs);
}