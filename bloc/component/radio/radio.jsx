import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import "./radio.less";

export default class Radio extends Component{
    render(){
        return (<div className="c-radioBox">
            <input ref="thisRadio" value={this.props.value} className="c-radio" type="radio" name={this.props.name} onChange={(e)=>this.handleChange(e)}/>
            <div className={this.state.checked?"c-radioCss c-radioCss-active":"c-radioCss"}></div>
        </div>)
    }
    constructor(){
        super();
        this.state = {
            checked:false
        }
    }
    handleChange = (e)=>{
        this.props.propsFunction(e.target);
    }
    componentDidMount(){
        //console.log(this);
    }

    componentWillReceiveProps(nextProps){
        //console.log(this.refs.thisRadio.checked);
        this.setState({
            checked:this.refs.thisRadio.checked
        });
    }
    
}
export class GroupRadio extends Component{
    render(){
        return <div>
            {
                React.Children.map(this.props.children,  (child)=>{
                    //return child;
                    var currentValue = {};
                    if(this.state.currentValue){
                        currentValue = {
                            currentValue:this.state.currentValue
                        }
                    }
                    return React.cloneElement(child, {
                        //父组件的方法挂载到props.showValue上，以便子组件内部通过props调用
                        propsFunction:this.propsFunction,
                        ...currentValue
                    })
                })
            }
        </div>
    }
    constructor(){
        super();
        this.state = {currentValue:""}
    }
    currentValue = "";
    value = {};
    propsFunction = (e)=>{
        //debugger;
        var a = new Date().getTime();
        this.setState({
            currentValue:e.value
        });
        this.currentValue = e.value;

        this.value[e.name] = e.value;

        console.log(this);
        console.log(e.name);
    }
}