import React,{Component} from 'react';
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'yuchen',
            list:[]
        };
    }

    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    addData=()=>{
        var templist=this.state.list;
        templist.push(this.refs.title.value);
        this.refs.title.value='';
        this.setState({
            list:templist
        })
    }
    removeData=(key)=>{
        var templist=this.state.list;
        templist.splice(key,1);
        this.setState({
            list:templist
        })
    }
    render() {
        return (
            <div>
                <h2>React Todolist演示</h2>
                <input ref="title" /><button onClick={this.addData}>增加+</button>
                <hr/>
                <ul>
                    {/* 用到this要注意的指向 */}
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                <li key={key}>{value} -----<button onClick={this.removeData.bind(this,key)}>删除-</button></li> 
                            )
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}

export default Todolist;