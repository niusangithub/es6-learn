/*
* ES6的 模块化
*       export 导出 import 导入
* */
// export let  A = 123;
// export function test() {
//     console.log('test');
// }
// export class Hello {
//     test() {
//         console.log(123);
//     }
// }

let A= 111;
class Hello {
    test(){
        console.log('class');
    }
}
let test = function () {
    console.log('test');
}
export default {
    A,test,Hello
}

//es6模块化导出
// import {A,test,Hello} from './class/es8';
// import {A} from './class/es8';
// import * as lesson from './class/es8'
// import  Lesson from './class/es8'
// // console.log(A,test,Hello);
// // console.log(A);
// console.log(lesson.A);
// console.log(Lesson.A);