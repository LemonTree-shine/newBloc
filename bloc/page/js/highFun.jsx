import React,{Component,ReactDOM} from "react";
import Prism from 'prismjs';

export default class HighFun extends Component{
    render(){
        return <div>
            高阶函数
        </div>
    }
    componentDidMount(){
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

        function a(){
            var aa = 0;
            function b(num){
                if(num){
                    aa += num;
                    return b;
                }else{
                    return aa;
                }
            }
            return b;
        }

        var sum = a();
        console.log(sum(18)(19)(100)());
    }
}