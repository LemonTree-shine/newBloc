import React,{Component,ReactDOM} from "react";

export default class Prototype extends Component{
    render(){
        return (<div>
            <div className="content">
                <div className="title">创建对象</div>
                <pre  className="hljs">
                    <code>
{`新建一个对象，然后赋值；
var box = new Object();   //创建一个 Object对象
box.name = 'Chen';//创建一个 name属性并赋值
box.age = 100;//创建一个 age属性并赋值
box.run = function () {//创建一个 run()方法并返回值
    return this.name + this.age + '运行中...';
};
console.log(box.run());//Chen100运行中...`}
                    </code>
                </pre>
                <div style={{lineHeight:"25px",paddingTop:"8px",paddingBottom:"8px"}}>
                    上面创建了一个对象，并且创建属性和方法，在 run()方法里的 this，就是代表 box对象本身。这种是 JavaScript创建对象最基本的方法，但有个缺点，想创建一个类似的对象，就会产生大量的代码。 比如我要创建一个新的有同样名称的对象，就要按照上面的流程重新写一遍；
                    为了解决多个类似对象声明的问题，就出现了一种叫做工厂模式的方法，这种方法就是为了解决实例化对象产生大量重复的问题。请看下面代码：
                </div>
                <pre className="hljs"> 
                    <code>
{`function createObject(name, age) { //集中实例化的函数
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.run = function () {
    return this.name + this.age + '运行中...';
    };
    return obj;
}
var box1 = createObject('Tom', 100);//第一个实例
var box2 = createObject('Jack',200);//第二个实例
alert(box1.run());   //Tom100运行中...
alert(box2.run());   //Jack200运行中...`}
                    </code>
                </pre>
                <div style={{lineHeight:"25px",paddingTop:"8px",paddingBottom:"8px"}}>
                    通过工厂模式，可以轻松的解决重复实例化的问题；但是，存在一个识别问题；看下面代码：
                </div>
                <pre className="hljs"> 
                    <code>
{`console.log(typeof box1);           //Object
console.log(box1 instanceof Object);//true
console.log(typeof box2);           //Object
console.log(box2 instanceof Object);//true`}
                    </code>
                  
                </pre>
                <div style={{lineHeight:"25px",paddingTop:"8px",paddingBottom:"8px"}}>
                    从结果中可以看出，box1和box2都是继承object，但是根本没法看出到底属于哪个实例；这个时候出现了构造函数;这种方式，需要用new去一个对象,看如下代码:
                </div>
                <pre className="hljs"> 
                    <code>
{`function Box(name,age){//构造函数模式(构造函数首字母大写)
this.name = name;
this.age = age;
this.run = function(){
    return this.name + this.age + '运行中...';
}
}

var box1 = new Box('Tom', 100); //通过new这个构造函数来实例化一个对象
console.log(box1.run());
console.log(box1 instanceof Object); //true
console.log(box1 instanceof Box); //true; `}
                    </code>
                </pre>
                <div style={{lineHeight:"25px",paddingTop:"8px",paddingBottom:"8px"}}>
                    从运行的结果可以看出，box1除了从属于Object之外，还从属于Box(即构造函数)，这样就能清楚的看出所创建的对象来源于哪个构造函数；<br/>
                    思考：构造函数中并没有return，那为什么new一下构造函数，能创建一个对象？new的过程中，构造函数内部做了哪些工作，请看以下代码:   
                </div>
                <pre className="hljs"> 
                    <code>
{`function Box(){
this.name = "Tom";
    console.log(this);
}
Box();//window
new Box();//Box {name:"Tom"}对象`}
                    </code>
                </pre>
                <div style={{lineHeight:"25px",paddingTop:"8px",paddingBottom:"8px"}}>
                    其实，构造函数在new实例化的时候做了4件事情，看以下代码：
                </div>
                <pre className="hljs"> 
                    <code>
{`var obj  ={};//首先会创建一个新的对象
obj.__proto__ = Box.prototype;  //然后把构造函数的prototype挂在到空对象的__proto__上(这里不做深入讲解)；
Box.call(obj);  //然后把this指向从window变到obj，并且赋值
return obj;  //最后return回来这个对象`}
                    </code>
                </pre>
                <div style={{lineHeight:"25px",paddingTop:"8px",paddingBottom:"8px"}}>
                    所以说，用new去实例化一个对象的时候，实质上最后也是返回一个对象；<br/>
                    在了解构造函数以后，来看一下prototype(原型)是怎么一回事；先来看一段代码：                
                </div>
                <pre className="hljs"> 
                    <code>
{`function Box(name,age){
    this.name = name;
    this.age = age;
};
Box.prototype.run = function(){
    return this.name+this.age+"运行中";
};
var box1 = new Box("tom","20");
var box2 = new Box("jack","26");
box1.run();//tom20运行中
box2.run();//jack26运行中
typeof box1.run  //function
typeof box2.run  //function
box1.run === box2.run  //true
Box.prototype.constructor == Box //true
`}
                    </code>
                </pre>
                <div style={{lineHeight:"25px",paddingTop:"8px",paddingBottom:"8px"}}>
                    从上面的代码可以看出，box1和box2两个实例化后的对象都有run这个方法，并且这个方法是共用的，这个方法可以在box1.__proto__中可以找到，这里就可以解释new实例化一个对象的时候第二步写的obj.__proto__ = Box.prototype;
                    代码的最后一行，表明了prototype有一个默认的constructor属性指向构造函数；                
                </div>

            </div>
        </div>)
    }

    componentDidMount(){
        //hljs.initHighlighting();
    }
}