import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import "./button.less";

export default class Button extends Component{
	render(){
        return (<button 
            className={this.props.className?"c-button "+this.props.className:"c-button"} 
            onClick={this.props.onClick}
            onSubmit={this.props.onSubmit}
            disabled={this.props.disabled?this.props.disabled:""}
            >
            {this.props.children}
        </button>)
	}
}