import React, { Component } from 'react';

import Toolbar from '../toolbar';

export default class Application extends Component {
    render(){
        return (<div>
            <Toolbar />
            Hello, GlobalLogic! I'm main component!
        </div>);
    }
}
