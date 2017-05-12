import React, { Component } from 'react';
// import styles from './styles.js';

export default class Application extends Component {
    render(){
        return <div style={{ backgroundColor: window.isLoggedIn ? 'red' : 'blue' }}>
            Hello, World!
        </div>;
    }
}
