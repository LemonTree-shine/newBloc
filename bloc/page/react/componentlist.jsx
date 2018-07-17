import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
//import Paginator from "../../component/paginator/paginator.jsx";

import { Button, CheckBox, CheckBoxGroup, Dlog, Form, Input, Paginator, Radio, GroupRadio, Toast } from "../../component/common.js";

export default class ReactComponent extends Component {
    render() {
        return <div>
            <Button className="c-space">默认</Button>
            <Button className="c-button-primary c-space">主色调</Button>
            <Button className="c-button-success c-space">成功</Button>
            <Button className="c-button-warning c-space">警告</Button>
            <Button className="c-button-danger c-space">危险</Button>
            <Button className="c-button-danger c-space" disabled="disabled">禁用</Button>
            <Button className="c-button-primary c-button-small c-space">小尺寸</Button>
            <Button className="c-button-primary c-button-large c-space">大尺寸</Button>
            <Paginator total={this.state.total} pageSize={25} onChange={this.handleChange} />
            <br/>
            <CheckBoxGroup ref={(input) => { return this.thisCom = input }}>
                <CheckBox name="book" value="看书" />
                <CheckBox name="sing" value="唱歌" />
                <CheckBox name="movie" value="看电影" />
            </CheckBoxGroup>
            <br/>
            <GroupRadio>
				<Radio value="1" name="name"/>
				<Radio value="2" name="name"/>
				<Radio value="3" name="name"/>
				<Radio value="4" name="name"/>
			</GroupRadio>
            <br/>
            <Button className="c-button-primary c-space" onClick={()=>this.handleClick("默认右上角","")}>默认右上角</Button>
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("左上角","leftTop")}>左上角</Button>
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("左下角","leftBottom")}>左下角</Button>
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("右下角","rightBottom")}>右下角</Button>
            <br/>
            <br/>
            <Form ref="form" onSubmit={this.handleSubmit}>
                <label>年龄：</label>
                <div className="c-textBox c-space">
                    <Input name="userName" pattern={/^\d+$/} patternmessage="年龄只能为数字" required value={12}/>
                </div>
                <label>邮箱地址：</label>
                <div  className="c-textBox c-space">
                    <Input name="age" required pattern={/^.+@.+\.com$/} patternmessage="邮箱格式有错误" value="18815288453@163.com"/>
                </div>
                <div style={{marginTop:"10px"}}>
                    <Button className="c-button-primary">提交</Button>
                </div>
            </Form>
        </div>
    }
    state = {
        total: 30000
    }
    componentDidMount() {

    }

    handleChange = (e, s) => {
        console.log(s);
    }

    handleClick = (text,position)=>{
		Toast.show(text,position);
    }
    
    handleSubmit = (value)=>{
        if(this.refs.form.onvalid){
            alert("恭喜你，通过了验证");
            console.log(this.refs.form);
        }else{
            alert("不要意思，没有通过验证哦！");
        }
    }
}
