import React, { Component } from 'react';
import ComponentB from './componentB';

class ComponentA extends Component{
    constructor(){
        super();

        this.state = { name: 'GlobalLogic' };
    }

    onNameChange(newName){
        this.setState({ name: newName || '' });
    }

    render(){
        return (<section>
            <div>Hello, {this.state.name}</div>
            <ComponentB onChange={this.onNameChange.bind(this)} value={this.state.name} readOnly={false} />
        </section>);
    }
}


export default ComponentA;
