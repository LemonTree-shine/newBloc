const fs = require("fs");

function copy(inDirUrl,outDirUrl){
    //读取目标文件列表
    var fileList = fs.readdirSync(inDirUrl);
    /**
     * 判断文件夹是否存在
    */
    var direxist = fs.existsSync(outDirUrl);
    if(!direxist){
        fs.mkdirSync(outDirUrl);
    }

    /**
     * 循环
    */
   fileList.forEach((list)=>{

        var statInfo = fs.lstatSync(inDirUrl+"/"+list);

        //判断这个是一个文件
        if(statInfo.isFile()){
            var fileCOntent = fs.readFileSync(inDirUrl+"/"+list);
            fs.writeFile(outDirUrl+"/"+list,fileCOntent,function(err){
                if(err){
                    console.log(err);
                }
            });
        }

        if(statInfo.isDirectory()){
            copy(inDirUrl+"/"+list,outDirUrl+"/"+list)
        }
        
    });
}

module.exports = copy;

