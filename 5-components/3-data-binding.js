import React, { Component } from 'react';

export default class MyStateComponent extends Component {
    constructor(){
        super();

        this.state = { name: 'World' };
    }

    onNameChange(e){
        this.setState({
            name: e.target.value
        });
    }


    render(){
        return
            <section>
                <div>Hello, {this.state.name}!</div>
                <input value={this.state.name} placeholder="Your name" onChange={this.onNameChange} />
            </section>;
    }
}
