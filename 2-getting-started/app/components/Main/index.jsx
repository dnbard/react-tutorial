import React, { Component } from 'react';
import styles from './styles.js';
import stylesGlobal from './styles.css';

export default class Application extends Component {
    render(){
        return <div className="component" style={styles.primary}>Hello, World!</div>;
    }
}
