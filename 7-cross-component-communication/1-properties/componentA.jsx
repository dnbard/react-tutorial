import React, { Component } from 'react';
import ComponentB from './componentB';

class ComponentA extends Component{
    constructor(){
        super();

        this.state = {
            name: 'GlobalLogic',
            value: Math.random()
        };

        this._token = setInterval(() => {
            this.setState({
                value: Math.random()
            });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this._token);
    }

    render(){
        return (<section>
            <ComponentB value={this.state.value}>
                <div>Hello, {this.state.name}</div>
            </ComponentB>
        </section>);
    }
}


export default ComponentA;
