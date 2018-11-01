var fs = require("fs");

function fat(inDirUrl) {
    var allFileList = {};
    //读取目标文件列表
    var fileList = fs.readdirSync(inDirUrl);
    /**
     * 循环
    */
    fileList.forEach((list) => {

        var statInfo = fs.lstatSync(inDirUrl + "/" + list);

        //判断这个是一个文件
        if (statInfo.isFile()) {
            allFileList.push(inDirUrl + "/" + list);
        }

        //这是一个文件夹
        if (statInfo.isDirectory()) {
            allFileList = Object.assign(allFileList,copy(inDirUrl + "/" + list))
        }
    });
    return allFileList;
}

function fastPouter(inDirUrl){
    /**
     * 判断文件夹是否存在
    */
   var direxist = fs.existsSync("src");
   if(!direxist){
       fs.mkdirSync("src");
   }
    fs.writeFile("src/router.js",`export var router = ${JSON.stringify(fat(inDirUrl))}`,function(err){
        if(err){
            console.log(err);
        }
    });
}

module.exports = fastPouter;