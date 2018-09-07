import React, { Component, ReactDOM,createContext } from "react";
import reactDOM, { render } from "react-dom";
import PropTypes from 'prop-types';

import Prism from 'prismjs';

export default class ContextType extends Component {
    render() {
        return <div>
            <div className="title">老版context</div>
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
            <div className="sub-title mt10">
                老版React Context 一些问题：
                1.未来可能舍弃这个功能，官方文档也有写出；
                2.中间组件的一些操作可能会导致context无法传递，造成数据的不同步；
                <br/>
                <span className="red">所以，尽管老版的context能解决一些问题，但是有一定的局限性和风险，谨慎使用！</span>
            </div>
            <br/>
            <div className="title">16.3新版context api</div>
            <div className="sub-title mt10">由于老版的context存在一些问题，所以在react16.3版本中新增了一个新的context api，接下来我们就来说说这个新的api是怎么使用的吧！</div>
            <div className="sub-title mt10">使用新版context需要引入一个方法如下：</div>
            <pre className="hljs"> 
                <code className="lang-css">
                    {'import React, { createContext } from "react"; '}
                </code>
            </pre>
            <div className="sub-title mt10">createContext是一个函数，你可以用React.createContext()或者直接createContext()都可以；</div>
            <div className="sub-title mt10">createContext有两个参数，第一个是context的默认值，第二个是一个calculateChangedBits回调函数，该回调函数有两个参数，第一个是上一次的context,第二个是这次的context;这个回调函数要求return一个number类型的值；用来存储context变化的次数；</div>
            <div className="sub-title mt10">通过调用createContext，会返回一个对象，该对象会有两个属性Provider，Consumer；我们要的context就是从这两个属性来关联啦！</div>
            <div className="sub-title mt10">通过一段代码，看一下是怎么实现的：</div>
            <pre className="hljs"> 
                <code className="lang-css">
{`//默认一个context值
const defaultTheme = {
    color:"blue"
}

//计算context改变次数；
var i = 0;

//执行createContext得到一个context对象
var ContextTheme = createContext(defaultTheme,(pre,next)=>{
    console.log(pre,next,i++);
    return i;
});

class App extends Component{
    render(){
        /**
                 * 通过ContextTheme.Provider来传递context
                 * 从这里也可以看出，通过createContext得到的context对象的Provider其实是一个react组件，期传入的value即是context的值
                 * */
        return <ContextTheme.Provider value={this.state}>
            <Header/>
        </ContextTheme.Provider>
    }
    state = defaultTheme;
}

//中间件组件，不做说明（因为是做跨组件测试嘛）
class Header extends Component{
    render(){
        return <div>
            <Son/>
        </div>
    }
}

//孙子组件
class Son extends Component{
    render(){
        /**
             * 上面说到的第二个属性Consumer就在这里用到啦！
             * 其实ContextTheme的Consumer属性也是一个react组件，如果说Provider是传context值的，那么Consumer就可以取到context值啦！
             * 要注意的一点就是，Consumer组件是通过render prop模式传值的，它的children是一个方法，参数就是context，返回的值即为render的值
             * 在返回值中写组件就好了，context也能拿到；
            */
        return <ContextTheme.Consumer>
            {context=>{
                return <div style={{"color":context.color}}>hello world</div>
            }}
        </ContextTheme.Consumer>
    }
}`}
                </code>
            </pre>
            <div className="sub-title mt10">注意点：<br/>
                1.虽然我在createContext方法执行的时候设置了默认值，但是在调用Provider的时候，如果不传value还是会报错；<br/>
                2.createContext方法执行的时候不传参数，在调用Provider的时候，传value的话，并不会报错的，所以如果我使用的话，我应该会把value当默认值；<br/>
                3.Provider和Consumer都是react的组件，Consumer组件的children是一个方法，返回值才是真正的组件，参数为context的值；
            </div>
            <div className="sub-title mt10">
                总结：<br/>
                其实新版和旧版的传值方式，写法，设计模式完全已经改了，没有可比性，不能说哪种写法好，哪种写法不好；<br/>
                不过可以确定的一点是新版的context确实解决了旧版在特殊情况下无法传递context的问题，这样就没有了后顾之忧了，当然这只是一个小的测试，要用到实际项目中，感觉还要挖挺多的坑；<br/>
            </div>
        </div>
    }
    componentDidMount(){
        Prism.highlightAll();
    }
}

