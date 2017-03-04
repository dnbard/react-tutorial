import { AUTH_FAILURE, AUTH_OK } from '../actions/auth';
import actionHandling from './base';

const initialState = {};

const actionHandlers = {
    [AUTH_FAILURE]: function(action){
        return {
            isLogged: false,
            token: null,
            user: null
        };
    },
    [AUTH_OK]: function(action){
        return {
            isLogged: true,
            token: action.token,
            user: action.user
        }
    }
};

export default function authReducer(state = initialState, action) {
    return actionHandling(actionHandlers, action, state);
}
