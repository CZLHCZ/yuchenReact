import React,{Component} from 'react';
// import Axios from './Axios'
import LifeCycle from './LifeCycle'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        return (
            <div>
                <div>我是首页组件</div>

                {/* <Axios/> */}
                <LifeCycle/>
            </div>
        );
    }
}

export default Home;