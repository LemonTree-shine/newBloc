import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
//import Paginator from "../../component/paginator/paginator.jsx";

import { Button, CheckBox, CheckBoxGroup, Dlog, Form, Input, Paginator, Radio, GroupRadio, Toast ,Select,ListItem} from "../../component/common.js";

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
            <Paginator total={this.state.total} pageSize={20} onChange={this.handleChange} />
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
            <Form ref="formtest" onSubmit = {(value)=>{
                console.log(value);
                alert("恭喜你，通过验证！")
            }}>
                <Input ref="ref11" name="email11" required/>
                <div style={{display:'inline-block',marginLeft:'10px'}}>
                    <Input ref="ref1" name="email" required/>
                </div>
                <div style={{display:'inline-block',marginLeft:'10px',marginRight:"10px"}}>
                    <div>
                        <Input ref="ref2" name="phone" pattern={/^188\d{8}$/} patternMessage="电话号码格式" value="bbbb" required/>
                    </div>
                </div>
                <Select ref="ref3" name="select" value="asdkkk">
                    <ListItem code="asdkkk">asd</ListItem>
                    <ListItem code="asdkkk2">asd2</ListItem>
                    <ListItem code="asdkkk3">asd3</ListItem>
                </Select>
                <div style={{marginTop:'10px'}}>
                    <Button>测试</Button>
                </div>
            </Form>
            <br/>
            <br/>
            <Button onClick={this.openDlog}>测试</Button>
        </div>
    }
    state = {
        total: 30000
    }

    componentDidMount() {

    }
    selectChange = (s)=>{
        //alert(s);
        //console.log(s);
    }

    handleChange = (e, s) => {
        console.log(s);
    }

    handleClick = (text,position)=>{
		Toast.show(text,position);
    }
    
    handleSubmit = (value)=>{

    }

    //弹窗测试
    openDlog = ()=>{
        Dlog.show("标题","asdasd","success",(dialog)=>{
            alert(123);
            dialog.close();
            return false;
        });
    }
}
