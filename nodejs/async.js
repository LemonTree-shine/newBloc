async function a(){
    function b(){
        return new Promise(function(resolve,reject){
            resolve(123);
        })
    }
    var p = await b();
    console.log(p);
}
var aaa = a()
console.log("asdasd");