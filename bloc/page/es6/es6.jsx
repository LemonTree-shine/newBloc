import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { DatePicker } from 'antd';
import { Button } from 'antd';

export default class Es6 extends Component{
    render(){
        return <div className="content">

            <pre className="hljs">
                <code>
                    let不存在变量提升
                    var定义变量在代码块中会变成全局变量；(使用let可以解决这个问题)；
                </code>
            </pre>
            <br/>
            <pre className="hljs">
                <code>
{`function(){}和()=>{}的区别
function:在执行的时候定义this；
()=>{}:在函数声明的时候定义this
`}
                </code>
            </pre>
            <pre className="hljs">
                <code>
                    set结构：
                    var set = new Set();
                    set数据类型包括add,delete,has,keys,values,entries等方法,for...of循环

                    map结构：
                    var map = new Map();
                    map数据类型包括add,delete,has,keys,values,entries等方法,for...of循环
                </code>
            </pre>
        </div>
    }
    a =10;
    person = "chenze111"
    componentDidMount(){
        // var [a,b,c] = [1,2,3]
        // console.log(a,b,c);

        // //解构赋值
        // var {a:asd="asdasd",b,c} = {b:"b",c:"c"}
        // console.log(asd,b,c);

        // var a = [1,2];
        // var b = a;
        // b = [10];
        // console.log(a,b);

        // let hello = "hello";

        // let person = {
        //     name:"chenze",
        //     hello,
        //     run(){
        //         return this.name+","+this.hello
        //     }
        // }

        // console.log(person);
        // console.log(person.run());

        // var set = new Set();
        // ["asd",2,3,4,4,5,4,5,3,3,6,7,6,8].forEach((value)=>{
        //     set.add(value);
        // });

        // console.log(set.has(2));

        // set.delete(2)

        // console.log(set.has(2));
        
        // for(let key of set.keys()){
        //     console.log(key);
        // }

        // for(let key of set.values()){
        //     console.log(key);
        // }

        // for(let key of set){
        //     console.log(key);
        // }

        // for(let key of set.entries()){
        //     console.log(key);
        // }

        // var map = new Map();
        // map.set("name","chenze");
        // map.set("age","111");

        // console.log(map.size);
        // console.log(map.has("age"));
        // map.delete("age")
        // console.log(map.size);
        // console.log(map.has("age"));
        // console.log(map.keys());

        // for(let key of map){
        //     console.log(key);
        // }

        // for(let key of map.keys()){
        //     console.log(key);
        // }
        
        // for(let key of map.values()){
        //     console.log(key);
        // }

        // for(let key of map.entries()){
        //     console.log(key);
        // }

        // var a = new Promise(function(resolve,reject){
        //     setTimeout(function(){
        //         resolve("a")
        //     },1000)
        // });

        // var b = new Promise(function(resolve,reject){
        //     setTimeout(function(){
        //         resolve("b")
        //     },3000)
        // });

        // Promise.all([a,b]).then(function(data){
        //     console.log(data);
        // });
        // function* f() {
        //     console.log('执行了！')
        //   }
          
        //   var generator = f();
          
        //   setTimeout(function () {
        //     console.log(generator.next())
        //   }, 2000);

        function read(str){
            return new Promise(function(resolve,reject){
                setTimeout(() => {
                    resolve(str);
                }, 2000);
            });
        }

        async function asyncRead(str){
            var str1 = await read(str);
            return str1;
        }
        //console.log(asyncRead("asdasd"));


        function sum(num){
            if(num ==1){
                return num;
            }
            return num+sum(--num)
        }
        console.log(sum(5))

    } 
}

