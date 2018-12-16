var fs = require("fs");

function apiPageModel(content){
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>API</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <style>
        *{
            padding: 0px;
            margin: 0;
        }
        body{
            background: #f7f7f7;
        }
        pre{
            line-height: 13px;
        }
        .box{
            border-radius: 5px;
            border: 1px solid #ccc;
            margin: 10px;
            margin-bottom: 20px;
            background: #ffffff;
        }
        .title{
    
            font-size: 20px;
            padding: 15px 0 10px;
            margin:0 15px;
            border-bottom: 2px solid #999;
        }
        .title div{
            display: inline-block;
        }
    
        .title .type{
            padding: 5px 11px;
            border-radius: 5px;
            background: #0275d8;
            color: #ffffff;
        }
        .title .name{
            padding: 0 10px;
            color:#333
        }
    
        .title .summary{
            color: #999;
        }
    
        .Parameter pre{
            margin: 15px;
            border: 1px solid #eaeefb;
            border-radius: 5px;
            padding: 10px;
            background: #f9fafc;
            font-size: 14px;
        }
        .Parameter .title-Param{
            margin-left: 15px;
            margin-top: 15px;
            font-size: 18px;
            font-weight: 700;
        }
    
        .Parameter pre .param-name{
            color:#3182bd;
        }
        .Parameter pre .param-value{
            color:#e6550d
        }
        .Parameter pre .param-param{
            color:#636363
        }
    </style>
    <body>
        ${content}
    </body>
    </html>`
}

/**解析api.json文件 */
function readApiJson(){
    var apiPath = process.cwd()+"/api/api.json";
    var direxist = fs.existsSync(apiPath);
    if(!direxist){
        console.log("api.json文件不存在");
        return false;
    }

    //获取json内容
    var content = fs.readFileSync(apiPath,{encoding:"utf-8"});
    
    var contentObj = JSON.parse(content);
    //console.log(content);

    //初始化页面模版
    var apiContent = "";

    //循环第一层数据
    for(let key in contentObj){
        //参数字符串拼接
        var paramsString = "";
        for(let paramKey in contentObj[key].params){
            paramsString+=`
    <span class="param-name">${paramKey}:</span><span  class="param-value">"${paramKey}:${contentObj[key].params[paramKey].type}"</span>,    <span  class="param-param">//${contentObj[key].params[paramKey].summary}</span>
`}

        //response字符串拼接
        var responseString = "";
        for(let responseKey in contentObj[key].response){
            responseString+=`
    <span class="param-name">${responseKey}:</span><span  class="param-value">"${responseKey}:${contentObj[key].response[responseKey].type}"</span>,    <span  class="param-param">//${contentObj[key].response[responseKey].summary}</span>
`}

        apiContent+=`<div class="box">
        <div class="title">
            <div class="type">${contentObj[key].type}</div>
            <div class="name">${key}</div>
            <div class="summary">${contentObj[key].summary}</div>
        </div>
        <div class="Parameter">
            <div class="title-Param">contentType</div>
            <pre>
                <code>
{
    <span class="param-name">contentType</span><span  class="param-value">"${contentObj[key].contentType}"</span>
}
                </code>
            </pre>
        </div>
        <div class="Parameter">
            <div class="title-Param">Parameter</div>
            <pre>
                <code>
{${paramsString}}
                </code>
            </pre>
        </div>
        <div class="Parameter">
            <div class="title-Param">response</div>
            <pre>
                <code>
{${responseString}}
                </code>
            </pre>
        </div>
    </div>`
    }
    //console.log(apiContent);
    

    fs.writeFile(process.cwd()+"/api/api.html", apiPageModel(apiContent), function (err) {
        if (err) {
            console.log(err);
        }
    });

}

module.exports = {
    readApiJson,
    apiPageModel
};