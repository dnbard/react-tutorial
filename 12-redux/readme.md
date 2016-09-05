# Redux

![redux-logo](https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png)

[Documentation](http://redux.js.org/)

## Instalation

```sh
npm install redux --save
```

## Middleware Instalation

Next middleware are going to be used in this example:

* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [redux-promise](https://www.npmjs.com/package/redux-promise)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)

```sh
npm install redux-thunk redux-promise redux-logger --save
```

## Creating an `action`

Let's define some constants for `actions`:
```js
export const AUTH_FAILURE = 'auth-failure';
export const AUTH_OK = 'auth-ok';
```

Export function that are going to create `action`:
```js
export function loginFailure(){
    return {
        type: AUTH_FAILURE,
        state: false,
        token: null,
        user: null
    };
}
```

```js
export function loggedIn(token, user){
    if (typeof token !== 'string' || token.length === 0){
        throw new TypeError('Invalid argument: "token"');
    }

    if (typeof user !== 'string' || user.length === 0){
        throw new TypeError('Invalid argument: "user"');
    }

    return {
        type: AUTH_OK,
        state: true,
        token: token,
        user: user
    };
}
```

## Creating a `reducer`

Import constants from `action`:
```js
import { AUTH_FAILURE, AUTH_OK } from '../actions/auth';
```

Define store initial store (value that this reducer are going to return by default):
```js
const initialState = {};
```

Create `reducer` function that will react on given `actions`:
```js
export default function authReducer(state = initialState, action) {
    if (action.type === AUTH_FAILURE){
        return Object.assign(state, {
            isLogged: false,
            token: null,
            user: null
        });
    } else if (action.type === AUTH_OK){
        return Object.assign(state, {
            isLogged: true,
            token: action.token,
            user: action.user
        });
    }

    return state;
}
```

## Creating a `root reducer`:

Import reducer combiner from `redux`:
```js
import { combineReducers } from 'redux';
```

Import reducers:
```js
import authReducer from './auth';
import firstReducer from './first';
import secondReducer from './second';
import lastReducer from './last';
```

Return combined reducer:
```js
export default combineReducers({
    auth: authReducer,
    firstReducer: firstReducer,
    secondReducer, secondReducer
});
```

## Creating a `store`

Importing all dependencies:
```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
```

Preparing instance of logger:
```js
const loggerMiddleware = createLogger();
```

Preparing the `reducer`:
```js
import rootReducer from './reducers';
```

Creating the `store` with a set of middlewares:
```js
export default createStore(rootReducer, applyMiddleware(thunk, promise, loggerMiddleware));
```

## Dispatching first message

Import all dependencies:
```js
import store from '../store';
import { loggedIn } from '../actions/auth';
```

Creating a new `action`:
```js
const myFirstAction = loggedIn('my-auth-token', {
    name: 'Alex',
    role: 'admin',
    id: 'id001'
});
```

Dispatching an `action`:
```js
store.dispatch(myFirstAction);
```