import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
import PropTypes from 'prop-types';

import Prism from 'prismjs';

export default class ContextType extends Component {
    render() {
        return <div>
            <div className="sub-title mt10">
                通常react传递数据都是通过props进行传递，但你在一些场景中，三级组件或者更深层级的组件需要获取顶层组件的数据
                这个时候通过props传递数据，需要每次层都传递，会比较麻烦，这个时候可以用context跨组件来传递数据，虽然说通过context
                传递数据用的不多，但是在特定场景还是会派上用处。下面我们来看一下如何通过context来传递数据：
            </div>
            <pre className="hljs"> 
                <code className="lang-css">
{`
父组件：
class Fat extends Component{
    render(){
        return <div>
            <A />
        </div>
    }
    state = {
        message:"hello world",
    }

    //定义Context需要实现的方法(必须)
    getChildContext() {
        return {
            data: this.state,
        };
    }
}

//声明传递的context类型
Fat.childContextTypes = {
    data: PropTypes.object,
}

中间件组件：
class A extends Component {
    render() {
        return <div>
            <Son />
        </div>
    }
}

//孙子组件
class Son extends Component {
    render() {
        return <div>
                    //通过this.context获取传递的数据
                    //结果：hello world
            {this.context.data.message}
        </div>
    }
}

//在这里声明 contextTypes 获取父组件（Fat） 组件中定义的Context数据.
Son.contextTypes = {
    data: PropTypes.object,
};`}
                </code>
            </pre>
            <div className="sub-title mt10">
                在使用context传递数据时，需要声明<span className="blue">getChildContext</span>方法,返回context数据，并且还要声明<span className="blue">childContextTypes</span>来
                定义context的类型；<br/>
                在需要用到context的子组件中，需要声明<span className="blue">contextTypes</span>来获取父组件组件中定义的context数据；然后通过<span className="blue">this.context</span>可以获取到传递的context数据;
            </div>
        </div>
    }
    componentDidMount(){
        Prism.highlightAll();
    }
}


class Fat extends Component{
    render(){
        return <div>
            <A />
        </div>
    }
    state = {
        message:"hello world",
    }
    getChildContext() {
        return {
            data: this.state,
        };
    }
}

Fat.childContextTypes = {
    data: PropTypes.object,
}

class A extends Component {
    render() {
        return <div>
            <Son />
        </div>
    }
}

//孙子组件
class Son extends Component {
    render() {
        return <div>
            {this.context.data.message}
        </div>
    }
}

Son.contextTypes = {
    data: PropTypes.object,
};