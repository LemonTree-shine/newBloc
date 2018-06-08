var webpack = require('webpack');
var fs = require("fs");
var webpackBaseConfig = require('./webpack.config.js');
var cp = require('child_process');  //运行是打开浏览器
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');
var app = express();




var compiler = webpack(webpackBaseConfig);

//console.log(compiler.options.entry.index);

console.log(process.env.NODE_ENV);

compiler.options.entry.index.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true')
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));

app.use('/',express.static(__dirname));

//读取package.json
var json = fs.readFileSync("./package.json","utf-8");
//获取端口号
var port = JSON.parse(json).port?JSON.parse(json).port:"8080";


var http = require('http');
var reload = require("reload");
var server = http.createServer(app);
reload(server, app);
server.listen(port, function(){
    console.log('App (dev) is now running on port '+port+'!');
});

if(process.platform=="win32"){
    cp.exec('start http://localhost:'+port+"/#/home/index");
}else{
    cp.exec('open http://localhost:'+port+"/#/home/index");
}








