import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import "./paginator.less";

export default class Paginator extends Component{
    render(){
        return (<div className="c-paginator-box clearfix">
            <span  className="c-paginator-text">共&nbsp;{this.state.total}&nbsp;条</span>
            <div className="clearfix c-right c-turn-page-box">
                <span className="c-paginator-text">跳至:</span>
                <input className="c-paginator-turnPage" type="text" ref="input"/>
                <span  className="c-paginator-text">页</span>
                <button className="c-turnCurPage" onClick={this.turnPage}>跳转</button>
            </div>
            <div className="clearfix c-right">
                {this.state.curPage==Math.ceil(this.props.total/this.state.pageSize)?"":<button className="c-turnCurPage-next" onClick={this.nextPage}>后一页</button>}
            </div>
            <div className="clearfix c-right">
                {this.state.pageList.map((value,index)=>{
                    //当页码少于10页的时候，全部展示
                    if(this.state.pageList.length<=10){
                        if(this.state.curPage == (index+1)){
                            return <div className="c-paginator-div c-paginator-active" onClick = {()=>{this.handleClick(index)}} key={index}>{index+1}</div>
                        }else{
                            return <div className="c-paginator-div" onClick = {()=>{this.handleClick(index)}} key={index}>{index+1}</div>
                        }
                    }else{
                        //当curpage小于4的时候或者最后面三个的时候
                        if(this.state.curPage<4||this.state.curPage>this.state.pageList.length-3){
                            if(this.state.curPage<4){
                                if((index+1)<=4||(index+1)>=this.state.pageList.length){
                                    if(this.state.curPage == (index+1)){
                                        return <div className="c-paginator-div c-paginator-active" onClick = {()=>{this.handleClick(index)}} key={index}>{index+1}</div>
                                    }else{
                                        return <div className="c-paginator-div" onClick = {()=>{this.handleClick(index)}} key={index}>{index+1}</div>
                                    }
                                }else if((index+1)==5){
                                    return <div className="c-paginator-remove" key={index}>...</div>
                                }
                            }else{
                                if((index+1)<=1||(index+1)>=this.state.pageList.length-3){
                                    if(this.state.curPage == (index+1)){
                                        return <div className="c-paginator-div c-paginator-active" onClick = {()=>{this.handleClick(index)}} key={index}>{index+1}</div>
                                    }else{
                                        return <div className="c-paginator-div" onClick = {()=>{this.handleClick(index)}} key={index}>{index+1}</div>
                                    }
                                }else if((index+1)==5){
                                    return <div className="c-paginator-remove" key={index}>...</div>
                                } 
                            }
                        }else{
                            if((index+1)==1||(index+1)==this.state.curPage-1||(index+1)==this.state.curPage+1||(index+1)==this.state.pageList.length){
                                return <div className="c-paginator-div" onClick = {()=>{this.handleClick(index)}} key={index}>{index+1}</div> 
                            }
                            if((index+1)==this.state.curPage){
                                return <div className="c-paginator-div c-paginator-active" onClick = {()=>{this.handleClick(index)}} key={index}>{index+1}</div>
                            }
                            if((index+1)==this.state.curPage-2||(index+1)==this.state.curPage+2){
                                return <div className="c-paginator-remove" key={index}>...</div>;
                            }
                        }
                    }
                    
                })}
            </div>
            <div className="clearfix c-right">
                {this.state.curPage==1?"":<button className="c-turnCurPage-pre" onClick={this.prePage}>前一页</button>}
            </div>
            
        </div>)
    }

    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            total:this.props.total||0,
            pageSize:this.props.pageSize || 10,
            curPage:this.props.curPage || 1,
            pageList:[1]
        }
        
    }
    //pageList = [1,2,3,4];

    handleClick = (page)=>{
        this.setState({
            curPage:page+1
        },()=>{
            this.props.onChange(this,this.state);
            //console.log(this);
        });
    }

    turnPage = ()=>{
        console.log(this.refs.input.value);
        if(this.refs.input.value){
            this.setState({
                curPage:Number(this.refs.input.value)
            },()=>{
                this.props.onChange(this,this.state);
                //console.log(this);
            });
        }
    }

    nextPage = ()=>{
        this.setState({
            curPage:++this.state.curPage
        },()=>{
            this.props.onChange(this,this.state);
            //console.log(this);
        });
    }
    prePage = ()=>{
        this.setState({
            curPage:--this.state.curPage
        },()=>{
            this.props.onChange(this,this.state);
            //console.log(this);
        });
    }

    componentDidMount(){
        //debugger;
        if(this.props.total){
            var num = Math.ceil(this.props.total/this.state.pageSize);
            if(num>1){
                var newList = [];
                for(var i = 0;i<num;i++){
                    newList.push(i+1);
                }
                this.setState({
                    pageList:newList
                });
            }
        }
    }

    componentWillReceiveProps(nextProps){
        //debugger;
        this.setState({
            total:nextProps.total
        },()=>{
            var num = this.props.total/this.state.pageSize;
            if(num>1){
                var newList = [];
                for(var i = 0;i<num;i++){
                    newList.push(i+1);
                }
                this.setState({
                    pageList:newList
                });
            }
        });
    }
}