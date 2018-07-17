import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
//import Paginator from "../../component/paginator/paginator.jsx";

import { Button, CheckBox, CheckBoxGroup, Dlog, Form, Input, Paginator, Radio, GroupRadio, Toast } from "../../component/common.js";

export default class ReactProps extends Component {
    render() {
        return <div>
            <div className="title">父传子</div>
            <pre className="hljs"> 
                <code>
                    {`<component message="hello world"/>`}
                </code>
            </pre>
            <div className="sub-title mt10">component为一个组件，在组件中通过this.props.message可以拿到父组件传递的数据。</div>
            <div className="title">子传父</div>
            <pre className="hljs"> 
                <code>
{`有个组件A:
class A extends Component{
    render(){
        return <div>{this.message}</div>
    }
    message = "hello world";
    componentDidMount(){
        setTimeout(()=>{
            this.props.handleClick(this.message);
        },5000);
    }
}

使用组件A时，传入一个函数，会在A组件内部调用，通过参数把数据带给父组件，使用方式如下：
<A handleClick = {(message)=>{alert(message)}}/>`}
                </code>
            </pre>
            <div className="title mt15">同级组件传值</div>
            <pre className="hljs"> 
{`模拟一个场景：有一个Index组件，内部用了A,B两个组件，在A,B两个之间传递数据；
组件Index:
class Index extends Component{
    render(){
        return <div>
            <A message={this.state.message}/>
            <B handleClick={this.getData}/>
        </div>
    }

    constructor(){
        super();
        this.state = {
            message:"hello world"
        }
    }

    getData = (message)=>{
        this.setState({
            message:message
        });
    }
}

组件A:
class A extends Component{
    render(){
        return <div>
            <div>component A</div>
            <div>从B组件获取的message:{this.props.message}</div>
        </div>
    }
}

组件B:
class B extends Component{
    render(){
        return <div>component B</div>
    }
    message = "hello world";
    componentDidMount(){
        setTimeout(()=>{
            this.props.handleClick("get message from B");
        },5000);
    }
}
`}
            </pre>
            <div className="sub-title mt10">上面三个组件中，父组件：Index，子组件：A,B;</div>
            <div className="sub-title mt10">先看A组件:<span className="blue">{`<A message={this.state.message}/>`}</span>把Index组件中的state的值当做参数传给A组件</div>
            <div className="sub-title mt10">再看B组件:<span className="blue">{`<B handleClick={this.getData}/>`}</span>把Index组件中定义的函数传给B组件，在这个方法中调用了setState方法，说明当调用这个方法的时候，Index会重新渲染；</div>
            <div className="sub-title mt10">分析传值过程：(1)B组件中调用传入的方法，并把B组件中的数据当作参数传入方法中；</div>
            <div className="sub-title mt10">(2)Index组件中的getData方法获取到B组件传的参数，更新state中的message，并调用setState重新渲染Index组件；</div>
            <div className="sub-title mt10">(3)Index渲染了，A组件也重新渲染，获取到更新以后message，完成了同级组件的传值。</div>
            <div className="title mt15">总结</div>
            <div className="sub-title mt10">
                传值模式时通用的，不管时vue还是react，传值的模式都是这样；只要理解了传值的思想，我相信各种框架用起来都会得心应手。
            </div>
        </div>
    }
    constructor(){
        super();
        this.state = {
            message:"hello world"
        }
    }
    componentDidMount() {
        
    }

    getData = (message)=>{
        this.setState({
            message:message
        });
    }
}

class A extends Component{
    render(){
        return <div>
            <div>component A</div>
            <div>从B组件获取的message:{this.props.message}</div>
        </div>
    }
}

class B extends Component{
    render(){
        return <div>component B</div>
    }
    message = "hello world";
    componentDidMount(){
        setTimeout(()=>{
            this.props.handleClick("get message from B");
        },5000);
    }
}
