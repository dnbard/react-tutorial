import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger({
    colors: {}
});

export default createStore(rootReducer, applyMiddleware(thunk, promise, loggerMiddleware));
