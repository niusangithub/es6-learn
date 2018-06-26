/**
 *  数据结构
 *      set WeakSet Map WeakMap
 */
{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log(list.size); // 2
}
{
    let arr = [1,2,3,4,5];
    let list= new Set(arr);
    console.log(list.size); //5
}
{// set 唯一的  数组去重
    let list = new Set();
    list.add(1);
    list.add(3);
    list.add(1);
    console.log(list); // {1,3}
    //这种转换不会进行数据类型的转换
    let  arr = [1,2,3,1,3,4,5,6,7];
    let  list2 = new Set(arr);
    console.log(list2);
}
{ //delete has clear
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    console.log('clear',list.clear(),list);
}

{   //几个遍历方法
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    for(let key of list.keys()) {
        console.log('keys',key);
    }
    for(let value of list.values()) {
        console.log('values',value);
    }
    for(let value of list) {
        console.log('values',value);
    }
    for(let [key,value] of list.entries()) {
        console.log(key,value);
    }
    list.forEach(function (item) {
        console.log(item);
    })
}
{// 和set的区别 WeakSet只支持对象，对对象是弱引用，不检查垃圾回收
    let weakList = new WeakSet();
    let  arg ={};
    weakList.add(arg); // 只能是对象
    console.log(weakList);
    //WeakSet 不能遍历，没有clear方法没有size属性
}
{
    let map  = new Map();
    let arr = [1,2,3];
    map.set(arr,345);
    console.log(map,map.get(arr)); //{Array(3) => 345}   345
    // size delete clear map  和 map 一样
}
{   // key  也必须是对象 和weakset类似  不能遍历，没有clear，size
    let  weakmap  = new WeakMap();
}
// Map 与 Array的对比
{
    //数据结构的横向对比增删改查
    let map = new Map();
    let arr = [];
    //增
    map.set('t',1);
    arr.push({t:1});
    console.log(map,arr);
    //查
    let map_exist =  map.has('t');
    let arr_exist = arr.find(item=>item.t);
    console.log(map_exist,arr_exist); // true {t: 1}
    //改
    map.set('t',2);
    arr.forEach(item=>item.t?item.t=2:'');
    console.log(map,arr);
    //删除
    map.delete('t');
    let  index = arr.findIndex(item=>item.t);
    arr.splice(index,1);
    console.log(map,arr);
}

{// Set 与 Array的对比
    let set = new Set();
    let arr = [];
    //增
    set.add({t:1});
    arr.push({t:1});
    console.log('set-array',set,arr);
    //查
    let set_exist = set.has({t:1}); //false ，has查询的是对象的引用，true
    let arr_exist = arr.find(item=>item.t);
    console.log(set_exist,arr_exist); // true {t: 1}

    //改
    set.forEach(item=>item.t?item.t=2:'');
    arr.forEach(item=>item.t?item.t=2:'');
    console.log(set,arr);
    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let index =  arr.findIndex(item=>item.t);
    arr.splice(index,1);
    console.log(set,arr);
}
//map set  object的对比
{
    let item = {t:1};
    let set = new Set();
    let map = new Map();
    let obj = new Object()
    //增
    map.set('t',1);
    set.add(item);
    obj['t'] =1 ;
    console.log('map set obj 对比',set,map,obj);
    //查
    console.log({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    }); // true true true
    map.set('t',2);
    item.t=2;
    obj['t']=2;
    console.log('map set obj 查',set,map,obj);
    //删除
    map.delete('t');
    set.delete(item);
    delete obj.t;
    console.log(obj,map,set);
}
//优先考虑set 和map 如果数组唯一考虑set 。