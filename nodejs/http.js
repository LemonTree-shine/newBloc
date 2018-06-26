var http = require("http");
var url = require("url");
var fs = require("fs");
var events = require("events");
var querystring = require('querystring');

function main(){
    var server = http.createServer(function(req,res){
        //console.log(url.parse(req.url));
        if(req.url=="/favicon.ico"){
            return;
        }
        if(req.url=="/demo.html"){
            renderHTML(req,res,req.url);
            return;
        }

        var parts = url.parse(req.url).pathname.split("/");

        //处理get请求方式
        //console.log(querystring.parse(url.parse(req.url).query))

        //处理post请求方式
        var data = "";
        req.on("data",function(result){
            data+=result;
        });
        req.on("end",function(){
            //data+=result;
            console.log(JSON.parse(data))
        })

        switch(parts[1]){
            case "index":
                renderJSON(req,res,{path:"index"});
                break;
            default:
                renderERROR(req,res)
        }
    });

    server.listen("9999",function(){
        console.log("server run 9999");
    })
}

function renderJSON(req,res,data){
    res.writeHead(200, {
        'Content-Type': "application/json",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    })
    res.end(JSON.stringify(data))
}

function renderERROR(req,res){
    res.writeHead(200, {
        'Content-Type': "application/json",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    })
    res.end(JSON.stringify({msg:"路由不存在"}))
}

function renderHTML(req,res,path){
    fs.readFile(__dirname + path, function(err, files){
        res.writeHead(200, {"Content-type":"text/html;charset=utf-8"});  
        res.end(files);
    });
}

main();
