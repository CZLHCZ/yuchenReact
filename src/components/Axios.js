import React, { Component } from 'react';
import axios from 'axios'
class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getdata = () => {
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域
        axios.get(api).then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    render() {
        return (
            <div>
                <h2>Axios获取服务器数据</h2>
                <button onClick={this.getdata}>获取数据</button>
            </div>
        );
    }
}

export default Axios;