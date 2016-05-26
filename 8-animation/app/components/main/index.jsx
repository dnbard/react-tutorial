import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './styles.css';

export default class Application extends Component {
    constructor(){
        super();

        this.state = { items: [] };
    }

    onClick(){
        let items = this.state.items;

        items.push({
            id: v4(),
            name: v4()
        });

        this.setState({
            items: items
        });
    }

    clear(){
        this.setState({
            items: []
        });
    }

    render(){
        return (<div>
            <button onClick={this.onClick.bind(this)}>Add</button>
            <button onClick={this.clear.bind(this)}>Clear</button>
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                {this.state.items.map(i => <div key={i.id}>{i.name}</div>)}
            </ReactCSSTransitionGroup>
        </div>);
    }
}
