export function formatDate(date,format){
    if(date instanceof Date){
        var time = date;
    }else{
        var time = new Date(date);
    }

    var formatJson = {
        y:time.getFullYear(),
        M:time.getMonth() + 1,
        d:time.getDate(),
        H:time.getHours(),
        m:time.getMinutes(),
        s:time.getSeconds(),
    }

    var format = format?format:"yyyy/MM/dd HH:mm:ss";

    return format.replace(/[yMdHms]+/g,(value)=>{

        var key = formatJson[value.substring(0,1)];

        while(String(key).length<2){

            key = "0"+key;
        }
        return key;
    });

}
