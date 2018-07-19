var child = require("child_process");
//console.log(child);
// var sh = `ls`
// child.exec(sh,{},(err,stdout,stderr)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(stdout);
// });

console.log(process.pid);

//开一个新的进程
let Child = child.fork("./run.js",["a1","a2"]);

Child.on("message",(message)=>{
    console.log(message)
});

Child.send({message:"form parents"});
