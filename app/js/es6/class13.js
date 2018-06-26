/*
*  Decorator  修饰器  修饰器是一个函数，用来修改类的行为   !类！
*    基本用法 基本概念
*
*    通过'babel-polyfill' 找不到Decorator
*     需要 执行 npm install babel-plugin-transform-decorators-legacy --save-dev
 *  然后修改.babelre 增加 "plugins":["transform-decorators-legacy"]
 *
 *    */
// // 第三方的库  有一些修饰方法  core-decorators
{//限制某个属性是只读的  修改类的行为
    let readonly = function (target,name,descriptor) {
        descriptor.writable = false;
        return descriptor;
    }
    class Test {
        @readonly
        time() {
            return '2017-03-11'
        }
    }
    let test = new Test();
    // test.time = function () {
    //     console.log('reset time');
    // }
    // Cannot assign to read only property 'time' of object '#<Test>'
    console.log(test.time()); //2017-03-11
}

{//
    let typename =function (target,name,descriptor) {
        target.myname='hello'; //类的静态属性
    }
    @typename
    class Test {
    }
    console.log('类修饰符',Test.myname);
}

{// 案列  日志系统  //好处把埋点系统抽离出来。
    let log = (type)=>{
        return function (target,name,descriptor) {
            let src_method = descriptor.value;
            descriptor.value = (...arg)=>{
                src_method.apply(target,arg);
                console.log(`log${type}`);
            }
        }
    }
    class AD {
        @log('show')
        show(){
            console.log('AD is show');
        }
        @log('click')
        click(){
            console.log('AD is click');
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}