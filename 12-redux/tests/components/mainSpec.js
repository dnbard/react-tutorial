import { expect } from 'chai';
import React from 'react';
import { mount, shallow } from 'enzyme';

import store from '../../app/store';
import { loggedIn } from '../../app/actions/auth';
import MainWrapper, { Main } from '../../app/components/main';

describe('<Main />', () => {
    it('should write greetings with default value', () => {
        const wrapper = mount(<MainWrapper store={store} />);
        expect(wrapper.find('.component').text()).to.be.equal('Hello, %noname%!');
    });

    it('should write greetings', () => {
        const wrapper = mount(<MainWrapper store={store} />);

        store.dispatch(loggedIn('some-token', {
            name: 'World'
        }));

        expect(wrapper.find('.component').text()).to.be.equal('Hello, World!');
    });

    it('should be ... ', () => {
        const name = 'Alex B.';
        const wrapper = shallow(<Main name={ name } />);
        expect(wrapper.find('.component').text()).to.be.equal(`Hello, ${name}!`);
    });
});
