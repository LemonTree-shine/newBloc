import React,{Component,ReactDOM} from "react";
import Prism from 'prismjs';

export default class HighFun extends Component{
    render(){
        return <div>
            <div className="title">常见的高阶函数</div>
            <pre  className="hljs">
                <code className="lang-css">
{`其实在正常的开发过程中，我们已经接触过很多高阶函数了。
常见的高阶函数：setTimeout,setInterval,forEach,map,some,every等等，都是高阶函数`}
                </code>
            </pre>
            <div className="title">什么是高阶函数</div>
            <pre  className="hljs">
                <code className="lang-css">
{`有三种情况的函数我们称之为高阶函数：
1.把一个函数作为参数的函数:
function a(fn,b){
    return fn(b);
}

2.把多个函数作为参数的函数:
function a(fn,fn2,b){
    fn(b);
    return fn(b)+fn2(b);
}

3.返回一个函数的函数:
function a(){
    return function(){
        return "hello world"
    }
}

举例一个简单的高阶函数:计算两个数的绝对值的和
function sum(a,b,f){
    return f(a)+f(b)
}
sum(-10,-34,Math.abs) //-44
`}
                </code>
            </pre>
        </div>
    }
    componentDidMount(){
        function a(a,b,f){
            return f(a)+f(b)
        }
        console.log(a(-10,-34,Math.abs))
        //arguments.callee递归解耦
        
        // function Map(type){
        //     return Object.prototype.toString.call(type);
        // }
        // console.log(Map(new Set()));
        // function map(handleler,list){
        //     return list.map(handleler)
        // }


        //优化
        // var a = map((value)=>{
        //     return value*value
        // },[1,2,3,4]);
        // console.log(a);

        // var b = map((value)=>{
        //     return value+10
        // },[1,2,3,4]);
        // console.log(b);

        //柯里化
        // function currying(handleler){
        //     return function(list){
        //         return list.map(handleler);
        //     }
        // }

        // var a = currying((i)=>{
        //     return i*i;
        // });

        // var b = currying((i)=>{
        //     return i+10
        // })

        // console.log(a([1,2,3]));
        // console.log(a([2,10,100]));
        // console.log(b([1,2,3]));
        // console.log(b([2,10,100]));

        // function a(){
        //     var aa = 0;
        //     function b(num){
        //         if(num){
        //             aa += num;
        //             return b;
        //         }else{
        //             return aa;
        //         }
        //     }
        //     return b;
        // }

        // var sum = a();
        // console.log(sum(18)(19)(100)());
        function fb(num){
            if(num==1||num==0){
                return num
            }else{
                return fb(num-1)+fb(num-2)
            }
        }
        console.log(fb(2));
    }
}