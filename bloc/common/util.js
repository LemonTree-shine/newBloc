//遮罩层
export function showShade(path) {
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

    closeBtn.onclick = function () {
        oDiv.remove();
    }
}

//关闭遮罩层
export function hideShade() {
    if (document.querySelector(".dlog-shade")) {
        document.body.style.overflow = "visible";
        document.querySelector(".dlog-shade").remove();
    }
}

/**
 * 
 * @param {Date|String} time  new Date()或者毫秒字符串
 * @param {String} formatter  "yyyy-MM-DD HH:mm:ss"
 */
export function formatDate(time, formatter) {
    var format
    var date = new Date();

    if (formatter) {
        format = formatter
    } else {
        format = "yyyy-MM-DD HH:mm:ss"
    }

    if (time instanceof Date) {
        date = time
    } else if (typeof time == "string") {
        if (/^\d{1,}$/.test(time)) {
            date = new Date(Number(time))
        } else {
            date = new Date(time)
        }

    }

    var timeEnum = {
        y: date.getFullYear(),
        M: date.getMonth() + 1,
        D: date.getDate(),
        H: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
    }

    return format.replace(/[yMDHms]{1,}/g, function (value) {
        return timeEnum[value[0]] < 10 ? "0" + timeEnum[value[0]] : timeEnum[value[0]]
    });
}

//数字，字符串按照三个分割
export function numberSplit(str) {
    return String(str).replace(/\B(?=(\d{3})+(?!\d{1}))/g, ",")
}

//去除前后空格
export function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

//去除左边空格
export function trimLeft(str) {
    return str.replace(/(^\s*)/g, "");
}

//去除右边空格
export function trimRight(str) {
    return str.replace(/(\s*$)/g, "");
}

//去除所有空格
export function trimAll(str) {
    return str.replace(/\s*/g, "");
}

//首字母大写
export function firstUpCase(str) {
    return str.toLowerCase().replace(/(^[a-z])|(\s+[a-z])/g, function (value) {
        return value.toUpperCase();
    });
}


/**
 * 金额转成文字大小写格式金额
 * splitFour方法：处理数字转化为4个字符的数组
 * changeNumStyle方法：处理每四位数的格式
 * numToText方法：拼接changeNumStyle的处理结果；
*/
export function splitFour(num) {
    var str = String(num).replace(/^0+/, "");
    console.log(str.replace(/\B(?=(\d{4})+(?!\d{1}))/g, ",").split(","));
    return str.replace(/\B(?=(\d{4})+(?!\d{1}))/g, ",").split(",");
}

export function changeNumStyle(num, type = false) {
    var trans = {
        "0": "零",
        "1": "一",
        "2": "二",
        "3": "三",
        "4": "四",
        "5": "五",
        "6": "六",
        "7": "七",
        "8": "八",
        "9": "九"
    }

    var transB = {
        "0": "零",
        "1": "壹",
        "2": "贰",
        "3": "叁",
        "4": "肆",
        "5": "伍",
        "6": "陆",
        "7": "柒",
        "8": "捌",
        "9": "玖"
    }

    var change = ["", "十", "百", "千"];

    var changeB = ["", "拾", "佰", "仟"];

    var numArr = num.toString().split("");

    var newArr = numArr.reverse().map(function (value, index) {
        if (type) {
            return value + changeB[index % 4]
        } else {
            return value + change[index % 4]
        }

    });
    var newStr = newArr.reverse().join("").replace(/0+$/, "");

    var newStr2 = newStr.replace(/0.{1}/, "0");


    return newStr2.toString().replace(/\d/g, function (value) {
        if (type) {
            return transB[value]
        } else {
            return trans[value]
        }

    })
}

/**
 * 入口方法
 * @param {number} num 
 * @param {boolean} type true:转换成中文大写金额，false：中文小写金额，默认false
 */
export function numToText(num, type) {
    var trans = splitFour(num)
    var result = "";

    var arr = [];

    if (type) {
        arr = ["萬", "億"]
    } else {
        arr = ["万", "亿"]
    }

    trans.forEach((value, index) => {
        //console.log(changeNumStyle(value))
        if (trans.length == "2") {
            if (index == 0) {
                result += changeNumStyle(value, type) + arr[0];
            } else {
                result += changeNumStyle(value, type)
            }
        } else if (trans.length == "3") {
            if (index == 0) {
                result += changeNumStyle(value, type) + arr[1];
            } else if (index == 1) {
                result += changeNumStyle(value, type) + arr[0]
            } else {
                result += changeNumStyle(value, type)
            }
        }

    });
    if (type) {
        return result.replace(/^零+.{1}/, "") + "圆";
    } else {
        return result.replace(/^零+.{1}/, "");
    }

}

