import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import "./toast.less";


export default class Toast extends Component{
    render(){
        return (<div className={this.classContent} ref={div => {
            this.toastElem = div
        }}>
            {this.content}
        </div>)
    }

    content = "这是一个提示框组件";

    classContent = "c-toast";
    getPosition = "";

    close = ()=>{
        //console.log(this.getPosition);
        if(this.getPosition==="rightBottom"||this.getPosition==="leftBottom"){
            this.toastElem.className = this.toastElem.className+" c-toast-close-bottom";
        }else{
            this.toastElem.className = this.toastElem.className+" c-toast-close";
        }
        
        setTimeout(()=>{
            this.toastElem.remove();
        },300);
        
    }

    

    static show(content,position){
        var toast = new Toast();

        /**
         * 定义内容
        */
        toast.content = content?content:toast.content;

        /**
         * 判断定位位置是在上面还是下面，下面的话动画就网下移除
        */
        if(position){
            toast.getPosition = position;
        }
        /**
         * 指定位置，默认为右上角
        */
        if(position==="leftTop"){
            toast.classContent += " c-toast-left-top"
        }else if(position==="leftBottom"){
            toast.classContent += " c-toast-left-bottom"
        }else if(position==="rightBottom"){
            toast.classContent += " c-toast-right-bottom"
        }
       
        var oDiv = document.createElement("div");
        document.body.append(oDiv);
        reactDOM.render(
            toast.render(),
            oDiv
        );

        setTimeout(()=>{
            toast.close();
            //resolve();
        },2000)

        // new Promise((resolve,reject)=>{

        //     setTimeout(()=>{
        //         //toast.close();
        //         resolve();
        //     },2000)
            
        // }).then(()=>{
        //     toast.close();
        // });
        
    }
}