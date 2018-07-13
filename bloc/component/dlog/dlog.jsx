import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import "./dlog.less"

export default class Dlog extends Component{
    render(){
        return (<div className="c-dlog" ref={div => {
                this.dlogElem = div
            }}>
            <div className="c-dlog-body" ref={div => {
                this.dlogBody = div
            }}>
                {this.dlogHead()}
                <div className="c-dlog-content">
                    {this.icon=="warning"?<div className={this.icon+" c-icon"}>&#xe654;</div>:""}
                    {this.icon=="success"?<div className={this.icon+" c-icon"}>&#xe653;</div>:""}
                    {this.icon=="error"?<div className={this.icon+" c-icon"}>&#xe655;</div>:""}
                    {this.content}
                </div>
                {this.dlogFoot()}
            </div>
        </div>);
    }
    constructor(){
        super();
    }

    dlogHead = ()=>{
        return (<div className="c-dlog-head">{this.title}<span onClick={this.close}>x</span></div>)
    }
    dlogFoot = ()=>{
        return (<div className="c-dlog-bottom">
            <button className="c-space default" onClick = {this.handleOk}>确定</button>
            <button onClick = {this.handleCancle}>取消</button>
        </div>)
    }

    /**
     * 弹窗标题的头部
     */
    title = "提示";


    /**
     * 弹窗的默认内容
     */
    content = "默认内容";

    /**
     * 弹窗提示图标
     */
    icon = "";


    /**
     * 弹窗关闭的函数
     */
    close = (e)=>{
        //console.log(this.dlogBody.className);
        this.dlogBody.className = "c-dlog-body c-dlog-body-hidden";
        new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },150)
        }).then(()=>{
            this.dlogElem.remove();
        })
    }


    /**
     * 弹窗显示的入口
     */
    show(){
        console.log(this);
        var oDiv = document.createElement("div");
        document.body.append(oDiv);
        reactDOM.render(
            this.render(),
            oDiv
        );
    }

    /**
     * 确认按钮
     */

    handleOk = ()=>{
        this.close();
    }

    /**
     * 取消按钮
     */
    handleCancle = ()=>{
        this.close();
    }


    /**
     * 默认的静态方法
     */
    static show(title,content,icon,success){
        var r = new Dlog();
        r.title = title?title:r.title;
        r.content = content?content:r.content;
        r.icon = icon?icon:r.icon;
        if(success){
            r.handleOk = ()=>{
                let falg = success();
                //console.log(falg);

                //success不return false的时候，返回undefined
                if(falg == false){
                    
                }else{
                    r.close();
                }   
            }
        }
        r.show();
        return r;
    }
}





