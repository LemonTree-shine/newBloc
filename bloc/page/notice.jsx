import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import "../style/notice.less";

export default class Notice extends Component{
    render(){
        return <div className="notice-page">
            <div className="title">知识点总结</div>
            <div className="common-part">
                <p>1.字符串和对象相加，首先会调用valueOf(),然后才会调用toString()方法(new Date除外，因为new Date的valueOf和toString都有原始值)；</p>
                <p>2.用==和布尔类型做判断，都先转化成Number类型；</p>
                <p>3.var a = 10;理解 a++ 和 ++a；</p>
                <pre>
                    <code>
                        {'4.理解var a = 1; var b={ valueOf(){ return "1" } },console.log(a==b)  //true'}
                    </code>
                </pre>
                <p>4.var a = function和function a()的区别;funtion会把函数名和函数体都提前，可以在申明函数前调用该函数</p>
                <p>5.了解use strict严格模式和非严格模式的区别</p>
                <p>6.理解delete只能删除一个自有属性，不能删除一个继承属性(自己可以理解为引用属性，删除一个引用属性，引用地址依然存在)</p>
                <p>7.理解Object.defineProperty配置对象的value,writable,enumerable,configurable</p>
                <p>8.Object.getOwnPropertyDescriptor读取对象属性的配置，Object.defineProperty设置对象的配置属性</p>
                <p>9.Object.create和new Object()的区别</p>
                <p>10.preventExtensions,seal,freeze表示对对象的限制，理解其区别</p>
                <p>11.JSON.stringify只能序列化对象的可枚举属性，不能序列化原型属性</p>
                <p>12.理解稀疏数组(类似[1,,,2,,"asdasd"])的for循环和foreach循环的区别</p>
                <p>13.delete不影响数组长度,将数组变成一个稀疏数组</p>
            </div>
        </div>
    }
    componentDidMount(){

        //任何函数的constructor都是Function构造器
        //任何函数的__proro__都是一个特殊的匿名函数（该特殊的匿名函数是Function.prototype）
        //特殊匿名函数的__proto__指向一个原始object的原型(Object.prototype)


        //解释Object instanceof Function为true

        //首先，任何函数的__proro__都是一个特殊的匿名函数
        //那这里Object是一个构造函数，那

        //Function instanceof Object
        // var a = {};
        // console.log(a instanceof Object);
        // console.log(a.__proto__);
        //console.log(Object.prototype);


           
    }
}

