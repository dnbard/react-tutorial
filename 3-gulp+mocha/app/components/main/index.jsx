import React, { Component } from 'react';
import styles from './styles.js';

export default class Application extends Component {
    render(){
        return <div className="component" style={styles.primary}>Hello, World!</div>;
    }
}
