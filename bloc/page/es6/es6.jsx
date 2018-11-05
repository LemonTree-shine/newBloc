import React, { Component } from "react";
import reactDOM, { render } from "react-dom";
import { DatePicker } from 'antd';
import { Button } from 'antd';

export default class Es6 extends Component {
    render() {
        return <div className="content">

            <pre className="hljs">
                <code className="lang-css">
                    let不存在变量提升
                    var定义变量在代码块中会变成全局变量；(使用let可以解决这个问题)；
                </code>
            </pre>
            <br />
            <pre className="hljs">
                <code className="lang-css">
                    {`function(){}和()=>{}的区别
function:在执行的时候定义this；
()=>{}:在函数声明的时候定义this
`}
                </code>
            </pre>
            <pre className="hljs">
                <code className="lang-css">
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
super()==this   //返回true,说明super返回的是自身的实例`}
{`   



react源码
//react.js;
var ReactBaseClasses = require('./ReactBaseClasses');

var React = {
    Component: ReactBaseClasses.Component
}
module.exports = React;


//ReactBaseClasses.js
/**
 * ReactBaseClasses就是这个导出的一个对象
 * 从这里可以看出react中的Component实际上是继承了ReactComponent；
*/
module.exports = {
    Component: ReactComponent,
    PureComponent: ReactPureComponent
};

//分析ReactComponent；
/**
 * 实际是一个构造函数
*/
function ReactComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;

    this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

ReactComponent.prototype.setState = function (partialState, callback) {

};
ReactComponent.prototype.forceUpdate = function (callback) {

};



/**
 * 组件的render方法
 * 组件和类的区别就在于每个组件都有一个render方法
 * 组件通过babel把es6语法转成es5时，
 * 
*/
//假设有组件A
class A extends Component {
    render() {
        return <div>hello world</div>
    }
    constructor() {
        super();
        debugger;
    }
    componentDidMount() {
        console.log(this);
    }
}

//通过babel转译过来时候的一段代码
_createClass(A, [{
    key: "render",
    value: function render() {
        return _react2.default.createElement(
            "div",
            null,
            "hello world"
        );
    }
}]);
//说明在render的时候，内部会调用react.createElement；


/*
    *来看createElement；
    *react.js中有这两句；
*/
var ReactElement = require('./ReactElement');
var createElement = ReactElement.createElement;

/**
 * ReactElement.js
*/

ReactElement.createElement = function (type, config, children) {
    //...

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

//这里可以看出其实createElement最终还是调用ReactElement；

var ReactElement = function (type, key, ref, self, source, owner, props) {
    var element = {
        // This tag allow us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,

        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,

        // Record the component responsible for creating this element.
        _owner: owner
    };

    return element;
};`}
                </code>
            </pre>
        </div>

    }
    a = 10;
    person = "chenze111";

    get value(){
        return this.person+123
    }

    componentDidMount() {
        //console.log(this.value);

        //console.log(new B());
        new B().height()

    }
}

class A  {
    
    constructor(name){
        this.name = name;
    }
    a = 10;

    height(){
        console.log("1111")
    }
}

class B extends A{
    constructor(){
        super("asdasd")
    }
    b=20;
    height (){
        super.height()
    }
}






