#!/usr/bin/env node

var fs = require("fs");

//解析api.json文件
var {apiPageModel,readApiJson} = require("./js/apiModel");

//创建路由文件
var createDir = require("./js/createDir");

//
var copy = require("./js/copy");

var arg = process.argv;

switch (arg[2]) {
    //输入命令指令
    case "new":
        createDir(process.cwd() + "/page");
        break;
    case "api":
        readApiJson();
        break;
    case "copy":
        if(process.argv[3]&&process.argv[4]){
            copy(process.cwd()+"/"+process.argv[3],process.cwd()+"/"+process.argv[4]);
        }else{
            console.log("两个参数均不能为空");
        }
        break;
    default:
        console.log("请输入正确的参数名字")
}







