import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import "./datepick.less";

import laydate from "../../assets/laydate/laydate";

export default class DatePick extends Component{
    render(){
        return (<input 
            className={this.props.className?"c-input "+this.props.className:"c-input"}  
            ref="getDate" 
            name={this.props.name||""} 
            defaultValue = {this.props.defaultValue} 
            type="text"/>)
    }
    constructor(){
        super();
        //console.log(this.refs);
    }

    componentDidMount(){
        laydate.path = window.location.origin+"/build/assets/laydate/";
        var data = {};

        //日期格式化
        if(this.props.format){
            data.format = this.props.format;
            //format:this.props.format||"yyyy-MM-dd" //yyyy/MM/dd HH:mm:ss
        }

        //选取日期类型
        if(this.props.type){
            data.type = this.props.type;
            //format:this.props.format||"yyyy-MM-dd" //yyyy/MM/dd HH:mm:ss
        }
        //选择完毕回调函数
        if(this.props.done){
            data.done = this.props.done;
            //format:this.props.format||"yyyy-MM-dd" //yyyy/MM/dd HH:mm:ss
        }
        laydate.render({
            elem: this.refs.getDate,//指定元素
            theme: this.props.theme||'#208fee',
            min: this.props.min||'1900-1-1',
            max: this.props.max||'2099-12-31',
            mark: this.props.mark||{},
            ...data
        });
    }
}