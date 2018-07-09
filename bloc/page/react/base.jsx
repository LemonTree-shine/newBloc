import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

export default class ReactBase extends Component{
    render(){
        return <div id="asdasd" ref={el=>this.odiv = el}>
            react的基本用法aaa
        </div>
    }
    constructor(){
        super()
    }

    componentDidMount(){
        console.log(this.odiv);
    }
}