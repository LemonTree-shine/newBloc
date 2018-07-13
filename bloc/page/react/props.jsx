import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import Paginator from "../../component/paginator/paginator.jsx"

export default class ReactProps extends Component{
    render(){
        return <div>
            传值模式
            <Paginator total={this.state.total} pageSize={25} onChange={this.handleChange}/>
        </div>
    }
    state = {
        total:30000
    }
    componentDidMount(){
    }

    handleChange = (e,s)=>{
        console.log(s);
    }
}
