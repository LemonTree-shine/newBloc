const express = require("express");
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser"); //读取cookie
const session = require('express-session');
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mysql = require("mysql");

var server = express();

//解析cookie
server.use(cookieParser());


//读取session
server.use(session({
    name:"session_Id",
    secret:"chenze",
    maxAge: 24*60 * 1000 * 30,
    signed:true
}));

//引用路由
var login = require("./router/login.js");

//登陆的接口统一前缀/manage
server.use("/manage",login);

//链接数据库
var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"bloc"
});

//处理请求跨域
server.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin,Content-Type, Content-Length');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    
    next();
});

//启动服务器
server.listen("8081",function(){
    console.log("启动了");
});

//屏蔽favicon.ico干扰
server.use("/favicon.ico",function(req,res){
    res.end();
});


/**
 * 处理上传文件
*/
var objMulter = multer({
    dest:"./www/upload"
});
server.use(objMulter.any());


/**
 * 处理application/json
*/
server.use(bodyParser.json());

/**
 * 处理表单传过来的数据(application/x-www-form-urlencoded)
*/
server.use(bodyParser.urlencoded({ extended: true }));

/**
 * 处理text/plain
*/
server.use(bodyParser.text());

//处理静态文件
server.use(express.static(__dirname+"/"));

//加载文章列表
server.use("/index",function(req,res){
    /**
     * 数据查询
    */
   console.log(req.body);
   var data = JSON.parse(req.body);
   if(data.type){
        db.query(`SELECT * FROM art_list_db WHERE type='${data.type}'`,(err,data)=>{
            if(err)
                console.log(err);
            else
                res.send({data:JSON.parse(JSON.stringify(data))});
        });
   }else{
        db.query(`SELECT * FROM art_list_db`,(err,data)=>{
            if(err)
                console.log(err);
            else
                res.send({data:JSON.parse(JSON.stringify(data))});
        });
   }
   
});

//文章点赞按钮
server.post("/addCount",function(req,res){
    var count = JSON.parse(req.body).count;
    var id = JSON.parse(req.body).id;
    /**
     * 数据查询
    */
   db.query(`UPDATE art_list_db SET count = '${++count}' WHERE ID='${id}'`,(err,data)=>{
        if(err)
            console.log(err);
        else{
            db.query(`SELECT * FROM art_list_db`,(err,data)=>{
                if(err)
                    console.log(err);
                else
                    res.send({data:JSON.parse(JSON.stringify(data))});
                    //console.log();
            })
        }
    })
});

//留言板功能
server.post("/getLeaveWord",function(req,res){
    db.query(`SELECT * FROM leaveword_db WHERE approval="1"`,(err,data)=>{
        if(err)
            console.log(err);
        else
            res.send({data:JSON.parse(JSON.stringify(data))});
            //console.log();
    })
});

//提交留言
server.post("/updateLeaveWord",function(req,res){
    console.log(JSON.parse(req.body));
    var name = JSON.parse(req.body).name?JSON.parse(req.body).name:"游客"+parseInt(Math.random()*1000000);
    var text = JSON.parse(req.body).text;
    /**
     * 数据查询
    */
   db.query(`INSERT INTO leaveword_db (name, leave_word,time) VALUES ('${name}', '${text}','2018-05-18')`,(err,data)=>{
        if(err)
            console.log(err);
        else{
            db.query(`SELECT * FROM leaveword_db WHERE approval="1"`,(err,data)=>{
                if(err)
                    console.log(err);
                else
                    res.send({data:JSON.parse(JSON.stringify(data))});
                    //console.log();
            })
        }
    })
});

//异常处理
process.on('uncaughtException', function (err) {
    console.error('系统异常了');
    console.error(err.stack);
});
