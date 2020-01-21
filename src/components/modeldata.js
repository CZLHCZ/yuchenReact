import React,{Component} from 'react';
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'yuchen'
         };
    }

    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>双向数据绑定</h2>
                {/* model 改变影响View view改变反过来影响model */}
                <input value={this.state.username} onChange={this.inputChange} />
                <p>{this.state.username}</p>
            </div>
        );
    }
}

export default Todolist;