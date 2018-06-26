/*
* Proxy 和 Reflect
*   Proxy和Reflect的概念
*   Proxy和Reflect的使用场景
* */
{
    //代理的作用 用户不能操作原始对象，在代理上可以设置读写
    let obj = {
        time:'2022-02-22',
        name:'net',
        _r:123
    };
    //映射obj
    let monitor = new Proxy(obj,{
        //拦截对象属性的读取
        get(target,key) {
            return target[key].replace('2022','1988');
        },
        //拦截对象的设置属性
        set(target,key,value) {
            if (key==='name') {
                return target[key] = value;
            }else {
                return target[key];
            }
        },
        //拦截 key in object 操作
        has(target,key) {
            if (key ==='name'){
                return target[key];
            }else {
                return false;
            }
        },
        //拦截delete
        deleteProperty(target,key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true
            }else {
                return  target[key];
            }
        },
        // 拦截object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys (target) {
            return Object.keys(target).filter(item=>item!='time');
        }
    });
    console.log('get',monitor.time); //get 1988-02-22
    monitor.name = 'app';
    console.log('set',monitor); //get 1988-02-22
    console.log('has','name' in monitor,'time' in monitor);// true false
    delete monitor.time;
    delete monitor._r;
    console.log('delete',monitor); //{ time  name }
    console.log('ownkeys',Object.keys(monitor)); // 把time过滤了
}
{
    // Reflect用法和Proxy一样
    let obj = {
        time:'2022-02-22',
        name:'net',
        _r:123
    };
    console.log(Reflect.get(obj,'time')); //2022-02-22
    console.log(Reflect.set(obj,'name','zhangsan')); // true
    console.log(obj);//{time: "2022-02-22", name: "zhangsan", _r: 123}
}
//用法
{
    //数据校验
    function validator(target,validator) {
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy) {
                if (target.hasOwnProperty(key)) {
                    let va = this._validator;
                    if (!!va(value)) {
                        return Reflect.set(target,key,value,proxy);
                    }else {
                        throw Error(`${key} 不存在`);
                    }
                }else {
                    throw Error(`${key} 不存在`);
                }
            }
        })
    }
    const personValidators = {
        name(val) {
            return typeof val === 'string'
        },
        age(val) {
            return typeof val === 'number' && val>18;
        }
    };
    class Person {
        constructor(name,age) {
            this.name = name ;
            this.age =age;
            return validator(this,personValidators);
        }
    }
    const person = new Person('hanmeimei',29);
    console.log(person);
}