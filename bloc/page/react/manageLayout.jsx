import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import { Button, CheckBox, CheckBoxGroup, Dlog, Form, Input, Paginator, Radio, GroupRadio, Toast ,Select,ListItem} from "../../component/common.js";

import "./layout.less";

export default class ManageLayout extends Component{
    render(){
        return <div className="c-manage-laylot">
            <Form className="c-form-h" onSubmit = {this.query}>
                <div className="c-form-filed">
                    <label>用户姓名：</label>
                    <Input ref="name" name="userName" required/>
                </div>
                <div className="c-form-filed">
                    <label>地址：</label>
                    <Select ref="adress" name="adress" value="hangzhou">
                        <ListItem code="hangzhou">杭州</ListItem>
                        <ListItem code="shanghai">上海</ListItem>
                        <ListItem code="beijing">北京</ListItem>
                    </Select>
                </div>
                <div className="c-form-filed">
                    <label>电话号码：</label>
                    <Input ref="mobile" name="mobile" pattern={/^\d{11}$/} patternMessage="请输入正确的号码格式" required/>
                </div>
                <br/>
                <div className="c-form-filed">
                    <label></label>
                    <Button className="c-button-primary">查询</Button>
                </div>
            </Form>
            <table className="c-table-x">
                <thead>
                    <tr>
                        <th>用户姓名</th>
                        <th>uid</th>
                        <th>电话</th>
                        <th>所属银行</th>
                        <th>开户状态</th>
                        <th>账户余额</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.length?this.state.tableData.map((value,index)=>{
                        return <tr key={index}>
                            <td>xxx[wd32966]</td>
                            <td>118273</td>
                            <td>18815287689</td>
                            <td>工商银行</td>
                            <td>开启</td>
                            <td>1000.00</td>
                            <td>
                                <Button className="c-button c-button-primary c-button-small" onClick={this.close}>销户</Button>
                            </td>
                        </tr>
                    }):<tr>
                        <td colSpan={20} style={{textAlign:"center"}}>暂无数据</td>
                    </tr>}
                </tbody>
            </table>
            <div style={{marginTop:"15px"}}>
                <Paginator total={this.state.total} pageSize={10} onChange={this.changePage}/>
            </div>
        </div>
    }
    //初始化state数据
    state = {
        tableData:[],
        total:0
    }

    constructor(){
        super();
    }

    //翻页
    changePage = (com,data)=>{
        console.log(com);
        console.log(data);
    }

    //查询数据
    query = (value)=>{
        //console.log(value);
        //alert("恭喜你，通过验证！数据是"+JSON.stringify(value));
        this.setState({
            tableData:[1,2,3,4,5,6,7,8,9],
            total:9
        });

    }

    //销户处理
    close = ()=>{
        Dlog.show("提示","确定要销户？","question",(dialog)=>{
            //alert(123);
            Dlog.show("提示","操作成功","success");
        });
    }
}