import React, { Component, ReactDOM } from "react";
import "../style/interview.less";
import Prism from 'prismjs';

export default class Interview extends Component {
    render() {
        return (<div className="interview">
            <div className="content">
                <div className="title">1.js基本类型</div>
                <pre className="hljs">
                    <code className="lang-css">
                        String,Number,Boolean,Undefined,Null
                    </code>
                </pre>
                <div className="title">js引用类型</div>
                <pre className="hljs">
                    <code className="lang-css">
                        Object
                    </code>
                </pre>
                <div className="title">2.区分数据类型</div>
                <pre className="hljs">
                    <code className="lang-css">
                        {
                            `
var a = "aaa";
var b = 123;
var c = true;
var d = {};
var e = [];
var f = null;
var g = undefined;

第一种：typeof;无法区分数组，对象和null；
console.log(typeof a);  //string
console.log(typeof b);  //number
console.log(typeof c);  //boolean
console.log(typeof d);  //object
console.log(typeof e);  //object
console.log(typeof f);  //object
console.log(typeof g);  //undefined


第二种：instanceof;可以区分数组和对象
console.log(d instanceof Object) //true
console.log(e instanceof Array)  //true

第三种：constructor;
console.log(a.constructor);  //ƒ String() { [native code] }
console.log(b.constructor);  //ƒ Number() { [native code] }
console.log(c.constructor);  //ƒ Boolean() { [native code] }
console.log(d.constructor);  //ƒ Object() { [native code] }
console.log(e.constructor);  //ƒ Array() { [native code] }

第四种：Object.prototype.toString;可以区分出所有类型，包括function；
console.log(Object.prototype.toString.call(a));  //[object String]
console.log(Object.prototype.toString.call(b));  //[object Number]
console.log(Object.prototype.toString.call(c));  //[object Boolean]
console.log(Object.prototype.toString.call(d));  //[object Object]
console.log(Object.prototype.toString.call(e));  //[object Array]
console.log(Object.prototype.toString.call(f));  //[object Null]
console.log(Object.prototype.toString.call(g));  //[object Undefined]`}
                    </code>
                </pre>
                <div className="title">3.变量提升</div>
                <pre className="hljs">
                    <code className="lang-css">
                        {`
var a = 100;
(function(){
    console.log(a);  //undefined
    a = 5;
    console.log(a);  //5
    console.log(window.a);  //100
    var a = 10;
    console.log(a)  //10
})()

执行函数内部变量提升以后变为：
var a;
console.log(a);
a = 5;
console.log(a);
console.log(window.a);
a = 10;
console.log(a);
    `}
                    </code>
                </pre>
                <div className="hljs">
                    这里可以清楚的看出，第一个console.log打印出来的a只是定义过的，并没有赋值，所以是undefined;第二个打印出的是赋值过a=5之后的，所以是5；
                第三个打印出的是全局变量，所以是100；第四个打印出的是赋值过a=10之后的，所以是10；
        </div>
                <div className="title">4.数组去重</div>
                <pre className="hljs">
                    <code className="lang-css">
                        {`
传统方式:
var a = [1,1,2,3,4,3,3,5,5];
var b = [];
a.forEach((value,index)=>{
    if(b.indexOf(a[index])=="-1"){
        b.push(a[index])
    }
});
console.log(b);  //[1, 2, 3, 4, 5]`}
                    </code>
                    <code className="lang-css">
                        {`
es6方式:
var a = [1,1,2,3,4,3,3,5,5];
var b = new Set(a);
console.log([...b]);  //[1, 2, 3, 4, 5]
        `}
                    </code>
                </pre>
                <div className="title">去除字符串前后空格</div>
                <pre className="hljs">
                    <code className="lang-css">
                        {`
var a = "   asdasd   asdasdasd   ";
String.prototype.trim = function(){
    return this.replace(/(^\\s*)|(\\s*$)/,value=>{
        return ""
    })
}
console.log(a.trim()); //asdasd   asdasdasd
        `}
                    </code>
                </pre>
                <div className="title">首字母大写</div>
                <pre className="hljs">
                    <code className="lang-css">
                        {`
var a = "adsdsd sdsdAasd  AdffSDFas aa";
console.log(a.toLowerCase().replace(/^[a-zA-Z]|(\\s+[a-zA-Z])/g,value=>{
    return value.toUpperCase();
}));   

//Adsdsd Sdsdaasd  Adffsdfas Aa
        `}
                    </code>
                </pre>
                <div className="title">数字按照三位数分割</div>
                <pre className="hljs">
                    <code className="lang-css">
                        {`
var a = 12345678;
var b = a.toString().split("").reverse().join("").replace(/\\d{3}/g,value=>{
    return value+","
}).split("").reverse().join("").replace(/^,/,"");
console.log(b);  //12,345,678
        `}
                    </code>
                </pre>
                <pre className="hljs">
                    <code className="lang-css">
                        {`
方式2:
var a = "123123123375435734522";
console.log(a.replace(/\\B(?=(\\d{3})+(?!\\d))/g,",")); //123,123,123,375,435,734,522`}
                    </code>
                </pre>
                <div className="hljs">
                    {`正则说明：\\B表示非单词边界，排除了首个会出现分隔符的情况；
            ?=\\d{3}+表示说匹配的空字符串后面必须三位数长度的倍数。3位数，6位数，9位数；
            ?!\\d表示匹配的后面不能出现单个数字，确保了三位数倍数的匹配`}

                </div>

                <div className="title">setTimeout和promise优先级</div>
                <pre className="hljs">
                    <code className="lang-css">
                        {`
setTimeout(function(){
    console.log("d");
},0)
var promise = new Promise((resolve,reject)=>{
    console.log("a");
    resolve();
});
promise.then(()=>{
    console.log("b");
});
console.log("c");

执行结果:a,c,b,d;
结论:promise.then > setTimeout
                `}

                    </code>
                </pre>

                <div className="title">二分法数据查找</div>
                <pre className="hljs">
                    <code className="lang-css">
                        {`
var a = [1, 2, 3,123,23,4,6,7,8,898,124,45645];

//先冒泡排序
a.sort(function(a,b){
    return a-b
});
//console.log(a);

function binarySearch(arr,curNum,leftSet,rightSet){
    //console.log(leftSet,rightSet);
    if((rightSet-leftSet)&lt;=1){
        if(curNum==arr[leftSet]){
            console.log(arr[leftSet],leftSet);
        }else if(curNum==arr[rightSet]){
            console.log(arr[leftSet],rightSet);
        }else{
            console.log("没有找到");
        }
    }else{
        //debugger;
        var middle = Math.floor((rightSet+leftSet)/2);
        if(arr[middle] == curNum){
            console.log(middle,arr[middle]);
        }else if(arr[middle] &lt; curNum){
            console.log("在右边");
            return binarySearch(arr,curNum,middle+1,rightSet);
        }else if(arr[middle] &gt; curNum){
            console.log("在左边");
            return binarySearch(arr,curNum,0,middle-1);
        }
    } 
}

binarySearch(a,45645,0,a.length-1);   //找到了 45645 11
`}
                    </code>
                </pre>




            </div>
        </div>)
    }
    componentWillMount() {

    }
    componentDidMount() {
        //hljs.initHighlighting();  
        Prism.highlightAll();
    }
}