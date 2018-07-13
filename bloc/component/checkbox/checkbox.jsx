import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import "./checkBox.less";

export default class CheckBox extends Component{
    render(){
        return (<div className={this.state.ifActive?"c-checkBox c-checkBox-input-active":"c-checkBox"}>
            <input 
             className="c-checkBox-input"
             type="checkBox"
             name = {this.props.name?this.props.name:""} 
             value = {this.props.value?this.props.value:""} 
             onChange={this.handleChange}/>
        </div>)
    }
    constructor(props){
        super();
        this.state = {
            ifActive:false
        }
    }
    handleChange = (e)=>{
        //alert(e.target.checked);
        if(this.props.setValue){
            this.props.setValue(e.target);
        }
        this.setState({
            ifActive:e.target.checked
        });
        //console.log(this.props.setValue.constructor);
    }
}

export class CheckBoxGroup extends Component{
    render(){
        return (<div>
            {React.Children.map(this.props.children,(child)=>{
                return React.cloneElement(child,{
                    setValue:this.setValue
                })
            })}
        </div>)
    }
    constructor(props){
        super();
    }
    value = {};

    setValue = (get)=>{
        if(get.checked){
            this.value[get.name] = get.value;
        }else{
            delete this.value[get.name];
        }
    }
}