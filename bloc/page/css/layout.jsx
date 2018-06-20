import React,{Component,ReactDOM} from "react";
import "./style/cssLayout.less"

export default class Layout extends Component{
    render(){
        return (<div className="css-layout">
            <div className="title">单飞翼布局</div>
            <div className="left-layout">
                <div className="left-part">宽度固定</div>
                <div className="content-part">宽度随屏幕大小变动</div>
            </div>
            <div className="title">双飞翼布局</div>
            <div className="center-layout">
                <div className="left-part">宽度固定</div>
                <div className="right-part">宽度固定</div>
                <div className="content-part">宽度随屏幕大小变动</div>
            </div>
            <div className="title">定位布局</div>
            <div className="position-layout">
                <div className="top-part">顶部固定</div>
                <div className="left-part">左侧固定</div>
                <div className="content-part">内容随屏幕大小变动</div>
            </div>
            <div className="title">flex布局</div>
            
            <div className="flex-layout">
                <div className="title">1.1 flex-directions属性<span style={{color:"red"}}>(设置在外层容器上)</span></div>
                <div className="introduce">
                    flex-directions:有4个值，设置在容器上；属性值分别为:
                    <ul>
                        <li>row(默认值)</li>
                        <li>row-reverse</li>
                        <li>column</li>
                        <li>column-reverse</li>
                    </ul>
                    设置4个值的效果对应下面的4张图:
                </div>
                <div style={{overflow:"hidden"}}>
                    <div className="direction direction-row">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                    <div className="direction direction-row-reverse">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                    <div className="direction direction-column">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                    <div className="direction direction-column-reverse">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="title">1.2 flex-wrap属性<span style={{color:"red"}}>(设置在外层容器上)</span></div>
                <div className="introduce">
                    flex-wrap:有3个值，设置在容器上；属性值分别为:
                    <ul>
                        <li>nowrap(默认值：不换行)</li>
                        <li>wrap(换行，从上往下)</li>
                        <li>wrap-reverse(换行，从下往上)</li>
                    </ul>
                    设置3个值的效果对应下面的3张图:
                </div>
                <div style={{overflow:"hidden"}}>
                    <div className="direction flex-wrap">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                    </div>
                    <div className="direction flex-wrap-wrap">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                    </div>
                    <div className="direction flex-wrap-wrap-reverse">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="title">1.3 justify-content属性<span style={{color:"red"}}>(设置在外层容器上)</span></div>
                <div className="introduce">
                    justify-content:有5个值，设置在容器上；属性值分别为:
                    <ul>
                        <li>flex-start(默认值)</li>
                        <li>flex-end(靠右排列)</li>
                        <li>center(居中排列)</li>
                        <li>space-between(两端对齐)</li>
                        <li>space-around(间距相同)</li>
                    </ul>
                    设置5个值的效果对应下面的5张图:
                </div>
                <div style={{overflow:"hidden"}}>
                    <div className="justify-content">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="justify-content">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="justify-content">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="justify-content">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="justify-content">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="title">1.4 align-items属性<span style={{color:"red"}}>(设置在外层容器上)</span></div>
                <div className="introduce">
                    align-items:有5个值，设置在容器上；属性值分别为:
                    <ul>
                        <li>flex-start(默认值)</li>
                        <li>flex-end(底部对齐)</li>
                        <li>center(水平居中对齐)</li>
                        <li>stretch(等高布局)</li>
                        <li>baseline(文字水平对齐)</li>
                    </ul>
                    设置5个值的效果对应下面的5张图:
                </div>
                <div style={{overflow:"hidden"}}>
                    <div className="align-items">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="align-items">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="align-items">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="align-items">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="align-items">
                        <div>文字水平对齐</div>
                        <div>文字水平对齐</div>
                        <div>文字水平对齐</div>
                    </div>
                </div>
            </div>
        </div>)
    }
}