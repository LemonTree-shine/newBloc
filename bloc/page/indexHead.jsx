import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';
import Nav from "./nav.jsx";
import "../style/index.less";

export default class IndexHead extends Component{
    render(){
        return (<div className="indexPage">
            <Nav/>
            <div>
                {this.props.children}
            </div>
            <div className="index-footer"><a href="https://github.com/LemonTree-shine">https://github.com/LemonTree-shine</a></div>
        </div>)
    }
}