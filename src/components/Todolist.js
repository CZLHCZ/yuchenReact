import React,{Component} from 'react';
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'yuchen',
            list:[
                {
                    title:'录制ionic',
                    checked:true
                },
                {
                    title:'录制node.js',
                    checked:false
                },
                {
                    title:'录制egg.js',
                    checked:false
                },
                {
                    title:'录制VUE',
                    checked:false
                }
            ]
        };
    }
    addData=(e)=>{
        //按下回车的时候增加
        if(e.keyCode==13){
            let title=this.refs.title.value;
            let templist=this.state.list;
            templist.push({
                title:title,
                checked:false
            })
            //改变后的值赋给list
            this.setState({
                list:templist
            });
            //表单置为空
            this.refs.title.value="";
        }
    }
    checkboxChange=(key)=>{
        let templist=this.state.list;
        templist[key].checked=!templist[key].checked;
        this.setState({
            list:templist
        });
    }
    removeData=(key)=>{
        let templist=this.state.list;
        templist.splice(key,1);
        this.setState({
            list:templist
        });
    }
    render() {
        return (
            <div>
                <h2>React Todolist演示</h2>
                <input ref='title' onKeyUp={this.addData} />
                <h2>待办事项</h2>
                <hr/>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checked){
                                return(
                                    <li>
                                        <input type="checkbox"  checked={value.checked} onChange={this.checkboxChange.bind(this,key,value)} />
                                        {value.title}
                                        -- <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                            
                        })
                    }
                </ul>
                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(value.checked){
                                return(
                                    <li>
                                        <input type="checkbox"  checked={value.checked} onChange={this.checkboxChange.bind(this,key,value)} />
                                        {value.title}
                                        -- <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                            
                        })
                    }
                </ul>
                <hr/>
            </div>
        );
    }
}

export default Todolist;