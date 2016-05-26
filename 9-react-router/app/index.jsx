import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Application from './components/main';
import User from './components/user';
import NoMatch from './components/noMatch';

render((
    <Router history={hashHistory}>
        <Route path="/" component={Application} />
        <Route path="/users/:id" component={User}/>
        <Route path="*" component={NoMatch}/>
    </Router>
), document.getElementById('app'));
