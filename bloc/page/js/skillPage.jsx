import React, { Component } from "react";
import Prism from 'prismjs';

export default class SkillPage extends Component {
    render() {
        return <div>
            <pre className="hljs" style={{ color: "#f14c69" }}>
                <code>
                    {`1e2
NaN != NaN
1/0
[0][0]
[0, 1][0, 1]
[1,2,3] == '1,2,3'
~~2.99999999
3>2>1
[] && {}
1 && 2 || 3
0 || 1 && 2
[1, 2, 3].slice.call([4, 5, 6], 1)
1 + { valueOf() { return 1 } }
1 + { valueOf() { return {} },toString() { return "11" } }
`}
                </code>
            </pre>
            <div className="title mt15">分析一个特殊案例</div>
            <pre className="hljs" style={{ color: "#f14c69" }}>
                <code>
{`[]==false   结果：true
![]==false    结果：true
[] && {}      结果：{}`}
                </code>
            </pre>
            <div>
                <ul>
                    <li className="mt10">首先第一个，对象与布尔类型比较，都会转化程number类型，都为0，返回true，没问题。</li>
                    <li className="mt10">
                        第二个，加了一个！号,则[]直接转化为布尔类型，然后取反；<br/>
                        通过Boolean([])可以证明，[]在直接转化为布尔类型的时候，是返回true;<br/>
                        这里有一个结论：直接转化为布尔类型时，除去空字符串(''),NaN,0，null,undefined这几个外返回的都是true；<br/>
                        所以第二个返回true；
                    </li>
                    <li className="mt10">{`第三个，当使用&&时，&&前面的会直接转化成布尔类型true，所以最终结果返回{}`}</li>
                </ul> 
            </div>
        </div>
    }
    componentDidMount() {
        //Prism.highlightAll();

        console.log(1e2);
    }
}