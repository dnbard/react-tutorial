import { expect } from 'chai';
import React from 'react';
import { mount, shallow } from 'enzyme';

import store from '../../app/store';
import { loggedIn } from '../../app/actions/auth';
import Main from '../../app/components/main';

describe('<Main />', () => {
    it('should write greetings with default value', () => {
        const wrapper = mount(<Main store={store} />);
        expect(wrapper.find('.component').text()).to.be.equal('Hello, %noname%!');
    });

    it('should write greetings', () => {
        const wrapper = mount(<Main store={store} />);

        store.dispatch(loggedIn('some-token', {
            name: 'World'
        }));

        expect(wrapper.find('.component').text()).to.be.equal('Hello, World!');
    });


});
