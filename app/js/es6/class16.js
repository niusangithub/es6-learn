/*类与对象
*   基本语法  类的继承  静态方法 静态方法 getter setter
* */
{//基本定义和生成实例
    class Parent {
        constructor(name='zhangsan') {
            this.name = name;
        }
    }
    let parent = new Parent('v');
    console.log(parent);// v
}
{//继承
    class Parent {
        constructor(name='zhangsan') {
            this.name = name;
        }
    }
    class Child extends Parent {
    }
    let  chile = new Child();
    console.log(chile);//zhangsan

}
{//super 继承传递参数
    class Parent {
        constructor(name='zhangsan') {
            this.name = name;
        }
    }
    class Child extends Parent {
        constructor(name='child') {
            super(name);
            this.type = 'child';
        }
    }
    let  chile = new Child('lisi');
    console.log(chile);//{name: "lisi", type: "child"}
}
{//getter setter
    class Parent {
        constructor(name='123') {
            this.name = name;
        }
        get longName() {
            return 'mk'+this.name;
        }
        set longName(name) {
            return this.name = name;
        }
    }
    let parent = new Parent();
    console.log(parent.longName);// mk123
    parent.longName='hello';
    console.log(parent.longName);//mkhello
}
{
    //静态方法
    class Parent {
        constructor(name='zhangsan') {
            this.name=name;
        }
        static tell () {
            console.log('tell');
        }
    }
    //通过类调用，不是通过是咧调用
    Parent.tell();
}
{
    // 静态属性
    class Parent {
        constructor(name='zhangsan') {
            this.name=name;
        }
        static tell () {
            console.log('tell');
        }
    }
    //定义静态属性
    Parent.type = 'test';
    console.log('静态属性',Parent.type);// test
}