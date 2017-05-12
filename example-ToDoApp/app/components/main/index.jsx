import React, { Component } from 'react';
// import styles from './styles.js';
import MyInput from '../myInput.jsx';
import ToDo from '../toDo';
import { v4 } from 'node-uuid';

function getId(){
    return v4();
}

export default class Application extends Component {
    constructor(){
        super();

        this.state = {
            newToDo: '',
            list: []
        };
    }

    onInputChange(e){
        this.setState({ newToDo: e.target.value });
    }

    onToDoSubmit(){
        const todoName = this.state.newToDo;
        const todo = { title: todoName, isDone: false, id: getId() };

        this.setState({
            list: this.state.list.concat(...[todo]),
            newToDo: ''
        });
    }

    onComplete(toDoModel){
        toDoModel.isDone = true;
        this.forceUpdate();
    }

    render(){
        const ToDoElements = this.state.list.map(e => 
            <ToDo key={ e.id } value={ e } onComplete={ this.onComplete.bind(this, e) } />
        );

        return (<div className="component">
            <h1>My ToDo Application</h1>
            <MyInput value={ this.state.newToDo }
                     placeholder="Write a new ToDo"
                     onChange={ this.onInputChange.bind(this) }
                     onSubmit={ this.onToDoSubmit.bind(this) }/>

            { ToDoElements[0] }

            { ToDoElements }
        </div>);
    }
}
