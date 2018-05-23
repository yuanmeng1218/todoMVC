import React,{Component} from 'react'
import TodotextInput from "./TodoTextInput"
//创建一个名为Header的组件类，其中包含一个render方法
class Header extends Component{
    render(){
        return (
            <header className="header">
                <h1>todos</h1>
                <TodotextInput
                    onSave={this.props.onSave}
                />
            </header>
        )
    }
}
export default Header;