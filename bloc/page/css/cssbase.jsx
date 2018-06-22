import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';
import "./style/css.less";

export default class CssBase extends Component{
    render(){
        return (<div>
            {/* css画自适应正圆技巧 */}
            <div>
                <div className="title">css正圆小技巧</div>
                <div className="circle-box"></div>
                <div className="circle-box"></div>
                <pre className="hljs"> 
                    <code className="hljs">
                    {'.circle-box{width: 30%;padding-top: 30%;border-radius: 50%;background: #ccc;margin: 0 auto;}'}
                    </code>
                </pre>
                <div className="hljs">
                    注意点：圆的高度一定要设置成和宽度一样的百分比(padding值百分比的计算是和宽度一致的，按照父元素的宽度来计算)；
                    <br/>
                    使用场景：当做移动端开发的时候，可能会碰到说要一排放三个正圆或者正方形，
                    这个时候就可以用这个技巧去画，无论在什么手机下面得到的都是一个正原或者正方行的效果；
                </div>
            </div>
            
            {/* css画三角形技巧 */}
            <div className="triangle base-box">
                <div className="title">css三角形小技巧</div>
                <div>
                    <div className="left-top"></div>
                    <div className="right-forword"></div>
                    <div className="left-forword"></div>
                    <div className="tixing"></div>
                </div>
                <pre className="hljs"> 
                    <code className="hljs">
                    第一个三角形的样式如下(动画就是三角形形成的过程):<br/>
{`.left-top{
    height: 0;
    width: 0;
    border-top:50px solid transparent;
    border-right:50px solid transparent;
    border-bottom:50px solid red;
    border-left:50px solid red;
}`}
                    </code>
                </pre>
                <div className="hljs">
                    注意点：样式中，实际上是用border画了一个正方形，只不过两边的border用了transparent透明了，
                    展示出来看到的只有左border-left和border-bottom,拼起来就是一个三角形了；通过这种方式，
                    可以画出各种三角形，梯形，或者沙漏等形状；实际项目中可以代替一些小图标；
                </div>
            </div>

            {/* 自定义段落分割 */}
            <div className="base-box duanluo">
                <div className="title">自适应段落分隔线</div>
                <div className="box">
                    <div className="title">段落标题</div>
                </div>
                <pre className="hljs"> 
                    <code className="hljs">
                    dom结构:<br/>
{`<div class="box">
    <div class="title">段落标题</div>
</div>`}
                    </code>
                    <code  className="hljs">
                    样式:<br/>
{`.box{
    overflow: hidden; //重点
}
.title{
    position: relative;
    display: inline-block;
}
.title:after{
    content: "";
    display: block;
    height: 1px;
    width: 10000px; //重点
    background: #000000;
    position: absolute;
    top:50%;
    left: 100%;
    transform: translateX(10px); 
}`}
                    </code>
                </pre>
                <div className="hljs">
                    思路：外层dom设置overflow:hidden是重点。可以直接隐藏。title：after设置一个足够长的线，适应各种宽度的屏幕，超出部分父级dom会隐藏；
                    <br/>
                    根据这样的写法，也可以写出标题两端分割线的样式；
                </div>
            </div>

            {/* 不固定宽高定位居中 */}
            <div className="base-box center">
                <div className="title">百分比宽高定位居中</div>
                <div className="box" style={{marginBottom:'20px'}}>
                    <div className="content"></div>
                </div>
                <pre className="hljs"> 
                    <code className="hljs">
                    dom结构:<br/>
{`<div className="box">
    <div className="content"></div>
</div>`}
                    </code>
                    <code  className="hljs">
                    样式:<br/>
{`.box{
    width: 100%;
    height: 200px;
    background: #7ca4de;
    position: relative;
}
.content{
    width: 50%;
    height: 50%;
    background: #417784;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
}`}
                    </code>
                </pre>
                <div className="hljs">
                    提示:宽高使用百分比的情况下，可以用translate来做偏移；
                </div>
            </div>

        </div>)
    }
    componentWillMount(){

    }
    componentDidMount(){
        //hljs.initHighlighting();  
    }
}