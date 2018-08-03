/**
 * author:陈泽
 * time:2018-3-1
*/

import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import Select from "../select/select.jsx";
import "./form.less";

/**
 * Form表单提供两个数据：
 * value:输出所有input组成的对象，object类型
 * onvalid:表单验证是否通过，布尔类型
*/

export default class Form extends Component{

    render(){
        return <form
            className={this.props.className}
            onInput = {this.handleChange}
        >
            {/* {this.props.children} */}
            {React.Children.map(this.props.children,(child,i)=>{
                switch(child.type){
                    case Input:
                        return React.cloneElement(child,{
                            pFun:this.getCurrentComponent
                        })
                    case Select:
                        return React.cloneElement(child,{
                            pFun:this.getCurrentComponent
                        })
                    default:
                        return child
                }
            })}
            
        </form>
    }

    InputList = [];

    //表示一个表单输出的数据
    value = {};

    componentDidMount(){
        // setTimeout(()=>{
        //     console.log(this.InputList);
        //     this.InputList.forEach(inputCom=>{

        //     })
        // },10000)
    }

    getCurrentComponent = (component)=>{
        this.InputList.push(component);
    }

    handleChange = ()=>{
        console.log(this.InputList);
        this.InputList.forEach(inputCom=>{
            if(inputCom.name){
                this.value[inputCom.name] = inputCom.value;
            } 
        })
        console.log(this.value);
    }

    
}


export class Input extends Component{
    //数据不能为空默认的文案
    message = "数据不能为空";
    //正则不匹配的默认文案
    patternMessage = "内容不符合指定规则";

    //表单验证是否通过
    onvalidate = true;

    //表单输出的value
    value = "";

    render(){
        return <div className="c-textBox" ref = {textBox=>this.textBox=textBox}>
                <input 
                    className={this.props.className?"c-input "+this.props.className+" "+this.state.class:"c-input"+" "+this.state.class}
                    type={this.props.type||"text"}
                    name={this.props.name||""}
                    defaultValue={this.props.value||""}
                    readOnly={this.props.readOnly||false}
                    disabled={this.props.disabled||false}
                    onClick={this.props.onClick}
                    onChange={this.props.onChange}
                    onBlur={(e)=>{this.handleBlur(e)}}
                    onFocus={this.props.onFocus}
                    onInput = {(e)=>{this.handleInput(e)}}

                    ref = {input=>this.refInput=input}

                />
        </div>
    }

    constructor(props){
        super(props);
        this.state = {
            class:""
        }
        this.value = this.props.value?this.props.value:"";
    }

    componentDidMount(){
        //console.log(this.props.pFun)
        if(this.props.pFun){
            this.props.pFun(this)
        }
        
    }

    //onInout事件
    handleInput = (e)=>{
        this.value = this.refInput.value;
        //验证表单不能为空
        if(this.props.required){
            if(this.refInput.value==""){
                this.setState({
                    class:"c-error"
                },()=>{
                    if(!this.textBox.querySelector(".error-tooltips")){
                        var odiv = document.createElement("div");
                        odiv.className = "error-tooltips";
                        odiv.innerHTML = this.props.message||this.message;
                        this.textBox.append(odiv);
                    }else{
                        this.textBox.querySelector(".error-tooltips").innerHTML = this.props.message||this.message;
                    }
                });
                this.onvalidate = false;
            }else{
                //验证表单是否符合正则表达式
                if(this.props.pattern){
                    if(!this.props.pattern.test(this.refInput.value)){
                        this.setState({
                            class:"c-error"
                        },()=>{
                            if(!this.textBox.querySelector(".error-tooltips")){
                                var odiv = document.createElement("div");
                                odiv.className = "error-tooltips";
                                odiv.innerHTML = this.props.patternMessage||this.patternMessage;
                                this.textBox.append(odiv);
                            }else{
                                this.textBox.querySelector(".error-tooltips").innerHTML = this.props.patternMessage||this.patternMessage;
                            }
                        });
                        this.onvalidate = false;
                    }else{
                        this.setState({
                            class:"c-success"
                        },()=>{
                            if(this.textBox.querySelector(".error-tooltips")){
                                this.textBox.querySelector(".error-tooltips").remove();
                            }
                        });
                        this.onvalidate = true;
                    }
                }else{
                    this.setState({
                        class:"c-success"
                    },()=>{
                        if(this.textBox.querySelector(".error-tooltips")){
                            this.textBox.querySelector(".error-tooltips").remove();
                        }
                    });
                    this.onvalidate = true;
                }
            }   
        }  
        
        console.log(this.onvalidate);
    }

    handleBlur = (e)=>{
        if(this.textBox.querySelector(".error-tooltips")){
            this.textBox.querySelector(".error-tooltips").remove();
        }
    }
}