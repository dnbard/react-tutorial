import { expect } from 'chai';
import { loggedIn, loginFailure, AUTH_OK, AUTH_FAILURE } from '../../app/actions/auth';

describe('Actions: Auth', function(){
    it('should define constants', () => {
        expect(AUTH_OK).to.not.be.undefined;
        expect(AUTH_FAILURE).to.not.be.undefined;
    });

    it('#loginFailure should create action', () => {
        expect(loginFailure()).to.deep.equal({
            type: AUTH_FAILURE,
            state: false,
            token: null,
            user: null
        });
    });

    describe('#loggedIn', function(){
        it('#loggedIn should create valid action', () => {
            const token = 'some-token';
            const user = { name: 'Jay' };

            expect(loggedIn(token, user)).to.deep.equal({
                type: AUTH_OK,
                state: true,
                token: token,
                user: user
            });
        });

        it('should throw error on wrong token', () => {
            expect(() => loggedIn(undefined, undefined)).to.throw('Invalid argument: "token"');
        });

        it('should throw error on wrong token', () => {
            expect(() => loggedIn('123', undefined)).to.throw('Invalid argument: "user"');
        });
    });
});
