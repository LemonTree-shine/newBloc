process.on( 'message', (m) => {
    console.log(m);
    console.log(process.argv[2]);
    setTimeout(()=>{
        process.send({"message":"success"})
    },2000)
});
console.log(process.pid);

