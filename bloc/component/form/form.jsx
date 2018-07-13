/**
 * author:陈泽
 * time:2018-3-1
*/

import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import "./form.less";

/**
 * Form表单提供两个数据：
 * value:输出所有input组成的对象，object类型
 * onvalid:表单验证是否通过，布尔类型
*/

export default class Form extends Component{
	render(){
        return (<form 
            className={this.props.className?"c-form-h "+this.props.className:"c-form-h"} 
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            ref="form"
            >
            {this.props.children}
        </form>)
    }
    constructor(props){
        super(props);
        this.state = {
            value:{},   //最终输出form表单的对象数据
        }
    }
    //判断表单验证是否通过
    onvalid = true;

    //最终输出form表单的对象数据
    value={};


    handleSubmit = (e)=>{
        e.preventDefault();
        this.onvalid = true;
        this.refs.form.querySelectorAll("input[type=text]").forEach(input=>{
            if(input.dataset.required){
                if(input.value==""){
                    this.onvalid = false;
                    input.className = input.className.replace(/ c-error/, "")+" c-error";
                    //判断错误提示是否已经存在
                    if(input.parentNode.querySelector(".error-tooltips")){
                        input.parentNode.querySelector(".error-tooltips").style.display = "block";
                        input.parentNode.querySelector(".error-tooltips").innerHTML = input.dataset.requiredmessage||"数据不能为空";
                    }else{
                        //创建一个dom用于放置错误的提示
                        var odiv = document.createElement("div");
                        odiv.innerHTML = input.dataset.requiredmessage||"数据不能为空";
                        console.log(input.dataset);
                        odiv.className = "error-tooltips";
                        input.parentNode.appendChild(odiv);  
                    } 
                }else{
                    if(input.dataset.pattern){
                        if(eval(input.dataset.pattern).test(input.value)){
                            input.className = input.className.replace(/ c-error/, "");
                            if(input.parentNode.querySelector(".error-tooltips")){
                                input.parentNode.querySelector(".error-tooltips").style.display = "none";
                            }
                        }else{
                            this.onvalid = false;
                            input.className = input.className.replace(/ c-error/, "")+" c-error";
                            //判断错误提示是否已经存在
                            if(input.parentNode.querySelector(".error-tooltips")){
                                input.parentNode.querySelector(".error-tooltips").style.display = "block";
                                input.parentNode.querySelector(".error-tooltips").innerHTML = input.dataset.patternmessage||"请输入正确的数据格式";
                            }else{
                                //创建一个dom用于放置错误的提示
                                var odiv = document.createElement("div");
                                odiv.innerHTML = input.dataset.patternmessage||"请输入正确的数据格式";
                                console.log(input.dataset);
                                odiv.className = "error-tooltips";
                                input.parentNode.appendChild(odiv);  
                            } 
                        }
                    }else{
                        input.className = input.className.replace(/ c-error/, "");
                        if(input.parentNode.querySelector(".error-tooltips")){
                            input.parentNode.querySelector(".error-tooltips").style.display = "none";
                        }
                    } 
                }
            }
        });
        //debugger;
        let formData = {};
        this.refs.form.querySelectorAll("input[type=text]").forEach(input=>{
            if(input.name&&input.value){
                //判断是否是下拉框
                if(input.dataset.selectinput){
                    formData[input.name] = input.dataset.code;
                }else{
                    formData[input.name] = input.value;
                }
                //console.log(input.dataset.selectinput);
            }
            // this.setState({
            //     value:formData
            // })
            this.value = formData
        });

        //这里去执行props传过来的submit方法
        this.props.onSubmit(formData);
    }
    handleChange = ()=>{
        //console.log(this.refs.form.querySelectorAll("input[type=text]"));
        //debugger;
        let formData = {};
        this.refs.form.querySelectorAll("input[type=text]").forEach(input=>{
            if(input.name&&input.value){
                formData[input.name] = input.value
            }
            // this.setState({
            //     value:formData
            // })
            this.value = formData
        });
        //console.log(this);
    }

