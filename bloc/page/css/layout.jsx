import React,{Component,ReactDOM} from "react";
import "./style/cssLayout.less"

export default class Layout extends Component{
    render(){
        return (<div className="css-layout">
            <div className="title">单飞翼布局</div>
            <div className="left-layout">
                <div className="left-part">宽度固定</div>
                <div className="content-part">宽度随屏幕大小变动</div>
            </div>
            <div className="title">双飞翼布局</div>
            <div className="center-layout">
                <div className="left-part">宽度固定</div>
                <div className="right-part">宽度固定</div>
                <div className="content-part">宽度随屏幕大小变动</div>
            </div>
            <div className="title">定位布局</div>
            <div className="position-layout">
                <div className="left-part">宽度固定</div>
                <div className="right-part">宽度固定</div>
                <div className="content-part">宽度随屏幕大小变动</div>
            </div>
        </div>)
    }
}