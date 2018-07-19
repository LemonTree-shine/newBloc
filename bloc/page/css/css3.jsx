import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';
import Prism from 'prismjs';
import "./style/css.less";

export default class Css3 extends Component{
    render(){
        return (<div className="css3-skills">
            <div>
                <div className="title">css文字渐变</div>
                <div className="text-gradient">hello,LemonTree-Shine,welcome to my bloc!</div>
                <pre className="hljs"> 
                    <code className="lang-css">
                    关键样式:<br/>
    {`.text-gradient{
        background: linear-gradient(to right, #ea31d4, #e4a85d);
        -webkit-background-clip:text;
        color:transparent;
    }`}
                    </code>
                </pre>
                <div className="hljs">
                    提示：用渐变填充背景色，然后用-webkit-background-clip去截取文字，把字体的颜色设置成透明，这样文字就能显示背景填充的渐变色；
                    <br/>ps:注意浏览器兼容性
                </div>
            </div>
        
        </div>)
    }
    componentDidMount(){
        //hljs.initHighlighting();  
        Prism.highlightAll();
    }
}