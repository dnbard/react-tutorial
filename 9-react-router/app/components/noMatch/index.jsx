import React, { Component } from 'react';

import Toolbar from '../toolbar';

export default class Application extends Component {
    render(){
        return (<div>
            <Toolbar />
            404! Route not found!
        </div>);
    }
}
