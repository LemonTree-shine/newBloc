var http = require("http");
var url = require("url");
var fs = require("fs");
var events = require("events");
var querystring = require('querystring');
var io = require('socket.io')();

function main() {
    var server = http.createServer(function (req, res) {
        console.log(req.headers.origin)


        //console.log(url.parse(req.url));
        if (req.url == "/favicon.ico") {
            return;
        }
        if (req.url == "/demo") {
            renderHTML(req, res, req.url+".html");
            return;
        }
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'Origin,Content-Type, Content-Length');
        res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Credentials', true);
        console.log(req.method)
        //处理url
        var parts = url.parse(req.url).pathname.split("/");
        console.log(parts);

        //处理get请求方式
        //console.log(querystring.parse(url.parse(req.url).query))

        //处理post请求方式
        var data = "";
        if (req.method == "POST") {
            //处理get请求
            methodsPost(req, res, data, parts);
        } else if (req.method == "OPTIONS") {
            renderJSON(req, res, "");
        }
    });

    

    server.listen("9999", function () {
        console.log("server run 9999");
    });

    io.listen(server);

    //console.log(io);

    io.sockets.on('connection', function (socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('aaa', function (data) {
            console.log(data);
        });
    });
}

//返回一个json
function renderJSON(req, res, data) {
    res.writeHead(200, {
        'Content-Type': "application/json",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    })
    res.end(JSON.stringify(data))
}

//返回一个错误信息
function renderERROR(req, res) {
    res.writeHead(200, {
        'Content-Type': "application/json",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    })
    res.end(JSON.stringify({ msg: "路由不存在" }))
}

function renderHTML(req, res, path) {
    fs.readFile(__dirname + path, function (err, files) {
        res.writeHead(200, { "Content-type": "text/html;charset=utf-8" });
        res.end(files);
    });
}


function methodsPost(req, res, options, parts) {
    var data = options;
    req.on("data", function (result) {
        data += result;
    });
    req.on("end", function () {
        //data+=result;
        //console.log(JSON.parse(data))
        //区分路由地址
        switch (parts[1]) {
            case "index":
                renderJSON(req, res, JSON.parse(data));
                break;
            default:
                renderERROR(req, res)
        }
    })
}

main();
