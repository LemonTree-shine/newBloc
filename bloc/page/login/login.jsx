import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';

export default class LoginIn extends Component{
    render(){
        return <div>
            用户名:<input className="username" defaultValue="" type="text"/>
            密码:<input className="password" defaultValue="" type="text"/>
            <button onClick={this.loginIn}>登入</button>
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