import React,{Component,ReactDOM} from "react";

export default class StringPage extends Component{
    render(){
        return (<div>
            <div className="content">
                <div className="title">1.toString,String</div>
                <pre className="hljs"> 
                    <code>
                        <div>var str = 18;</div>
                        <div>console.log(typeof str.toString());  //string</div>
                        <div>console.log(typeof String(str));  //string</div>
                        <div>console.log(typeof str);  //number  不改变原值类型</div>
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>2.split(和数组join对应)</div>
                <pre className="hljs"> 
                    <code>
                        <div>用法:string.split(str,max);str表示分隔符，max表示分割出来的数组的最大长度</div>
                        <div>var str = "abcdefg";</div>
                        <div>console.log(str.split(""));  //["a", "b", "c", "d", "e", "f", "g"]</div>
                        <div>console.log(str.split("",3));  //["a", "b", "c"]</div>
                        <div>console.log(str.split("c"));  //["ab", "defg"]</div>
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>3.replace</div>
                <pre className="hljs"> 
                    <code>
                        <div>var a = "my name is lemon";</div>
                        <div>var b = a.replace("lemon","tom");</div>
                        <div>console.log(b); //"my name is tom"</div>
                        <div>console.log(a); //"my name is lemon"  原字符串没有改变 </div>
                    </code>
                    <code>
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
                    <code>
                        <div>match:返回一个数组，内容是所有匹配的值；</div>
                        <div>var a = "aaa bbb ccc ddd";</div>
                        <div>{`var b = a.match(/[a-z]\{3\}/g);`}</div>
                        <div>console.log(b); //["aaa", "bbb", "ccc", "ddd"]</div>
                    </code>
                    <code>
                        <div>test:判断字符串是否匹配正则表达式，返回布尔类型（true或false）</div>
                        <div>var a = "aaa bbb ccc ddd";</div>
                        <div>{`var b = /^[a-z]\{3\}/.test(a);`}</div>
                        <div>{`var c = /^[a-z]\{4\}/.test(a);`}</div>
                        <div>console.log(b);  //true a是以3个字母开头的，所以返回true</div>
                        <div>console.log(c);  //false a是3个字母开头，不是4字母开头，所以匹配4哥字母开头返回false</div>
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>5.slice,substring,substr</div>
                <pre className="hljs"> 
                    <code>
                        <div>string.slice(firstIndex,endIndex); firstIndex和endIndex可以为负数</div>
                        <div>var a = "hello world";</div>
                        <div>var b = a.slice(2,7);</div>
                        <div>console.log(b) //"llo w" 不包括最后一个索引的值</div>
                        <div>console.log(a) //hello world  原字符串不改变</div>
                    </code>
                    <code>
                        <div>string.substring(firstIndex,endIndex); firstIndex和endIndex不能为负数</div>
                        <div>var a = "hello world";</div>
                        <div>var b = a.substring(2,7);</div>
                        <div>console.log(b);   /*"llo w" 不包括最后一个索引的值*/</div>
                        <div>console.log(a);   /*"hello world"  原字符串不改变*/</div>
                    </code>
                    <code>
                        <div>string.substr(firstIndex,length); firstIndex为起始位置，length为截取的长度</div>
                        <div>var a = "hello world";</div>
                        <div>var b = a.substr(2,7);</div>
                        <div>console.log(b);   /*"llo wor"*/</div>
                        <div>console.log(a);   /*"hello world"  原字符串不改变*/</div>
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>6.toLowerCase,toUpperCase</div>
                <pre className="hljs"> 
                    <code>
                        <div>var a = "Hello World";</div>
                        <div>var b = a.toLowerCase();</div>
                        <div>var c = a.toUpperCase();</div>
                        <div>console.log(c);  /*HELLO WORLD  字母大写*/</div>
                        <div>console.log(b);  /*hello world  字母小写*/</div>
                        <div>console.log(a);  /*Hello World  原字符串不变*/</div>
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>7.trim</div>
                <pre className="hljs"> 
                    <code>
                        <div>var a = "   Hello World   ";</div>
                        <div>var b = a.trim();</div>
                        <div>console.log(b); /*"Hello World"  去除字符串前后空格*/</div>
                        <div>console.log(a); /*"   Hello World   "  原字符串不变*/</div>
                    </code>
                </pre>
            </div>
        </div>)
    }
    componentDidMount() {
        //hljs.initHighlighting();

        var a = "   Hello World   ";
        var b = a.trim();
        console.log(b); /*"Hello World"  去除字符串前后空格*/
        console.log(a); /*"   Hello World   "  原字符串不变*/
        
    }
}