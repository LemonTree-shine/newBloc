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

举例两个个简单的高阶函数:计算两个数的绝对值的和
function sum(a,b,f){
    return f(a)+f(b)
}
sum(-10,-34,Math.abs) //-44

基于map的二次封装：
function hmap(handleler,arr){
    return arr.map(handleler);
}

hmap(function(list){
    return list*list
},[1,2,3]);   //[1,4,9]

hmap(function(list){
    return list+"..."
},[1,2,3]);   //[1...,2...,3...]

`}
                </code>
            </pre>
        </div>
    }
    componentDidMount(){
        Prism.highlightAll();
        
        function handleler(value){
            return value*value
        }

        function highMap(fn){
            return function (arr){
                return arr.map(fn);
            }
        }

        var a = highMap(handleler)([1,2,3]);
        console.log(a);
    }
}