export function showShade(path){
    var oDiv = document.createElement("div");

    oDiv.className = "dlog-shade";

    oDiv.style.position = "fixed";
    oDiv.style.top = "0";
    oDiv.style.width = "100%";
    oDiv.style.height = "100%";
    oDiv.style.background = "rgba(0,0,0,0.5)";
    oDiv.style.zIndex = "1000";
    oDiv.style.color = "#ffffff";

    oDiv.innerHTML = `<div style='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:20px;'><img src='${path}'/></div>`;

    document.body.style.overflow = "hidden";

    document.body.append(oDiv);

    //关闭按钮
    var closeBtn = document.createElement("div");
    closeBtn.style.position = "fixed";
    closeBtn.style.top = "0px";
    closeBtn.style.right = "20px";
    closeBtn.style.fontSize = "50px";
    closeBtn.style.zIndex = "1001";
    closeBtn.style.color = "#ffffff";
    closeBtn.style.cursor = "pointer";

    closeBtn.innerHTML = "x";

    oDiv.append(closeBtn);

    closeBtn.onclick = function(){
        oDiv.remove();
    }
}

export function hideShade(){
    if(document.querySelector(".dlog-shade")){
        document.body.style.overflow = "visible";
        document.querySelector(".dlog-shade").remove();
    }  
}