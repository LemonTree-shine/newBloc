import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';

export default class Manage extends Component{
    render(){
        return <div style={{paddingTop:"20px"}}>
            <button onClick={this.bushu} style={{padding:"10px",marginBottom:"20px",marginLeft:"10px"}}>部署</button>
            <table style={{"width":"100%"}}>
                <tbody>
                    <tr>
                        <td>序号</td>
                        <td>姓名</td>
                        <td>内容</td>
                        <td>是否通过</td>
                        <td>操作</td>
                    </tr>
                    {this.state.list.map(value=>{
                        return <tr key={value.ID}>
                            <td>{value.ID}</td>
                            <td>{value.name}</td>
                            <td>{value.leave_word}</td>
                            <td>{value.approval}</td>
                            <td>
                            {value.approval=="0"?<a href="javascript:;" onClick={()=>{this.approval(value)}}>审批通过</a>:""}  
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        Ajax({
            url:window.ENVPATH+"manage/getUser",
            type:"post",
            success:(data)=>{
                // console.log(data.data);
                // this.setState({
                //     leaveList:data.data
                // });
                console.log(data.hash);
                if(data.code!=0){
                    location.replace("/#/login");
                }
                //location.replace(data.hash);
            }
        });

        this.getList();
        
    }

    getList = ()=>{
        //获取留言列表
        Ajax({
            url:window.ENVPATH+"manage/leaveWordList",
            type:"post",
            success:(data)=>{
                this.setState({
                    list:data.data
                })
            }
        });
    }

    approval=(value)=>{
        Ajax({
            url:window.ENVPATH+"manage/approval",
            type:"post",
            data:{id:value.ID},
            success:(data)=>{
                this.getList();
            }
        });
    }

    bushu = ()=>{
        Ajax({
            url:window.ENVPATH+"manage/deploy",
            type:"post",
            success:(data)=>{
                alert("部署成功以后重新启动web服务器");
            }
        });
    }
}