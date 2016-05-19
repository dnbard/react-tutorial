import React, { Component } from 'react';
import styles from './styles.js';

export default class Application extends Component {
    constructor(){
        super();

        this.state = {
            greetings: 'Hello, World!'
        };
    }

    componentDidMount(){
        this.setState({ greetings: 'Hello, GlobalLogic!' });
    }

    render(){
        return <div className="component" style={styles.primary}>{this.state.greetings}</div>;
    }
}