/**
 * 密码强度验证
 * @param {String} str
*/
export function CharMode(str) {
    const level = {
        "danger": "危险",
        "low": "低",
        "mid": "中",
        "high": "高"
    }

    /**
     * 全是数字的密码
    */
    if (/^\d+$/.test(str)) {
        return level.danger
    }

    /**
      * 全是小写或全是大写字母的密码
     */
    if (/^[a-z]+$/.test(str) || /^[A-Z]+$/.test(str)) {
        return level.danger
    }

    /**
     * 只有大写字母和小写字母
    */
    if (/^(?=.*[a-z])(?=.*[A-Z])(?!.*[0-9])(?!.*[^0-9a-zA-Z])/.test(str)) {
        return level.low
    }

    /**
     * 全是数字+特殊字符
    */
    if (/^(?=.*[0-9])(?=.*[^0-9a-zA-Z])(?!.*[a-zA-Z])/.test(str)) {
        return level.low
    }

    /**
     * 全是大写或者小写+特殊字符
    */
    if (/^((?=.*[a-z])(?!.*[0-9])(?!.*[A-Z])|(?=.*[A-Z])(?!.*[0-9])(?!.*[a-z]))(?=.*[^a-zA-Z0-9])/.test(str)) {
        return level.low
    }

    /**
     * 包含数字和大小写字母中的一种，不包含特殊字符
    */
    if (/^((?=.*[0-9])(?=.*[a-z])(?!.*[A-Z])|(?=.*[0-9])(?=.*[A-Z])(?!.*[a-z]))(?!.*[^a-zA-Z0-9])/.test(str)) {
        return level.low;
    }

    /**
      * 大写+小写+特殊字符
     */
    if (/^(?=.*[A-Z])(?=.*[a-z])(?!.*[0-9])(?=.*[^a-zA-Z0-9])/.test(str)) {
        return level.mid;
    }

    /**
     * 包含数字大小写中的一种，还有特殊字符
    */
    if (/^((?=.*[0-9])(?=.*[a-z])(?!.*[A-Z])|(?=.*[0-9])(?=.*[A-Z])(?!.*[a-z]))(?=.*[^a-zA-Z0-9])/.test(str)) {
        return level.mid;
    }

    /**
     * 包含数字和大小写字符，不包含特殊字符
    */
    if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*[^0-9a-zA-Z])/.test(str)) {
        return level.mid;
    }

    /**
     * 包含字母数字，字母大小写，还有特殊字符
    */
    if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^0-9a-zA-Z])/.test(str)) {
        return level.high;
    }
}

/**
 * 冒泡排序
 * @param {Array} arr 
 * 定义：每次循环都把选出最大的值放大最后一位,每次碰到前一位比后一位大的，就要交换位置
 * 稳定度：稳定
 * 时间复杂度：N^2
*/

export function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var a = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = a;
            }
        }
    }
}

/**
 * 选择排序
 * @param {Array} arr 
 * 定义：每次循环找出最小值的索引，第一次循环结束，交换第一位与最小索引的位置，循环直到排序结束
 * 稳定度：不稳定(存在相同值的情况下，位置会换掉)
 * 时间复杂度：N^2
*/

export function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        var min = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = min;
    }
}

/**
 * 插入排序
 * @param {Array} arr 
 * 定义：每次拿已经排序好的后面一个值，倒叙和前面已经排序好的数组对比，只要碰到已经排序好的值比压迫插入的值大，就往后移动一位，一直到碰到比要插入的值小或等于位置
 * 稳定度：稳定
 * 时间复杂度：N^2
*/

export function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var temp = arr[i]; //记录当前的值
        for (var p = i - 1; p >= 0 && arr[p] > temp; p--) {
            arr[p + 1] = arr[p];
            count++
        }
        arr[p + 1] = temp;
    }
}

/**
 * 归并排序
 * @param {Array} arr 
 * 一直拆分一直拆分，直到数组只剩下一个，不能拆分为止，然后合并
 * 采用递归方式；
*/
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        var mid = Math.floor((0 + arr.length) / 2);
        var leftPart = arr.slice(0, mid);
        var rightPart = arr.slice(mid);
        return merge(mergeSort(leftPart), mergeSort(rightPart));
    }
}

function merge(a, b) {
    var x = 0;
    var y = 0;
    var mergeArr = [];
    while (x < a.length && y < b.length) {
        if (a[x] < b[y]) {
            mergeArr.push(a[x]);
            x++;
        } else {
            mergeArr.push(b[y]);
            y++;
        }
    }
    return [...mergeArr, ...a.slice(x), ...b.slice(y)]
}


/**
 * 十进制转化成其他进制方法
 * @param {Number} num 十进制的数值
 * @param {String} type  表示要转化到指定的进制2,8,10,16
*/
function changeSystem(num, type) {
    var list = [];
    var resNum = num;
    var result = "";

    var changeList = {
        "10": "a",
        "11": "b",
        "12": "c",
        "13": "d",
        "14": "e",
        "15": "f",
    }
    while (resNum > 0) {
        if (resNum % type >= 10) {
            list.push(changeList[resNum % type]);
        } else {
            list.push(resNum % type);
        }
        resNum = parseInt(resNum / type);
    }

    for (let i = list.length - 1; i >= 0; i--) {
        result += list[i];
    }
    return result;
}

/**
 * 其他进制转换成10进制
 * @param {String} str 表示当前进制的值
 * @param {String} cur 表示当前进制2,8,10,16
*/
function to10System(str, cur) {
    var result = 0;
    var changeList = {
        "a": "10",
        "b": "11",
        "c": "12",
        "d": "13",
        "e": "14",
        "f": "15",
    }
    var size = str.length - 1;
    var length = str.length - 1;
    while (size >= 0) {
        if (changeList[str[length - size]]) {
            result += changeList[str[length - size]] * Math.pow(cur, size);
        } else {
            result += str[length - size] * Math.pow(cur, size);
        }

        size--;
    }
    return result;
}

/**
 * 对象指定的前面添加项
 * var a = {"a":1,"k":"123123"};
 * insertBeforeObj(a,"b","2","a")
 * 
 * 结果：{"a":1,"b":"2","k":"123123"}
*/
function insertBeforeObj(obj,newkey,value,curKey){
    var temObj;
    for(const key in obj){
        if(key===curKey){
            temObj = {};
        }
        if(temObj){
            temObj[key] = obj[key];
            delete obj[key];
        }
    }
    obj[newkey] = value;
    return {...obj,...temObj};
}