import React,{Component,ReactDOM} from "react";
import "../style/interview.less";

export default class CommonMethod extends Component{
    render(){
        return (<div className="interview">
            <div className="content">
            时间格式转换，去除前后空格，数字三位数分割，数字大小写转换，密码强度，
                <div className="title">时间格式化</div>
                
                <div>
                    默认格式:yyyy-MM-DD HH:mm:ss<br/>
                    默认时间:当前时间
                </div>
                <br/>
                <pre className="hljs"> 
                    <code>
{`function formatDate(time,formatter){
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
        if(/^\\d{1,}$/.test(time)){
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
console.log(formatDate("2018-04-05")) //2018-04-05 08:00:00
console.log(formatDate("2018-04-05","yyyy/MM/DD")) //2018/04/05
`}
                    </code>
                </pre>
            </div>
        </div>)
    }
    componentWillMount(){

    }
    componentDidMount(){
        //hljs.initHighlighting();  
        
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
        console.log(formatDate("2018-04-05","yyyy/MM/DD"));

        var a = "123123345454541";

        console.log(a.replace(/\B(?=(\d{3})+(?!\d{1}))/g,","));


    }
}