    componentDidMount(){
        this.handleChange();
    }
}


/**
 * 不能为空的传入required
 * 不能为空提示requiredmessage
 * 需要校验格式传入pattern(正则类型)
 * 正则校验提示patternmessage
 * 注：需要配合Form一起使用
*/

export class Input extends Component{
    render(){
        return (<input 
            className={this.props.className?"c-input "+this.props.className:"c-input"}
            ref="input" 
            type="text" 
            name={this.props.name||""} 
            value={this.state.value} 
            onChange={this.handleChange}
            data-required={this.props.required}
            data-requiredMessage={this.props.requiredmessage}
            data-pattern={this.props.pattern}
            data-patternMessage={this.props.patternmessage}
            onInput={this.handleInput}
            onBlur = {this.handleBlur}
            readOnly = {this.props.readOnly}
            placeholder = {this.props.placeholder}
        />)
    }

    constructor(props){
        //debugger;
        super(props);
        this.state = {
            value:this.props.value||""
        }
    }

    handleChange = ()=>{
        this.setState({
            value:this.refs.input.value
        });
    }

    //input单独验证本表单校验是否通过
    handleInput = ()=>{
        this.setState({
            value:this.refs.input.value
        });
        if(this.refs.input.dataset.required){
            if(this.refs.input.value==""){
                // this.setState({
                //     onvalid:false 
                // });
                this.refs.input.className = this.refs.input.className.replace(/ c-error/, "")+" c-error";
                //判断错误提示是否已经存在
                if(this.refs.input.parentNode.querySelector(".error-tooltips")){
                    this.refs.input.parentNode.querySelector(".error-tooltips").style.display = "block";
                    this.refs.input.parentNode.querySelector(".error-tooltips").innerHTML = this.refs.input.dataset.requiredmessage||"数据不能为空";
                }else{
                    //创建一个dom用于放置错误的提示
                    var odiv = document.createElement("div");
                    odiv.innerHTML = this.refs.input.dataset.requiredmessage||"数据不能为空";
                    console.log(this.refs.input.dataset);
                    odiv.className = "error-tooltips";
                    this.refs.input.parentNode.appendChild(odiv);  
                } 
            }else{
                //debugger;
                console.log(typeof this.refs.input.dataset.pattern);
                if(this.refs.input.dataset.pattern){
                    if(eval(this.refs.input.dataset.pattern).test(this.refs.input.value)){
                        this.refs.input.className = this.refs.input.className.replace(/ c-error/, "");
                        if(this.refs.input.parentNode.querySelector(".error-tooltips")){
                            this.refs.input.parentNode.querySelector(".error-tooltips").style.display = "none";
                        }
                    }else{
                        this.refs.input.className = this.refs.input.className.replace(/ c-error/, "")+" c-error";
                        //判断错误提示是否已经存在
                        if(this.refs.input.parentNode.querySelector(".error-tooltips")){
                            this.refs.input.parentNode.querySelector(".error-tooltips").style.display = "block";
                            this.refs.input.parentNode.querySelector(".error-tooltips").innerHTML = this.refs.input.dataset.patternmessage||"请输入正确的数据格式";
                        }else{
                            //创建一个dom用于放置错误的提示
                            var odiv = document.createElement("div");
                            odiv.innerHTML = this.refs.input.dataset.patternmessage||"请输入正确的数据格式";
                            console.log(this.refs.input.dataset);
                            odiv.className = "error-tooltips";
                            this.refs.input.parentNode.appendChild(odiv);  
                        } 
                    }
                }else{
                    this.refs.input.className = this.refs.input.className.replace(/ c-error/, "");
                    if(this.refs.input.parentNode.querySelector(".error-tooltips")){
                        this.refs.input.parentNode.querySelector(".error-tooltips").style.display = "none";
                    }
                }  
            }
        }
    }

    handleBlur = ()=>{
        this.handleInput();
    }

    componentWillReceiveProps(nextProps){
        this.setState({value:nextProps.value});
        console.log(nextProps);
    }

    componentDidMount(){

    }
}