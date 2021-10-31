import React, { Component } from 'react';
import TodoItem from "../TodoItem";
import  './style.css';

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1 , name: 'play' },
                { id: 2 , name: 'sleep' },
            ]
        }
      }
      handleSubmit = (e)=>{
        e.preventDefault();
        const newObj = {
            id: this.state.todos.length + 1,
            name: e.target.task.value,
          };
          this.setState({
            todos: [...this.state.todos, newObj],
          });
          e.target.task.value = "";
       
      }
    handelDelete = (id)=>{
        this.setState({ todos:this.state.todos.filter((todo)=>todo.id != id)});
    }
    render() {
        return (
            <div className="todo"> 
            <form onSubmit={this.handleSubmit}>  
            <input type="text" name="task"></input>
            <button >add task</button>
            </form>
            <ul>
                {this.state.todos.map((todo , i) =>{
                return <TodoItem todo={todo} key={i} 
                 handelDelete={this.handelDelete}/>
                })}
            </ul>
            
            </div>
        )
    }
}

export default Todo;
