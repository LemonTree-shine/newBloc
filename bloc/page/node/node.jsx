import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { DatePicker } from 'antd';
import { Button } from 'antd';

import {showShade,hideShade} from "../../common/util.js";

import "./node.less"

export default class Node extends Component{
    render(){
        return <div className="nodeUpload">
            <div className="uploadBtn">
                选择图片
                <input className="rel-btn" ref={(input)=>{this.input = input}} accept="image/*" type="file" name="upload"/>
            </div>
            <div style={{overflow:"hidden"}}>
                <div className="showBox" ref={(showBox)=>{this.showBox = showBox}}>
                </div>
                <div className="relBox" ref={(relBox)=>{this.relBox = relBox}}>
                    {this.state.relImgList.length?this.state.relImgList.map((value,index)=>{
                        return <img onClick={()=>{this.showImg(value)}} key={index} src={value}/>
                    }):null}
                </div>
            </div>
            <button className="uploadBtn" ref={(btn)=>{this.btn = btn}}>上传</button>
        </div>
    }
    constructor(){
        super();
        this.state = {
            relImgList:[]
        }
    }

    componentDidMount(){
        var data = [];
        var _this = this;

        //input选择图片
        this.input.onchange = function(){
            //文件实例数组；
            data.push(this.files);

            //实现图片的本地预览
            var img = document.createElement("img");
            img.setAttribute("src",window.URL.createObjectURL(this.files[0]));
            img.style.width = "100px";
            img.style.display = "inline-block";
            img.style.margin = "7px";

            //每次上传都网容器中插入一张预览图片；
            _this.showBox.append(img);
        }

        //图片上传
        this.btn.onclick = function(){
            var formdata = new FormData();

            if(!data.length){
                alert("请先选择文件");
                return;
            }

            for(var i=0;i<data.length;i++){      
                formdata.append("upload"+i, data[i][0]);
            }
            console.log(formdata);
            var xmlhttp=new XMLHttpRequest();
            xmlhttp.open("post",window.ENVPATH+"upload",true);
            xmlhttp.send(formdata);

            xmlhttp.onreadystatechange=function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    var result = JSON.parse(xmlhttp.response);

                    //清空本地预览
                    _this.showBox.innerHTML = "";

                    //清空图片列表
                    data = [];

                    //清空file表单的value,防止上传成功后再次上传这个文件后无效
                    _this.input.value = "";

                    _this.setState({
                        relImgList:result.path
                    });

                    alert(result.msg);
                }
            }

        }
    }

    showImg = (value)=>{
        showShade(value);
    }
}