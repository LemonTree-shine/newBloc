import React,{Component,ReactDOM} from "react";
import Prism from 'prismjs';

export default class ObjPage extends Component{
    render(){
        return (<div>
            <pre className="hljs"> 
                <code className="lang-css">
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
        //hljs.initHighlighting(); 
        Prism.highlightAll();

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
        //devideby2(1000);

        //链表练习
        function LinkList(){
            
            var head = null;
            var length = 0;

            function Node(element){
                this.element = element;
                this.next = null;
            }

            //链表的末尾插入一个数据
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

            //删除链表指定位置的值
            this.remove = function(position){
                var current = head;
                var previous;
                var index = 0;
                if(position>-1&&position<length){
                    //删除链表的第一个数据
                    if(position===0){
                        head = current.next;
                    }else{
                        while(index++<position){
                            previous = current;
                            current = current.next;
                        }
                        previous.next = current.next;

                    }
                    length--;
                }else{
                    return null;
                }
            }

            //查看链表结构
            this.print = function(){
                console.log(head,length);
            }
        }

        var linklist = new LinkList();
        linklist.print();
        linklist.append("first");
        linklist.print();
        linklist.append("second");
        linklist.print();
        linklist.append("third");
        linklist.print();
        linklist.remove(0);
        linklist.print();
    }
}