import { AUTH_FAILURE, AUTH_OK } from '../actions/auth';
const initialState = {};

export default function authReducer(state = initialState, action) {
    if (action.type === AUTH_FAILURE){
        return Object.assign({}, state, {
            isLogged: false,
            token: null,
            user: null
        });
    } else if (action.type === AUTH_OK){
        return Object.assign({}, state, {
            isLogged: true,
            token: action.token,
            user: action.user
        });
    }

    return state;
}
