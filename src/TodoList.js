import React,{Component, Fragment} from 'react';

class TodoList extends Component{
  constructor(porps){
    super(porps)
    this.state = {
      inputValue: 'hell!!!!!',
    }
  }
  handleInputChange = (e) =>{
    console.log(e.target.value)
    this.setState({ inputValue: e.target.value })
  }
  render(){
    return (
      <Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}></input>
          <button>提交</button>
        </div>
        <ul>
        <li>222</li>
        </ul>
      </Fragment>
    )
  }
}
const a = 4

export default TodoList
export {a}
