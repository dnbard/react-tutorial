import { expect } from 'chai';
import React from 'react';
import { mount, shallow } from 'enzyme';

import Main from '../../app/components/main';

describe('<Main />', () => {
    it('should write greetings', () => {
        const wrapper = shallow(<Main name="123" time="2243" />);
        expect(wrapper.text()).to.be.equal('Hello, World!');
    });

    it('should contain element with "component" class', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('.component')).to.have.length(1);
    });

    it('should write greetings with #componentWillMount', () => {
        const wrapper = mount(<Main />);
        expect(wrapper.text()).to.be.equal('Hello, GlobalLogic!');
    });

    it('should catch validation errors', () => {
        expect(() => {
            shallow(<Main name="123" time="2243" />);
        }).to.catch(/error/);
    });
});
