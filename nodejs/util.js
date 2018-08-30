//点到点的距离
function a(x1,y1,x2,y2){
    return Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2));
}

console.log(a(2,3,5,5))