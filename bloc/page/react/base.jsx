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
            <div className="sub-title mt10">说明:在react基本上所有的组件最终都是继承与Component这个基类。</div>
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
            <div className="sub-title fw700 mt15">7.渲染一个数组</div>
        </div>
    }
    constructor(){
        super()
    }

    componentDidMount(){
    }
}