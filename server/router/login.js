const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser"); //读取cookie
const session = require('express-session');
const mysql = require("mysql");
const child = require('child_process');

var router = express.Router();

//链接数据库
var db = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"123456",
    database:"bloc"
});

//解析cookie
router.use(cookieParser());

//读取session
router.use(session({
    name:"Login_Id",
    secret:"123456",
    cookie:{
        maxAge:1000*60*30,
        httpOnly:false
    },
    resave: false,
    saveUninitialized: true
}));

/**
 * 处理application/json
*/
router.use(bodyParser.json());

/**
 * 处理表单传过来的数据(application/x-www-form-urlencoded)
*/
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * 处理text/plain
*/
router.use(bodyParser.text());


//路由拦截地址
router.all("*",function (req, res, next) {
    /**
     * 所有的路由请求都会经过这里
     * 登录拦截都可以在这里判断
     * 类似拦截器
    */
    res.header("Access-Control-Allow-Origin", req.headers.origin); //需要显示设置来源
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials",true); //带cookies
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");

    if(req.url == "/login"){
        next();
        return;
    }
    if (req.session.username) {
        next();
    } else {
        res.send({
            code:10000,
            message: "session不存在,或者session已过期了"
        })
    }
});

//登录接口
router.use("/login", function (req, res, next) {
    console.log(req.body)
    db.query(`SELECT * FROM admin_db WHERE username='${JSON.parse(req.body).username}'`,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            var data = JSON.parse(JSON.stringify(data));
            console.log(data)
            if(data.length){
                if(JSON.parse(req.body).password == data[0].password){
                    req.session.username = JSON.parse(req.body).username
                    req.session.password = JSON.parse(req.body).password
                    res.send({
                        code:0,
                        message:"登入成功!"
                    });
                }else{
                    res.send({
                        code:10000,
                        message:"用户名或密码错误！"
                    });
                }
            }else{
                res.send({
                    code:10000,
                    message:"用户名或密码错误！"
                });
            }
        }
   
    })
});

//获取用户信息
router.use("/getUser", function (req, res, next) {

    res.send({
        code:0,
        data:{
            username:req.session.username,
            password:req.session.password,
        }
    });
});

//加载留言列表
router.use("/leaveWordList", function (req, res, next) {

    db.query(`SELECT * FROM leaveword_db`,(err,data)=>{
        if(err)
            console.log(err);
        else
            res.send({data:JSON.parse(JSON.stringify(data))});
            //console.log();
    })
});

//留言审批
router.use("/approval", function (req, res, next) {

    db.query(`UPDATE leaveword_db SET approval = '1' WHERE ID = '${JSON.parse(req.body).id}'`,(err,data)=>{
        if(err)
            console.log(err);
        else
            res.send({
                data:"已通过"
            });
            //console.log();
    })
});

//部署接口
router.use("/deploy",function(req,res,next){
    child.execFile('./start.sh',function (err, stdout, stderr) {
        //console.log(stdout);
        if(err){
            console.log(err)
            res.send({
                data:err
            }); 
        }else{
            res.send({
                data:"部署成功"
            });
        }
    });
})

module.exports = router;