import React, { Component } from 'react'
import "./style.css"

export class TodoItem extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <>
            <li className="todoItem">
                <h3 className="name">{this.props.todo.name}</h3>
                <h3 className="close" 
                onClick= {()=> this.props.handelDelete(this.props.todo.id)}>x</h3>
                </li>
            </>
        );
    }
}

export default TodoItem;
