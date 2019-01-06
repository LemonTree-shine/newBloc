import React,{Component,ReactDOM,createContext} from "react";

var ContextTheme = createContext({});

export class ProviderCom extends Component{
    render(){
        return <ContextTheme.Provider value={this.props.data}>
            {this.props.children}
        </ContextTheme.Provider>
    }
}

//用高阶组件处理contex传值问题
export function higrCom(Com){
    return class extends Component{
        render(){
            return <ContextTheme.Consumer>
                {value=>{
                    return <Com {...value}/>
                }}
            </ContextTheme.Consumer>
        }
    }
}