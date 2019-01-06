import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';
import "../style/index.less";

import {Toast} from "../component/common";


export default class Index extends Component{
    render(){
        return (<div className="index-content">
            {/* banner部分 */}
            <div className="banner-content">
                <div className="banner-list" onClick={()=>{this.queryData("css")}}>
                    <img src="assets/images/2.jpeg" alt=""/>
                    <div className="banner-tips">富有艺术感的css</div>
                </div>
                <div className="banner-list" onClick={()=>{this.queryData("js")}}>
                    <img src="assets/images/1.jpeg" alt=""/>
                    <div className="banner-tips">具有无限魅力的js</div>
                </div>
                <div className="banner-list" onClick={()=>{this.queryData("react")}}>
                    <img src="assets/images/5.jpeg" alt=""/>
                    <div className="banner-tips">简介灵活的react</div>
                </div>
                <div className="banner-list" onClick={()=>{this.queryData("interview")}}>
                    <img src="assets/images/3.jpeg" alt=""/>
                    <div className="banner-tips">面试题二三事</div>
                </div>
                <div className="banner-list" onClick={()=>{this.queryData("")}}>
                    <img src="assets/images/8.jpeg" alt=""/>
                    <div className="banner-tips">神采飞扬的自我</div>
                </div>
            </div>
            {/* banner部分end */}
            {/* 内容部分 */}
            <div className="main-content clearfix">
                <div className="main-content-l">
                    {this.state.list.map((value,index)=>{
                        return <div className="main-content-l-list" key={index}>
                            <div className="clearfix">
                                <div className={value.type=="css"?"list-l left css":"list-l left js"}>{value.type}</div>
                                <div className="list-content left">
                                    <div className="title">{value.title}</div>
                                    <div className="content">{value.content}</div>
                                </div>
                            </div>
                            <div className="list-bottom clearfix">
                                <div className="type-box left clearfix">
                                    <img  className="icon left" src="assets/icon/type.svg" alt=""/>
                                    <span className="left">{value.type}</span>
                                </div>
                                <div className="type-box left clearfix" onClick = {()=>{this.addCount(value,index)}}>
                                    <img className="icon left" src="assets/icon/good.svg" alt=""/>
                                    <span className="left">{value.count}</span>
                                </div>
                                <div className="type-box left clearfix">
                                    <img  className="icon left" src="assets/icon/time.svg" alt=""/>
                                    <span className="left">{value.time}</span>
                                </div>
                                <span className="check-artical right"><a href={value.url}>阅读原文</a></span>
                            </div>
                        </div>
                    })}
                </div>
                <div className="main-content-r">
                    {/* 右边的个人信息 */}
                    <div className="per-info">
                        <div className="head">
                            <img src="assets/images/head.jpg" alt=""/>
                        </div>
                        <div className="name">Lemon-Tree | 西瓜</div>
                        <div className="person-tab">javascript&nbsp;&nbsp;&nbsp;react&nbsp;&nbsp;&nbsp;node</div>
                        <div className="person-info">
                            一个90后青年！2015年踏入前端行业，边工作边积累，一直想分享自己所学的知识，所以写了这个博客，虽然比不上很多大牛的分享！
                            仅希望能够在分享的同时，提高自己的职业技能，欢迎来到我的博客！
                        </div>
                    </div>
                    {/* 右边的标签 */}
                    <div className="my-tab">
                        <div className="title">我的标签</div>
                        <ul className="tab-ul clearfix">
                            <li>90后</li>
                            <li>javascript</li>
                            <li>html5 | css3</li>
                            <li>react | vue</li>
                            <li>music</li>
                            <li>node | webpack</li> 
                            <li>github</li> 
                            <li>treval</li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
    }
    constructor(props){
        super(props);
        this.state = {
            list:[]
        };
    }
    componentDidMount(){
        console.log(Ajax);
        Ajax({
            url:window.ENVPATH+"index",
            type:"post",
            success:(data)=>{
                this.setState({
                    list:data.data
                });
                if(!window.localStorage.arr){
                    var array = [];
                    data.data.forEach((value,index)=>{
                        array.push(0);
                    });
                    window.localStorage.arr = JSON.stringify(array);
                }
            }
        });
    }
    addCount = (value,curIndex)=>{
        //console.log(value.ID,index)

        Ajax({
            url:window.ENVPATH+"addCount",
            type:"post",
            data:{count:value.count,id:value.ID},
            success:(data)=>{
                var conutFlagArr = JSON.parse(window.localStorage.arr);
                if(conutFlagArr[curIndex]=="1"){
                    //alert("每个用户只能点击一次哦");
                    Toast.show("每个用户只能点击一次哦")
                }else{
                    conutFlagArr[curIndex] = 1;
                    this.setState({
                        list:data.data
                    });
                    window.localStorage.arr = JSON.stringify(conutFlagArr);
                }
                
            }
        });
    }
    queryData = (type)=>{
        switch(type){
            case "css":
                location.replace("/#/csslist/base");
                break;
            case "js":
                location.replace("/#/jslist/string");
                break;
            case "interview":
                //location.replace("/#/home/interview");
                break;
            case "react":
                location.replace("/#/reactlist/base");
                break;
            case "aboutme":
                location.replace("/#/aboutme");
                break;
            default:
                return false;
        }
            
        
    }
}