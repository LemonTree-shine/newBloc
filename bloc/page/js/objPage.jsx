import React,{Component,ReactDOM} from "react";

export default class ObjPage extends Component{
    render(){
        return (<div>
            <pre>
                <code>
{`function Stack(){
    var items = [];
    //添加一个元素到栈顶
    this.push = function(item){
        items.push(item)
    }
    //删除栈顶元素
    this.pop = function(){
        return items.pop();
    }
    //查看栈顶元素
    this.peek = function(){
        return items[items.length-1]
    }
    //清空栈的所有元素
    this.clear = function(){
        items = []
    }
    //判断栈是不是空
    this.empty = function(){
        if(items.length==0){
            return true;
        }else{
            return false;
        }
    }
    //栈的长度
    this.size = function(){
        return items.length;
    }
    //查看栈的内容
    this.print = function(){
        return items.toString();
    }
}`}
                </code>
            </pre>
        </div>)
    }
    componentDidMount(){
        hljs.initHighlighting(); 


        function Stack(){
            var items = [];

            //添加一个元素到栈顶
            this.push = function(item){
                items.push(item)
            }

            //删除栈顶元素
            this.pop = function(){
                return items.pop();
            }

            //查看栈顶元素
            this.peek = function(){
                return items[items.length-1]
            }

            //清空栈的所有元素
            this.clear = function(){
                items = []
            }

            //判断栈是不是空
            this.empty = function(){
                if(items.length==0){
                    return true;
                }else{
                    return false;
                }
            }

            //栈的长度
            this.size = function(){
                return items.length;
            }

            //查看栈的内容
            this.print = function(){
                return items.toString();
            }
        }

        function devideby2(num){
            var stack = new Stack();
            var rem;
            var stackString = "";

            while(num>0){
               rem = num%2; 
               num = Math.floor(num/2);
               stack.push(rem);
            }
            

            while(!stack.empty()){
                stackString+=stack.pop();
            }

            console.log(stackString);
        }
        devideby2(1000);

        //链表练习
        function LinkList(){
            
            var head = null;
            var length = 0;

            function Node(element){
                this.element = element;
                this.next = null;
            }

            this.append = function(element){
                var node = new Node(element);
                var current;

                if(!head){
                    head = node;
                }else{
                    current = head;
                    while(current.next){
                        current = current.next;
                    }
                    current.next = node;
                }
                length++;
            }
        }

        var linklist = new LinkList();
    }
}