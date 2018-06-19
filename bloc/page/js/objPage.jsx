import React,{Component,ReactDOM} from "react";

export default class ObjPage extends Component{
    render(){
        return (<div>
            js实现一个栈
        </div>)
    }
    componentDidMount(){
        function Stack(){
            var items = [];
            this.push = function(item){
                items.push(item)
            }
            this.print = function(){
                return items.toString();
            }
        }

        var a = new Stack();
        a.push(1)
        console.log(a.print())
    }
}