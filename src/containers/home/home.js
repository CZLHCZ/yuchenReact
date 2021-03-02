import React,{Component} from 'react';
import { Button } from 'antd';
class home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h2>我是主页组件</h2>
                <h3>首页</h3>
                <Button type="primary">Primary Button</Button>
            </div>
        );
    }
}

export default home;
