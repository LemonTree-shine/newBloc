import React,{Component,ReactDOM} from "react";
import Prism from 'prismjs';

export default class StringPage extends Component{
    render(){
        return (<div>
            <div className="content">
                <div className="title">1.toString,String</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`var str = 18;
console.log(typeof str.toString());  //string
console.log(typeof String(str));  //string
console.log(typeof str);  //number  不改变原值类型`}  
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>2.split(和数组join对应)</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`用法:string.split(str,max);str表示分隔符，max表示分割出来的数组的最大长度
var str = "abcdefg";
console.log(str.split(""));  //["a", "b", "c", "d", "e", "f", "g"]
console.log(str.split("",3));  //["a", "b", "c"]
console.log(str.split("c"));  //["ab", "defg"]`}  
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>3.replace</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`var a = "my name is lemon";
var b = a.replace("lemon","tom");
console.log(b); //"my name is tom"
console.log(a); //"my name is lemon"  原字符串没有改变`}                 
                    </code>
                    <code className="lang-css">
{`
可以用正则表达式匹配：
var a = "aaa bbb ccc ddd";
var b = a.replace(/(\\b|\\s{1,})[a-z]/g,function(value){
    return value.toUpperCase();  //匹配首字母，对首字母大写
});
console.log(b); //"Aaa Bbb Ccc Ddd"
`}
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>4.match,test</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`match:返回一个数组，内容是所有匹配的值；
var a = "aaa bbb ccc ddd";
var b = a.match(/[a-z]\{3\}/g);
console.log(b); //["aaa", "bbb", "ccc", "ddd"]

test:判断字符串是否匹配正则表达式，返回布尔类型（true或false）
var a = "aaa bbb ccc ddd";
var b = /^[a-z]\{3\}/.test(a);
var c = /^[a-z]\{4\}/.test(a);
console.log(b);  //true a是以3个字母开头的，所以返回true
console.log(c);  //false a是3个字母开头，不是4字母开头，所以匹配4哥字母开头返回false`}  
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>5.slice,substring,substr</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`string.slice(firstIndex,endIndex); firstIndex和endIndex可以为负数
var a = "hello world";
var b = a.slice(2,7);
console.log(b) //"llo w" 不包括最后一个索引的值
console.log(a) //hello world  原字符串不改变

string.substring(firstIndex,endIndex); firstIndex和endIndex不能为负数
var a = "hello world";
var b = a.substring(2,7);
console.log(b);   /*"llo w" 不包括最后一个索引的值*/
console.log(a);   /*"hello world"  原字符串不改变*/

string.substr(firstIndex,length); firstIndex为起始位置，length为截取的长度
var a = "hello world";
var b = a.substr(2,7);
console.log(b);   /*"llo wor"*/
console.log(a);   /*"hello world"  原字符串不改变*/`}                      
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>6.toLowerCase,toUpperCase</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`var a = "Hello World";
var b = a.toLowerCase();
var c = a.toUpperCase();
console.log(c);  /*HELLO WORLD  字母大写*/
console.log(b);  /*hello world  字母小写*/
console.log(a);  /*Hello World  原字符串不变*/`}        
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>7.trim</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`var a = "   Hello World   ";
var b = a.trim();
console.log(b); /*"Hello World"  去除字符串前后空格*/
console.log(a); /*"   Hello World   "  原字符串不变*/`}  
                    </code>
                </pre>
            </div>
        </div>)
    }
    componentDidMount() {
        //hljs.initHighlighting();
        Prism.highlightAll();

        var a = "   Hello World   ";
        var b = a.trim();
        console.log(b); /*"Hello World"  去除字符串前后空格*/
        console.log(a); /*"   Hello World   "  原字符串不变*/
        
    }
}