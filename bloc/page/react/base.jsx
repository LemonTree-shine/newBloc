import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

export default class ReactBase extends Component{
    render(){
        return <div>
            <div className="title">使用前准备(这里只讲es6中react的使用)</div>
            <pre className="hljs"> 
                <code>
                   npm,node,webpack,react,react-dom 
                </code>
            </pre>
            <div className="title mt15">如何使用？</div>
            <div className="sub-title fw700">1.html页面格式</div>
            <div className="sub-title">入口页面，contain将作为整个项目的容器</div>
            <pre className="hljs"> 
                <code>
{
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>demo</title>
    </head>
    <body>
        <div id="contain"></div>
    </body>
</html>`
}

                </code>
            </pre>
            <div className="sub-title fw700 mt15">2.入口js</div>
            <pre className="hljs"> 
                <code>
{
`index.js

import React,{Component,ReactDOM} from "react";   //react必须引入的库，没有为什么
import reactDOM,{render} from "react-dom";        //react必须引入的库，没有为什么

//渲染根节点
reactDOM.render(
    element,
    document.getElementById('contain')
);

说明:element可以为dom，也可以为一个react组件；
document.getElementById('contain')就是入口html中的容器;
该js通常也作为打包的入口文件`  

}
                </code>
            </pre>
            <div className="sub-title fw700 mt15">3.组件component</div>
            <pre className="hljs"> 
                <code>
{`import React,{Component,ReactDOM} from "react";   //react必须引入的库，没有为什么
import reactDOM,{render} from "react-dom";        //react必须引入的库，没有为什么

//组件基本结构
export default class Index extends Component{
    render(){
        return <div>
            Hello World!
        </div>
    }
}`}                   
                </code>
            </pre>
            <div className="sub-title mt10 red">说明:在react基本上所有的组件最终都是继承与Component这个基类。</div>
            <div className="sub-title mt10">{`这样就创建了一个Index组件。只要在其他js或者组件中import，直接通过<Index/>就可以使用该组件。`}</div>
            <div className="sub-title fw700 mt15">4.props传参</div>
            <div className="sub-title mt10">假设在已经有一个Index组件的情况下。</div>
            <pre className="hljs"> 
                <code>
{`<Index text = 'hello world'/>
通过上述方式调用，就可以在Index中通过this.props.text获取到hello world。`}
                </code>
            </pre>
            <div className="sub-title fw700 mt15">5.state和setState</div>
            <pre className="hljs"> 
                <code>
{`有如下一个Index组件
export default class Index extends Component{
    render(){
        return <div>
            {this.state.text}
        </div>
    }
    constructor(){
        super();
        this.state = {
            text:'hello world'
        }
    }
    componentDidMount(){
        this.setState({
            text:'HELLO WORLD'
        })
    }
}`}
                </code>
            </pre>
            <div className="sub-title mt10">在一个组件中，通常在constructor方法中定义this.state,
            然后在组件中可以通过this.state.xxx在组件中使用；假如你想改变数据，响应到界面，则需要通过调用setState方法，传入一个参数，这个方法的
            第一个参数为一个对象，当调用setState方法的时候，react会合并到this.state上，然后重新render界面；<br/>
            <span className="blue">也就是model->view的过程</span></div>

            <div className="sub-title fw700 mt15">6.生命周期</div>
            <div className="sub-title mt10">
                <div><span className="green">componentWillMount:</span>在渲染前调用</div>
                <div><span className="green">componentDidMount:</span>渲染完成后调用，dom操作和ajax请求等操作都在这里进行</div>
                <div><span className="green">componentWillReceiveProps:</span>在组件接收一个新的props的时候会被调用，组件首次渲染的时候不会调用</div>
                <div><span className="green">shouldComponentUpdate:</span>在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用(ps:通常不会用到这个生命周期函数)。</div>
                <div><span className="green">componentWillUpdate:</span>在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。</div>
                <div><span className="green">componentDidUpdate:</span>在组件完成更新后立即调用。在初始化时不会被调用。</div>
                <div><span className="green">componentWillUnmount:</span>在组件从 DOM 中移除的时候立刻被调用。</div>
            </div>
            <div className="sub-title fw700 mt15">如下有一个index组件测试生命周期的执行顺序</div>
            <pre className="hljs"> 
                <code>
{`export default class Index extends Component{
    render(){
        return <div>生命周期测试</div>
    }
    constructor(){
        super();
        console.log("constructor");
    }
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
}`}
                </code>
            </pre>
            <div className="sub-title mt10 red">
                执行结果：constructor,componentWillMount,componentDidMount;
                <div>在组件首次渲染的时候只调用生命周期中的三个方法；</div>
            </div>
            <div className="sub-title fw700 mt15">7.渲染一个数组</div>
            <div className="sub-title fw700">通过map方法处理数据，返回一个dom;用index组件举个🌰</div>
            <pre className="hljs"> 
                <code>
{`export default class Index extends Component{
    render(){
        return <div>{this.state.list.map((value,index)=>{
            return <div key={index}>{value}</div>
        })}</div>
    }
    constructor(){
        super();
        this.state = {
            list:["tom","timi","anna"]
        }
    }
}

最终渲染结果:
<div>tom</div>
<div>timi</div>
<div>anna</div>`}
                </code>
            </pre>
            <div className="sub-title mt15 red">结论:通常react中渲染列表数据都是通过map方法返回一个dom列表进行渲染；</div>
            <div className="sub-title fw700 mt15">8.获取dom(ref)</div>
            <div className="sub-title">react中通常用ref获取dom元素，用ref获取时，有两种方式获取：</div>
            <div className="sub-title">1: ref可以设置为一个字符串，然后通过<span className="green">this.refs.xxx</span>去获取，不推荐这种方式，以后版刻可能会废弃这个功能。</div>
            <div className="sub-title">2: ref为一个回调函数；定义<span className="green">{`ref = {el => this.refa = el}`}</span>,然后通过this.refa就可以获取到这个dom或者这个组件，推荐使用这种方式。</div>
            <div className="sub-title">看下面代码：</div>
            <pre className="hljs"> 
                <code>
{`export default class Index extends Component{
    render(){
        return <div ref={ el => this.odiv = el}>hello world</div>
    }
    constructor(){
        super();
    }
    componentDidMount(){
        console.log(this.odiv);
    }
}`}
                </code>
            </pre>
            <div className="sub-title mt15 red">
                结果：会打印出{`<div>hello world</div>`}；
            </div>
        </div>
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.odiv);
    }
}

class A extends Component{
    render(){
        return <div>ref</div>
    }
    constructor(props){
        super(props);
    }
}