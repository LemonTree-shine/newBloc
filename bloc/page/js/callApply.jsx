import React,{Component,ReactDOM} from "react";

export default class CallApply extends Component{
    render(){
        return (<div>
            <div className="content">
                <div className="title">1. 每个函数都包含两个方法：call()方法和apply()方法。<br/>
                    2. 相同点：这两个方法的作用是一样的。<br/>
                    3. 区别：两个方法传入参数的形式不一样;(call是按序一个一个传入call(obj,x1,x2),apply是传入一个数组apply(obj,[x1,x2]));<br/>
                    由于两者的性质差不多，我这里只用call说明。<br/>
                    作用：改变调用函数的this指向;
                </div>
                <br/>
                <div className="title">call()方法使用示例:</div>
                <pre className="hljs"> 
                    <code>
{`var name = "window";
var obj = {
    name:"this obj",
    sayName:function(str){
        console.log(this);
        return this.name+str;
    }
}

obj.sayName.call(obj,"...");    //this obj...   this->obj
obj.sayName.call(window,"..."); //window...     this->window`}
                    </code>
                </pre>
                <div style={{lineHeight:"25px",paddingTop:"8px",paddingBottom:"8px"}}>
                    上面代码输出结果可以看出：调用obj.sayName.call(window,"...")这句时，函数返回的是window下面的name；说明此时函数内部this是指向了window;<br/>
                    看一个实际使用call的案例(定义或者初始化一个对象):
                </div>
                <pre className="hljs"> 
                    <code>
{`var obj1 = {};
var obj2 = {
    name:"tom",
    age:"26",
    adress:"hangzhou"
};

function CreateObj(){
    this.name = "初始name";
    this.age = "初始age";
    this.adress = "初始adress";
    this.sex = "1";
}

console.log(obj1);        //{}
CreateObj.call(obj1);
console.log(obj1);        //{name: "初始name", age: "初始age", adress: "初始adress", sex: "1"}

console.log(obj2);        //{name: "tom", age: "26", adress: "hangzhou"}
CreateObj.call(obj2);
console.log(obj2);        //{name: "初始name", age: "初始age", adress: "初始adress", sex: "1"}`}
                    </code>
                </pre>
                <div style={{lineHeight:"25px",paddingTop:"8px",paddingBottom:"8px"}}>
                    通过调用call方法，初始化了对象了原有属性，也对对象进行了扩展，在原型继承中也会用到call方法用于继承父类的属性和方法;<br/>
                    还有一种经常看到的call的用法：
                </div>
                <pre className="hljs"> 
                    <code>
{`function A(a,b){
    /**
        arguments.forEach(value => {      直接用arguments.forEach会报错(arguments.forEach is not a function)
            console.log(value);
        });
    */
    
    Array.prototype.slice.call(arguments).forEach(value => {
        console.log(value);  //会打印出每一个传入的参数
    });

    console.log(arguments instanceof Array); 
    /*false  说明arguments不是一个数组类型，所以不存在forEach;*/ 

    console.log(Array.prototype.slice.call(arguments) instanceof Array); 
    /*true  通过调用call，类型变为了数组类型，当然会存在forEach方法；*/

    console.log(Object.prototype.toString.call(arguments)); 
    /*[object Arguments]  这里表明arguments原本是一个类似于Array的结构*/

    console.log(Object.prototype.toString.call(Array.prototype.slice.call(arguments)));  
    /*[object Array]   这里也看出了，通过调用call方法，变成了数组类型*/
}

A(1,2);`}
                    </code>
                </pre>
                <div style={{lineHeight:"25px",paddingTop:"8px",paddingBottom:"8px"}}>
                    上面这个经典的小案例也可以反应出用call方法可以使类似数组的结构去继承数组的一些方法，便于对数据的操作;
                </div>
            </div>
        </div>)
    }
    componentDidMount(){
        //hljs.initHighlighting();
    }
}