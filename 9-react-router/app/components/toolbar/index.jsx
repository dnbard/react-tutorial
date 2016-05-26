import React, { Component } from 'react';

const styles = {
    display: 'flex',
    width: '300px',
    justifyContent: 'space-around'
};

export default class Application extends Component {
    render(){
    return (<div style={styles}>
            <a href="/#/">Home</a>
            <a href="/#/users/aaa">User AAA</a>
            <a href="/#/users/2">User 2</a>
        </div>);
    }
}
