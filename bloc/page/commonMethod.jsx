import React, { Component, ReactDOM } from "react";
import "../style/interview.less";
import Prism from 'prismjs';

import { formatDate, numberSplit, splitFour, changeNumStyle, numToText, CharMode } from "../common/util.js"

export default class CommonMethod extends Component {
    render() {
        return (<div className="interview">
            <div className="content">
                <div className="title">时间格式化</div>
                <pre className="hljs">
                    <code className="lang-css">
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
                    <code className="lang-css">
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
                    <code className="lang-css">
                        {`export function firstUpCase(str){
    return str.toLowerCase().replace(/(^[a-z])|(\\s+[a-z])/g,function(value){
        return value.toUpperCase();
    });
}`}
                    </code>
                </pre>
                <div className="title">数字，字符串按照三个分割</div>
                <pre className="hljs">
                    <code className="lang-css">
                        {`export function numberSplit(str){
    return String(str).replace(/\\B(?=(\\d{3})+(?!\\d{1}))/g,",")
}`}
                    </code>
                </pre>
                <div className="title">金额转成文字格式</div>
                <pre className="hljs">
                    <code className="lang-css">
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
                    <code className="lang-css">
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
                <div className="title">10进制转化成其他进制</div>
                <pre className="hljs">
                    <code className="lang-css">
{`js方法：toString(x)  //x代表需要转化的进制

自己的方法实现:
/**
 * 十进制转化成其他进制方法
 * num:表示一个十进制的数字
 * type:表示所要转到的目标进制
*/
function changeSystem(num,type){
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
    return result;
}

var a = 110;
console.log(changeSystem(a,"2")); //1101110
console.log(a.toString("2"));     //1101110
`}
                    </code>
                </pre>
                <div className="title">其他进制转换成10进制</div>
                <pre className="hljs">
                    <code className="lang-css">
{`js方法：parseInt(a,b)  //a代表需当前进制的值，b表示当前进制（不填代表10进制）;

自己的方法实现
/**
 * 其他进制转换成10进制
 * str表示当前进制的值
 * cur表示当前进制
*/
function to10System(str,cur){
    var result = 0;
    var changeList = {
        "a":"10",
        "b":"11",
        "c":"12",
        "d":"13",
        "e":"14",
        "f":"15",
    }
    var size = str.length-1;
    var length = str.length-1;
    while(size>=0){
        if(changeList[str[length-size]]){
            result+= changeList[str[length-size]]*Math.pow(cur,size);
        }else{
            result+= str[length-size]*Math.pow(cur,size);
        }
        
        size--;
    }
    return result;
}

var a = "110";
console.log(to10System("f00","16")); //3840
console.log(parseInt("f00","16"));   //3840
`}
                    </code>
                </pre>
            </div>
        </div>)

    }
    componentWillMount() {

    }
    componentDidMount() {
        Prism.highlightAll();

        


        /**
         * 十进制转化成其他进制方法
        */
        function changeSystem(num,type){
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
            return result;
        }

        var b = 3840;
        // console.log(changeSystem(b,"16"));
        // console.log(b.toString("16"));

        /**
         * 其他进制转换成10进制
         * str表示当前进制的值
         * cur表示当前进制
        */
        function to10System(str,cur){
            var result = 0;
            var changeList = {
                "a":"10",
                "b":"11",
                "c":"12",
                "d":"13",
                "e":"14",
                "f":"15",
            }
            var size = str.length-1;
            var length = str.length-1;
            while(size>=0){
                if(changeList[str[length-size]]){
                    result+= changeList[str[length-size]]*Math.pow(cur,size);
                }else{
                    result+= str[length-size]*Math.pow(cur,size);
                }
                
                size--;
            }
            return result;
        }

        var a = "110";
        // console.log(to10System("f00","16"));
        // console.log(parseInt("f00","16"));

        var a = {"a":1,"k":"123123"};

        function insertBeforeObj(obj,newkey,value,curKey){
            var temObj;
            for(const key in obj){
                if(key===curKey){
                    temObj = {};
                }
                if(temObj){
                    temObj[key] = obj[key];
                    delete obj[key];
                }
            }
            obj[newkey] = value;
            return {...obj,...temObj};
        }

        //console.log(insertBeforeObj(a,"b","2","a"));

        /**
         * x1,y1为目标点
         * x2,y2和x3,y3为确定的一条直线
        */
        function pointToLine(x1,y1,x2,y2,x3,y3){


            //判断线是否是横着或者竖着的
            if(x1-x2===x1-x3){
                return Math.abs(x1-x2);
            }
            if(y1-y2===y1-y3){
                return Math.abs(y1-y2);
            }

            //定义点到线的距离为h
            var h;
            //计算三边长度
            var ab = Math.sqrt(Math.pow((x1-x2), 2)+Math.pow((y1-y2), 2));
            var ac = Math.sqrt(Math.pow((x1-x3), 2)+Math.pow((y1-y3), 2));
            var bc = Math.sqrt(Math.pow((x2-x3), 2)+Math.pow((y2-y3), 2));

            //半周长
            var p = (ab+ac+bc)/2;

            //根据海伦公式，求面积s
            var s = Math.sqrt(p*(p-ab)*(p-ac)*(p-bc));

            //根据面积s=1/2*bc*h;
            h = 2*s/bc;
            
            return h;
        }

        console.log(pointToLine(0,0,2,0,0,2));
    }
}