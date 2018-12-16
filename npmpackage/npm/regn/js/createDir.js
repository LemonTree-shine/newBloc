var fs = require("fs");
var arg = process.argv;

//页面模版内容
var tpl = `import React,{Component,ReactDOM} from "react";
import "./__tpl.less";
import {configUrl,Ajax} from "common/common";

export default class Index extends Component{
    render(){
        return <div className="c-__tpl">hello world</div>
    }
}`;

//less模版
var tpl_less = `.c-__tpl{

}`;

/** 创建页面文件 */
function createDir(path) {
    //判断要创建的文件夹参数是否存在
    if (arg[3]) {
        /**
         * 判断文件夹是否存在
        */
        var curPath = path + "/" + arg[3];

        //判断文件夹是否已经存在
        var direxist = fs.existsSync(curPath);
        if (!direxist) {
            fs.mkdirSync(curPath);
            //创建jsx文件
            fs.writeFile(curPath + "/" + arg[3] + ".jsx", tpl.replace(/__tpl/g,arg[3]), function (err) {
                if (err) {
                    console.log(err);
                }
            });
            //创建less文件
            fs.writeFile(curPath + "/" + arg[3] + ".less", tpl_less.replace("__tpl",arg[3]), function (err) {
                if (err) {
                    console.log(err);
                }
            });
        }else{
            console.log("文件夹已经存在！");
        }
    } else {
        console.log("请输入文件名称！");
    }
}

module.exports = createDir;