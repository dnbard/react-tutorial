import { expect } from 'chai';

import { AUTH_FAILURE, AUTH_OK } from '../../app/actions/auth';
import reducer from '../../app/reducers/auth';

describe('Reducers: Auth', function(){
    it('should return default state', () => {
        expect(reducer(undefined, {})).to.be.deep.equal({});
    });

    it('should react on AUTH_FAILURE action', () => {
        expect(reducer(undefined, {
            type: AUTH_FAILURE
        })).to.be.deep.equal({
            isLogged: false,
            token: null,
            user: null
        });
    });

    it('should react on AUTH_OK action', () => {
        const token = 'some-token';
        const user = { name: 'Bob' };

        expect(reducer(undefined, {
            type: AUTH_OK,
            token: token,
            user: user
        })).to.be.deep.equal({
            isLogged: true,
            token: token,
            user: user
        });
    });
});
