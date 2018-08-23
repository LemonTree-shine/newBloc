import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
import { BrowserRouter, StaticRouter, Route, Link, hashHistory, NavLink, HashRouter } from 'react-router-dom';
import "./style/css.less";
import "./style/eyes.less";

export default class CssShow extends Component {
    render() {
        return (<div className="css3-skills">
            <div className="eyes">
                <div className="title">css画的眼睛</div>
                {/* <!-- 佐助眼睛样式 --> */}
                <div className="eye-box">
                    <div className="box">
                        <div className="cicleLeft">
                            <div className="cicleRight"></div>
                        </div>
                    </div>
                    <div className="box box2">
                        <div className="cicleLeft">
                            <div className="cicleRight"></div>
                        </div>
                    </div>
                    <div className="box box3">
                        <div className="cicleLeft">
                            <div className="cicleRight"></div>
                        </div>
                    </div>
                    <div className="eye-box2">
                        <div className="box">
                            <div className="cicleLeft">
                                <div className="cicleRight"></div>
                            </div>
                        </div>
                        <div className="box box2">
                            <div className="cicleLeft">
                                <div className="cicleRight"></div>
                            </div>
                        </div>
                        <div className="box box3">
                            <div className="cicleLeft">
                                <div className="cicleRight"></div>
                            </div>
                        </div>
                    </div>
                    <div className="centerCircle"></div>
                    <div className="centerCircle2"></div>
                </div>

                {/* <!-- 带土眼镜样式 --> */}
                <div className="datu-box">
                    <div className="shdow"></div>
                    <div className="daitu-circle"></div>
                    <div className="dt-box">
                        <div className="demo">
                            <div className="datu-1"></div>
                        </div>
                        <div className="datu-2">
                            <div className="dt-cicle1"></div>
                            <div className="dt-cicle2"></div>
                        </div>
                    </div>
                    <div className="dt-box dt-box2">
                        <div className="demo">
                            <div className="datu-1"></div>
                        </div>
                        <div className="datu-2">
                            <div className="dt-cicle1"></div>
                            <div className="dt-cicle2"></div>
                        </div>
                    </div>
                    <div className="dt-box dt-box3">
                        <div className="demo">
                            <div className="datu-1"></div>
                        </div>
                        <div className="datu-2">
                            <div className="dt-cicle1"></div>
                            <div className="dt-cicle2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
    componentDidMount() {
        //hljs.initHighlighting();  
        function changeASK(num,type){
            var list = [];
            var resNum = num;
            var result = "";
            
            var changeList = {
                "10":"a",
                "11":"b",
                "12":"c",
                "13":"d",
                "14":"e",
                "15":"f",
            }
            while(resNum>0){
                if(resNum%type>=10){
                    list.push(changeList[resNum%type]);
                }else{
                    list.push(resNum%type);
                }
                resNum = parseInt(resNum/type);
            }
        
            for(let i = list.length-1;i>=0;i--){
                result+=list[i];
            }
            console.log(num.toString(type));
            return result;
        }

        function to10(num,cur){
            var result = 0;
            var changeList = {
                "a":"10",
                "b":"11",
                "c":"12",
                "d":"13",
                "e":"14",
                "15":"f",
            }
            var size = num.length-1;
            var length = num.length-1;
            while(size>=0){
                if(changeList[num[length-size]]){
                    result+= changeList[num[length-size]]*Math.pow(cur,size);
                }else{
                    result+= num[length-size]*Math.pow(cur,size);
                }
                
                size--;
            }
            console.log(result);
        }
    }
}