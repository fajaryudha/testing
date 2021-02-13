import React from 'react';
import { mount, configure } from 'enzyme';
import CommentBox from "components/CommentBox";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
let wrapper;
beforeEach(() => {
    wrapper = mount(<CommentBox />);
});

afterEach(() => {
    wrapper.unmount();
})

it('has a text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});
describe('the text area', () => {
    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapper.update();
    });
    
    it('has a text area that user can type in', () => {
        wrapper.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
        // expect(wrapper.find('button').length).toEqual(1);
    });

    it('when form submitted, text area gets empty', () => {

        wrapper.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapper.update();
        wrapper.find('form').simulate('submit');
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('');
        // expect(wrapper.find('button').length).toEqual(1);
    });
});

