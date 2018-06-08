import React,{Component,ReactDOM} from "react";
import "../style/interview.less";

export default class CommonMethod extends Component{
    render(){
        return (<div className="interview">
            <div className="content">
                <div className="title">js常用方法总结</div>
                <pre>
                    <code>
                        String,Number,Boolean,Number,Null
                    </code>
                </pre>
            </div>
        </div>)
    }
    componentWillMount(){

    }
    componentDidMount(){
        hljs.initHighlighting();  
    }
}