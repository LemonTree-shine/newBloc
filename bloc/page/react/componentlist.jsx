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
            <Form>
                <Input name="email" onInput={this.test} pattern={/.+@.+\.com$/} required/>
                <Input name="phone" onInput={this.test} pattern={/^188\d{8}$/} required/>
                <Select name="select">
                    <ListItem code="asdkkk">asd</ListItem>
                </Select>
            </Form>
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
}
