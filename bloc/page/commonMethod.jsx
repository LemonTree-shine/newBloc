import React, { Component, ReactDOM } from "react";
import "../style/interview.less";

import { formatDate, numberSplit, splitFour, changeNumStyle, numToText ,CharMode} from "../common/util.js"

export default class CommonMethod extends Component {
    render() {
        return (<div className="interview">
            <div className="content">
                <div className="title">时间格式化</div>
                <pre className="hljs">
                    <code>
                        {`/**
 * @param {Date|String} time  new Date()或者毫秒字符串
 * @param {String} formatter  "yyyy-MM-DD HH:mm:ss"
 */
function formatDate(time,formatter){
    var format;
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
                <div className="title">去除前后空格</div>
                <pre className="hljs">
                    <code>
                        {`//去除前后空格
export function trim(str){
    return str.replace(/(^\\s*)|(\\s*$)/g,"");
}

//去除左边空格
export function trimLeft(str){
    return str.replace(/(^\\s*)/g,"");
}

//去除右边空格
export function trimRight(str){
    return str.replace(/(\\s*$)/g,"");
}

//去除所有空格
export function trimAll(str){
    return str.replace(/\\s*/g,"");
}`}
                    </code>
                </pre>
                <div className="title">首字母大写</div>
                <pre className="hljs">
                    <code>
                        {`export function firstUpCase(str){
    return str.toLowerCase().replace(/(^[a-z])|(\\s+[a-z])/g,function(value){
        return value.toUpperCase();
    });
}`}
                    </code>
                </pre>
                <div className="title">数字，字符串按照三个分割</div>
                <pre className="hljs">
                    <code>
                        {`export function numberSplit(str){
    return String(str).replace(/\\B(?=(\\d{3})+(?!\\d{1}))/g,",")
}`}
                    </code>
                </pre>
                <div className="title">金额转成文字格式</div>
                <pre className="hljs">
                    <code>
                        {`/**
* 金额转成文字大小写格式金额
* splitFour方法：处理数字转化为4个字符的数组
* changeNumStyle方法：处理每四位数的格式
* numToText方法：拼接changeNumStyle的处理结果；
* 用法：直接调用numToText(num:string,type:boolean);另外两个方法内部处理
*/
export function splitFour(num){
   var str = String(num).replace(/^0+/,"");
   console.log(str.replace(/\\B(?=(\\d{4})+(?!\\d{1}))/g,",").split(",")); 
   return str.replace(/\\B(?=(\\d{4})+(?!\\d{1}))/g,",").split(",");
}

export function changeNumStyle(num,type=false){
    var trans = {
        "0":"零",
        "1":"一",
        "2":"二",
        "3":"三",
        "4":"四",
        "5":"五",
        "6":"六",
        "7":"七",
        "8":"八",
        "9":"九"
    }
    var transB = {
        "0":"零",
        "1":"壹",
        "2":"贰",
        "3":"叁",
        "4":"肆",
        "5":"伍",
        "6":"陆",
        "7":"柒",
        "8":"捌",
        "9":"玖"
    }
    var change = ["","十","百","千"];
    var changeB = ["","拾","佰","仟"];
    var numArr = num.toString().split("");
    var newArr = numArr.reverse().map(function(value,index){
        if(type){
            return value+changeB[index%4]
        }else{
            return value+change[index%4]
        }
        
    });
    var newStr = newArr.reverse().join("").replace(/0+$/,"");
    var newStr2 = newStr.replace(/0.{1}/,"0");
    return newStr2.toString().replace(/\\d/g,function(value){
        if(type){
            return transB[value]
        }else{
            return trans[value]
        }
        
    })
}

/**
 * 入口方法
 * @param {number} num 
 * @param {boolean} type true:转换成中文大写金额，false：中文小写金额，默认false
 */
export function numToText(num,type){
    var trans = splitFour(num)
    var result = "";
    var arr = [];
    if(type){
        arr = ["萬","億"]
    }else{
        arr = ["万","亿"]
    }
    trans.forEach((value,index)=>{
        //console.log(changeNumStyle(value))
        if(trans.length=="2"){
            if(index==0){
                result+=changeNumStyle(value,type)+arr[0];
            }else{
                result+=changeNumStyle(value,type)
            }
        }else if(trans.length=="3"){
            if(index==0){
                result+=changeNumStyle(value,type)+arr[1];
            }else if(index==1){
                result+=changeNumStyle(value,type)+arr[0]
            }else{
                result+=changeNumStyle(value,type)
            }
        }  
    });
    if(type){
        return result.replace(/^零+.{1}/,"")+"圆";
    }else{
        return result.replace(/^零+.{1}/,"");
    } 
}`}
                    </code>
                </pre>
                <div className="title">密码强度</div>
                <pre className="hljs">
                    <code>
{`/**
 * 密码强度验证
 * @param {String} str
*/
export function CharMode(str) {
    const level = {
        "danger": "危险",
        "low": "低",
        "mid": "中",
        "high": "高"
    }
    /**
     * 全是数字的密码
    */
    if (/^\\d+$/.test(str)) {
        return level.danger
    }
    /**
      * 全是小写或全是大写字母的密码
     */
    if (/^[a-z]+$/.test(str) || /^[A-Z]+$/.test(str)) {
        return level.danger
    }
    /**
     * 只有大写字母和小写字母
    */
    if (/^(?=.*[a-z])(?=.*[A-Z])(?!.*[0-9])(?!.*[^0-9a-zA-Z])/.test(str)) {
        return level.low
    }
    /**
     * 全是数字+特殊字符
    */
    if (/^(?=.*[0-9])(?=.*[^0-9a-zA-Z])(?!.*[a-zA-Z])/.test(str)) {
        return level.low
    }
    /**
     * 全是大写或者小写+特殊字符
    */
    if (/^((?=.*[a-z])(?!.*[0-9])(?!.*[A-Z])|(?=.*[A-Z])(?!.*[0-9])(?!.*[a-z]))(?=.*[^a-zA-Z0-9])/.test(str)) {
        return level.low
    }
    /**
     * 包含数字和大小写字母中的一种，不包含特殊字符
    */
    if (/^((?=.*[0-9])(?=.*[a-z])(?!.*[A-Z])|(?=.*[0-9])(?=.*[A-Z])(?!.*[a-z]))(?!.*[^a-zA-Z0-9])/.test(str)) {
        return level.low;
    }
    /**
      * 大写+小写+特殊字符
     */
    if (/^(?=.*[A-Z])(?=.*[a-z])(?!.*[0-9])(?=.*[^a-zA-Z0-9])/.test(str)) {
        return level.mid;
    }
    /**
     * 包含数字大小写中的一种，还有特殊字符
    */
    if (/^((?=.*[0-9])(?=.*[a-z])(?!.*[A-Z])|(?=.*[0-9])(?=.*[A-Z])(?!.*[a-z]))(?=.*[^a-zA-Z0-9])/.test(str)) {
        return level.mid;
    }
    /**
     * 包含数字和大小写字符，不包含特殊字符
    */
    if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*[^0-9a-zA-Z])/.test(str)) {
        return level.mid;
    }
    /**
     * 包含字母数字，字母大小写，还有特殊字符
    */
    if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^0-9a-zA-Z])/.test(str)) {
        return level.high;
    }
}`}
                    </code>
                </pre>
            </div>
        </div>)

    }
    componentWillMount() {

    }
    componentDidMount() {
        //var a = 9502310790;

        //console.log(numToText(a,true));

        //console.log(/[^a-z]/i.test("A"));

        

        //console.log(CharMode("123SDDasd"));

        //var a = "123123asdasdDDFasd";

        //console.log(/\d+([A-Z]+|[a-z]+)/.exec(a))
        var a = ["a","b","c","d","e"];
console.log(a.indexOf("b"));   // 返回1
console.log(a.indexOf("h"));   // 返回-1
console.log(a.lastIndexOf("b"));  // 返回2
console.log(a.lastIndexOf("h"));  // 返回-1

    }
}