import React, { Component } from 'react';

class MyComponent extends Component{
    constructor(){
        super();

        this.state = { name: 'GlobalLogic' };
    }

    onNameChange(e){
        this.setState({
            name: e.target.value
        });
    }

    render(){
        return (<section>
            <input value={this.state.name} onChange={this.onNameChange.bind(this)} />
        </section>);
    }
}


export default MyComponent;

/*
 * Supported Events - https://facebook.github.io/react/docs/events.html#supported-events
 */
