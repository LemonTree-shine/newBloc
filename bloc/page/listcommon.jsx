import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';
import Nav from "./nav.jsx";
import "../style/ListCommon.less";

export default class ListCommon extends Component{
    render(){
        return (<div className="ListCommon">
            <Nav/>
            <ul className="menu-ul">
                {this.props.menu.map((value,index)=>{
                    return <li key={index}><NavLink className="menu-title" activeClassName="active" to={value.link}>{value.name}</NavLink></li>
                })}
            </ul>
            <div className="common-page">
                {this.props.children?this.props.children:"并没有children"}
            </div>
        </div>)
    }
    componentDidMount(){
        console.log(this.props);
    }
}