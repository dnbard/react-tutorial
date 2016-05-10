import React, { Component } from 'react';

export default class MyStateComponent extends Component {
    constructor(){
        super();

        this.state = {
            name: 'World',
            time: 0
        };
    }

    componentWillMount(){
        this._intervalToken = setInterval(() => {
            this.setState({
                time: this.state.time ++
            });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this._intervalToken);
    }

    render(){
        return <div>Hello, {this.state.name}! {this.state.time}s elapsed.</div>;
        /* Hello, World! 0s elapsed. */
    }
}
