import React,{Component,ReactDOM} from "react";
import "../css/style/js.less";

export default class Closure extends Component{
    render(){
        return (<div className="c-closure">
            <div>
                <div className="title">一、闭包的概念</div>
                <div className="hljs">
                    我的理解是，闭包就是能够读取其他函数内部变量的函数。
                    由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。
                    所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
                </div>
                <div className="title" style={{marginTop:"20px"}}>二、闭包的用途</div>
                <div className="hljs">
                    闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
                    怎么来理解这句话呢？请看下面的代码。
                </div>
                <pre>
                    <code className="hljs">
{`function a(){
    var a = 10;
    return function(){
        return a;
    }
}
var aaa = a();
aaa(); // 10`}
                    </code>
                </pre>
                <div className="hljs">
                    从上面代码的运行结果可以看出，a函数在运行过后的变量在返回的结果中有用到的情况下，变量并没有销毁。为了能够更加了解闭包，请看下面的代码。
                </div>
                <pre>
                    <code className="hljs">
{`function a(){
    var a = 0;
    return function(){
        a++;
        return a;
    }
}
var aaa = a();
var bbb = a();
aaa(); // 1
aaa(); // 2
bbb(); // 1
bbb(); // 2`}
                    </code>
                </pre>
                <div className="hljs">
                    从上面代码的运行结果可以看出，a函数在运行过后的变量在返回的结果中有用到的情况下，变量并没有销毁；而且在多次调用的情况下是相互独立的。
                </div>
            </div>
        </div>)
    }
    componentDidMount(){
        hljs.initHighlighting();  
    }
}