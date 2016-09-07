export const AUTH_FAILURE = 'auth-failure';
export const AUTH_OK = 'auth-ok';

export function loginFailure(){
    return {
        type: AUTH_FAILURE,
        state: false,
        token: null,
        user: null
    };
}

export function loggedIn(token, user){
    if (typeof token !== 'string' || token.length === 0){
        throw new TypeError('Invalid argument: "token"');
    }

    if (typeof user !== 'object'){
        throw new TypeError('Invalid argument: "user"');
    }

    return {
        type: AUTH_OK,
        state: true,
        token: token,
        user: user
    };
}
