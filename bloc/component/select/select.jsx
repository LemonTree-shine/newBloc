import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import "./select.less";
import Form,{Input} from "../form/form.jsx";

export default class Select extends Component{

	render(){
        return <div className="c-picker-select">
            <i className="fa fa-angle-down fa-2x c-input-select c-input-select-fa" aria-hidden="true" onClick = {this.showList}></i>
            <input className="c-input c-input-select" 
                readOnly
                   type="text" 
                   value={this.state.text} 
                   onClick = {this.showList}
            />

            <ul 
                className={this.state.showFlag?"c-select-ul c-show-animate":this.firstFlag?"c-select-ul c-none":"c-select-ul c-none-animate"}
            >
                {this.renderChildren()}
            </ul>
        </div>
    }
    constructor(props){
        super(props);
        this.state = {
            text:"",
            showFlag:false
        }
    }

    //是不是首次进来加载
    firstFlag = true;

    //默认值
    value = this.props.value||"";

    //name设置
    name = this.props.name||"";

    //设置选中值
    setData = (value,text)=>{
        this.value = value;
        this.setState({
            text:text,
            showFlag:false
        });
        
        //调用父组件传递的onChange事件
        if(this.props.onChange){
            this.props.onChange(value);
        }

        setTimeout(()=>{
            if(this.firstFlag){
                this.firstFlag = false;
            }
        },0)
    }

    //切换下啦选择
    showList = ()=>{
        this.setState({
            showFlag:!this.state.showFlag
        });
        //return false;
    }

    //渲染子节点
    renderChildren = ()=>{
        //通过react.children方法给嵌套组件传递参数
        return React.Children.map(this.props.children,child=>{
            return React.cloneElement(child, {
                setData:this.setData,
                currentCode:this.value
            })
        });
    }

    componentDidMount(){
        document.addEventListener("click",(e)=>{
            if(/c-input-select/.test(e.target.className)){
                return false;
            }else{
                this.setState({
                    showFlag:false
                });
            }
        });
    }

}


export class ListItem extends Component{
    render(){
        return (<li className={this.props.currentCode==this.props.code?"select-item c-current":"select-item"} onClick={()=>{this.handleClick(this.props.code,this.props.children)}}>{this.props.children}</li>)
    }
    constructor(props){
        super(props);
        //初始化选中
        if(this.props.currentCode == this.props.code){
            this.props.setData(this.props.code,this.props.children);
        }
    }
    componentDidMount(){

    }

    handleClick = (key,value)=>{
        this.props.setData(key,value);
    }

}