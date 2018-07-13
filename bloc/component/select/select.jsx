import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import "./select.less";
import Form,{Input} from "../form/form.jsx";

export default class Select extends Component{
	render(){
        return (<div className="x-picker-select" onClick={this.handleClick}>
            <div  className="c-textBox">
                <input ref="aaa" type="text" className="c-input c-select-input" placeholder={this.props.placeholder} name={this.props.name} readOnly value={this.state.VALUE} data-selectInput={true} data-code={this.code}/>
                <div className="c-icon c-select-icon">&#xe6b4;</div>
            </div>
            <ul ref="thisul" className="c-listBox" style={this.state.showFlag?{display:"block"}:{display:"none"}}>
                {this.renderChildren(this.props)}
            </ul>
        </div>)
    }
    constructor(props){
        super(props);
        this.state = {
            showFlag:false,
            VALUE:""
        }   
    }

    
    code = this.props.value;

    handleClick = (e)=>{
        this.setState({
            showFlag:!this.state.showFlag
        });
    }
    showValue = (getCurrentValue)=>{
        //debugger;
        this.setState({VALUE:getCurrentValue.children})
        //this.VALUE = getCurrentValue.children;
        console.log(this);
    }

    setCode = (getcode)=>{
        this.code = getcode.code;
    }

    renderChildren = (props)=>{
        //通过react.children方法给嵌套组件传递参数
        return React.Children.map(this.props.children,child=>{
            return React.cloneElement(child, {
                //父组件的方法挂载到props.showValue上，以便子组件内部通过props调用
                showValue:this.showValue,
                propsValue:this.VALUE,
                setCode:this.setCode,
                currentCode:this.code
            })
    
            //console.log(child);
        });
    }

    componentDidMount(){
        document.addEventListener("click",(e)=>{
            if(/c-select-input/.test(e.target.className)||/select-item/.test(e.target.className)||/x-picker-select/.test(e.target.className)||/c-select-icon/.test(e.target.className)){
                return;
            }else{
                //alert(123);
                //console.log(this.refs.thisul.style.display)
                if(this.refs.thisul.style.display=="block"){
                    this.setState({
                        showFlag:false
                    });
                }
            }
            //console.log();
            //alert(123);
        },true)
    }
}


export class ListItem extends Component{
    render(){
        return (<li className="select-item" value={this.props.value} onClick={this.handleClick}>{this.props.children}</li>)
    }
    constructor(props){
        super(props);
        //this.state = {name:"123123"}
        ////debugger;
        if(this.props.currentCode==this.props.code){
            this.props.showValue(this.props);
        }
    }
    handleClick = ()=>{
        //设置显示的值
        this.props.showValue(this.props);

        //设置表单上传的code值
        this.props.setCode(this.props);
    }
    componentDidMount(){
        console.log(this);
        // if(this.props.currentCode==this.props.code){
        //     this.props.showValue(this.props);
        // }
    }
    componentWillReceiveProps(nextprops){
        ////debugger;
        console.log(nextprops);
    }
}