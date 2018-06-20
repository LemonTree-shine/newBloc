import React,{Component,ReactDOM} from "react";
import "../style/interview.less";

export default class CommonMethod extends Component{
    render(){
        return (<div className="interview">
            <div className="content">
                <div className="title">js常用方法总结</div>
                时间格式转换，去除前后空格，数字三位数分割，数字大小写转换，密码强度，
            </div>
        </div>)
    }
    componentWillMount(){

    }
    componentDidMount(){
        hljs.initHighlighting();  
        
        function formatDate(time,formatter){
            var format
            var date = new Date();

            if(formatter){
                format = formatter
            }else{
                format = "yyyy-MM-DD HH:mm:ss"
            }

            if(time instanceof Date){
                date = time
            }else if(typeof time == "string"){
                if(/^\d{1,}$/.test(time)){
                    date = new Date(Number(time))
                }else{
                    date = new Date(time)
                }
                
            }

            var timeEnum = {
                y:date.getFullYear(),
                M:date.getMonth()+1,
                D:date.getDate(),
                H:date.getHours(),
                m:date.getMinutes(),
                s:date.getSeconds()
            }

            return format.replace(/[yMDHms]{1,}/g,function(value){
                return timeEnum[value[0]]<10?"0"+timeEnum[value[0]]:timeEnum[value[0]]
            });
        }

        console.log(formatDate("2018-04-05"))
    }
}