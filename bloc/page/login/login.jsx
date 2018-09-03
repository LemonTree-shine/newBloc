import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';
import "./login.less";

export default class LoginIn extends Component{
    render(){
        return <div className="c-login">
            <div className="input-box">
                <label>用户名:</label><input className="username" defaultValue="" type="text"/>
            </div>
            <div className="input-box">
                <label>密码:</label><input className="password" defaultValue="" type="text"/>
            </div>
            <button className="login-btn" onClick={this.loginIn}>登入</button>
        </div>
    }
    componentDidMount(){
        
    }
    loginIn = ()=>{
        var name = document.querySelector(".username");
        var pwd = document.querySelector(".password");

        Ajax({
            //url:"http://192.168.90.31:8081/manage/login",
            url:window.ENVPATH+"manage/login",
            type:"post",
            data:{
                username:name.value,
                password:pwd.value
            },
            success:function(data){
                if(data.code==0){
                    location.replace("/#/manage")
                }else{
                    alert(data.message);
                }
            }
        });
    }
}