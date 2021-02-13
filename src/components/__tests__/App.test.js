import React from 'react';
import { shallow, configure } from 'enzyme';
import App from 'components/App';
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
});


configure({ adapter: new Adapter() });
it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment box', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});