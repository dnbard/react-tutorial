import React, { Component } from 'react';
import styles from './styles.js';
import store from '../../store';
import { loggedIn } from '../../actions/auth';
import { connect } from 'react-redux';

function mapStateToProps(store){
    return {
        name: store.auth.isLogged ? store.auth.user.name : '%noname%'
    }
}

export class Main extends Component {
    onClick(e){
        store.dispatch(loggedIn('some-token', {
            name: this.refs.nameInput.value
        }));
    }

    render(){
        return (<section>
            <div className="component" style={styles.primary}>Hello, {this.props.name}!</div>
            <div>
                <input ref="nameInput" placeholder="Name" />
                <button onClick={this.onClick.bind(this)}>Login</button>
            </div>
        </section>);
    }
}

export default connect(mapStateToProps)(Main);
