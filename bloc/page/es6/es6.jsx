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
{`set结构：
var set = new Set();
set数据类型包括add,delete,has,keys,values,entries等方法,for...of循环

map结构：
var map = new Map();
map数据类型包括add,delete,has,keys,values,entries等方法,for...of循环

class:
静态方法和静态变量用static表示，静态属性不能用实例访问，静态属性会被继承；
继承类中用super表示父类的构造函数；
super()只能在子类的constructor中调用；
super()返回的是子类的实例（super()相当于A.prototype.constructor.call(this)）;`}           
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

        // function a(){
        //     return new Promise(function(resolve,reject){
        //         setTimeout(function(){
        //             resolve("aaa")
        //         },2000)
        //     });
        // }

        // async function b(){
        //     //console.log(await a());
        //     //console.log(await a());
        //     var aa = await a();
        //     var bb = await a();
        //     console.log(aa+bb)
        //     debugger;
        //     return bb

        // }

        // console.log(b())

        // class A{
        //     constructor(x,y){
        //         this.x = x;
        //         this.y = y;
        //     }
        //     toString(){
        //         return this.x+","+this.y
        //     }
        // }

        // class B extends A{
        //     // constructor(){
        //     //     super(1,2);
                
        //     // }
        //     toString(){
        //         return super.toString()+"bbbbb";
        //     }
        //     name(){
        //         alert(123);
        //     }
        // }

        // var b = new B();
        // b.x = 123;
        // b.y = "asd";
        // console.log(b.toString());
        // var a = {
        //     name:"chenze",
        //     age:12
        // };
        // var b = ["a","b","c"]
        // for(let i of Object.values(b)){
        //     console.log(i)
        // }
        // var a = {name:"chenze"};
        // console.log(a.hasOwnProperty("name"));
        // delete a.name
        // console.log(a.hasOwnProperty("name"));
        var arr = [4,6,78,65,43,3,44];

        function mergeSort(arr){
            if(arr.length<=1){
                return arr;
            }else{
                var mid = Math.floor((0+arr.length)/2);
                var leftPart = arr.slice(0,mid);
                var rightPart = arr.slice(mid);
                return merge(mergeSort(leftPart),mergeSort(rightPart));
            }
        }

        function merge(a,b){
            var x = 0;
            var y = 0;
            var mergeArr = [];
            while(x<a.length&&y<b.length){
                if(a[x]<b[y]){
                    mergeArr.push(a[x]);
                    x++;
                }else{
                    mergeArr.push(b[y]);
                    y++;
                }
            }
            return [...mergeArr,...a.slice(x),...b.slice(y)]
        }
       // merge(a,b);
        console.log(mergeSort(arr))
    } 
}

