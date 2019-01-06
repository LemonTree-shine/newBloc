import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return <nav className="index-header">
            <div className="title-name" onClick={this.toindex}>LemonTree-shine</div>
            <ul className="head-menu">
                <li className="head-menu-item"><NavLink className="title" activeClassName="active" to="/home/index">首页</NavLink></li>
                <li className="head-menu-item"><NavLink className="title" activeClassName="active" to="/csslist">css</NavLink></li>
                <li className="head-menu-item"><NavLink className="title" activeClassName="active" to="/jslist">js</NavLink></li>
                <li className="head-menu-item"><NavLink className="title" activeClassName="active" to="/reactlist">react</NavLink></li>
                <li className="head-menu-item"><NavLink className="title" activeClassName="active" to="/home/commonMethod">常用方法</NavLink></li>
                {/* <li className="head-menu-item"><NavLink className="title" activeClassName="active" to="/home/interview">面试专用</NavLink></li> */}
                <li className="head-menu-item"><NavLink className="title" activeClassName="active" to="/home/leaveWord">留言</NavLink></li>
            </ul>
        </nav>
    }
    toindex = ()=>{
        location.replace("#/home/index");
    }
}