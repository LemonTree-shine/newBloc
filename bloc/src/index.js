import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter,IndexRoute,Switch,Redirect } from 'react-router-dom';
import "../style/common.less";

import IndexHead from "../page/indexHead";  //首页头部
import Index from "../page/index";          //首页
import LeaveWord from "../page/leaveWord";  //留言板页面
import ListCommon from "../page/listcommon";  //js，css页面的模板页面
import Interview from "../page/interview";  //面试专用页面
import CommonMethod from "../page/commonMethod";
import Manage from "../page/login/manage";  //后台页面
import LoginIn from "../page/login/login";  //后台页面


/**
 * 这里开始引入css页面
*/
import CssBase from "../page/css/cssbase";
import Css3 from "../page/css/css3";
import CssShow from "../page/css/show";
import Layout from "../page/css/layout";



/**
 * 这里开始引入js页面
*/
import StringPage from "../page/js/stringPage";
import ArrayPage from "../page/js/arrayPage";
import ObjPage from "../page/js/objPage";

import Closure from "../page/js/closure";
import Prototype from "../page/js/prototype";
import CallApply from "../page/js/callApply";
import HighFun from "../page/js/highFun";
import SkillPage from "../page/js/skillPage";


/**
 * react页面
*/
import ReactBase from "../page/react/base";
import ReactProps from "../page/react/props";
import ReactComponent from "../page/react/componentlist";
import HighComponent from "../page/react/highComponent";
import ManageLayout from "../page/react/manageLayout";
import ContextType from "../page/react/contextType";
import AntdPage from "../page/react/antdPage";

/**
 * node练习
*/

import Node from "../page/node/node";



/**
 * es6练习
*/

import Es6 from "../page/es6/es6";

import Notice from "../page/notice";




class IndexPage extends Component{
	render(){
		return (<div>
			{/* 一级路由 */}
			<Route path="/home" render={()=>{
				return (<IndexHead>
					{/* 二级路由 */}
					<Route path="/home/index" exact component={Index}></Route>
					<Route path="/home/leaveWord" exact component={LeaveWord}></Route>
					<Route path="/home/interview" exact component={Interview}></Route>
					<Route path="/home/commonMethod" exact component={CommonMethod}></Route>
					<Route path="/home/es6" exact component={Es6}></Route>
				</IndexHead>)
			}}></Route>
			{/* css页面一级路由 */}
			<Switch>
				<Redirect from="/csslist" exact to="/csslist/base" />
				<Route path="/csslist"  render={()=>{
					return <ListCommon menu={this.state.cssmenu}>
						{/* 二级路由 */}
						<Route path="/csslist/base" component = {CssBase}></Route>
						<Route path="/csslist/css3" component = {Css3}></Route>
						<Route path="/csslist/layout" component = {Layout}></Route>
						<Route path="/csslist/show" component = {CssShow}></Route>
					</ListCommon>
				}}></Route>
			</Switch>
			{/* js页面一级路由 */}
			<Switch>
				<Redirect from="/jslist" exact to="/jslist/string" />
				<Route path="/jslist"  render={()=>{
					return <ListCommon menu={this.state.jsmenu}>
						{/* 二级路由 */}
						<Route path="/jslist/string" component={StringPage}></Route>
						<Route path="/jslist/array" component={ArrayPage}></Route>
						<Route path="/jslist/object" component={ObjPage}></Route>
						<Route path="/jslist/closure" component={Closure}></Route>
						<Route path="/jslist/prototype" component={Prototype}></Route>
						<Route path="/jslist/callApply"  component={CallApply}></Route>
						<Route path="/jslist/highFun"  component={HighFun}></Route>
						<Route path="/jslist/skill"  component={SkillPage}></Route>
						<Route path="/jslist/node" exact component={Node}></Route>
					</ListCommon>
				}}></Route>
			</Switch>
			{/*react页面一级路由*/}
			<Switch>
				<Redirect from="/reactlist" exact to="/reactlist/base" />
				<Route path="/reactlist"  render={()=>{
					return <ListCommon menu={this.state.reactmenu}>
						{/* 二级路由 */}
						<Route path="/reactlist/base" component={ReactBase}></Route>
						<Route path="/reactlist/props" component={ReactProps}></Route>
						<Route path="/reactlist/component" component={ReactComponent}></Route>
						<Route path="/reactlist/highComponent" component={HighComponent}></Route>
						<Route path="/reactlist/ManageLayout" component={ManageLayout}></Route>
						<Route path="/reactlist/ContextType" component={ContextType}></Route>
						<Route path="/reactlist/AntdPage" component={AntdPage}></Route>
					</ListCommon>
				}}></Route>
			</Switch>
			{/* 关于我的页面 */}
			{/* <Route path="/aboutme" exact component={AboutMe}></Route> */}
			{/* 后套管理页面 */}
			<Route path="/manage" exact component={Manage}></Route>
			<Route path="/login" exact component={LoginIn}></Route>
			<Route path="/notice" exact component={Notice}></Route>
			
		</div>)
	}
	constructor(props){
		super(props);
		this.state = {
			cssmenu:[{
				name:"css小技巧",
				link:"/csslist/base"
			},{
				name:"css3分享",
				link:"/csslist/css3"
			},{
				name:"css布局",
				link:"/csslist/layout"
			},{
				name:"css小展示",
				link:"/csslist/show"
			}],
			//js页面菜单
			jsmenu:[{
				name:"字符串",
				link:"/jslist/string"
			},{
				name:"数组方法",
				link:"/jslist/array"
			},{
				name:"js闭包",
				link:"/jslist/closure"
			},{
				name:"原型，构造函数",
				link:"/jslist/prototype"
			},{
				name:"call,apply",
				link:"/jslist/callApply"
			},{
				name:"高阶函数",
				link:"/jslist/highFun"
			},{
				name:"js实现一个栈",
				link:"/jslist/object"
			},{
				name:"不知道的js",
				link:"/jslist/skill"
			},
			{
				name:"图片上传案例",
				link:"/jslist/node"
			}],
			//react页面菜单
			reactmenu:[{
				name:"基本用法",
				link:"/reactlist/base"
			},{
				name:"传值模式",
				link:"/reactlist/props"
			},{
				name:"context传值",
				link:"/reactlist/ContextType"
			},
			// {
			// 	name:"高阶组件",
			// 	link:"/reactlist/highComponent"
			// },
			{
				name:"组件",
				link:"/reactlist/component"
			},{
				name:"后台管理模版布局",
				link:"/reactlist/ManageLayout"
			},{
				name:"antd后台管理",
				link:"/reactlist/AntdPage"
			}]
		}
	}
}

//渲染根节点
reactDOM.render(
	<HashRouter>
		<IndexPage/>
	</HashRouter>,
	document.getElementById('contain')
);



