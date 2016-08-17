import {renderComponent, expect} from '../test_helper';
import CommentList               from '../../src/components/CommentList';

describe('CommentList', () => {
  let component;

  const state = {
    comments: ['First comment', 'Second Comment', 'Third']
  };

  beforeEach(() => {
    component = renderComponent(CommentList, null, state)
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('has the class name comment-list', () => {
    expect(component).to.have.class('comment-list');
  });

  it('has a li for each comment', () => {
    expect(component.find('li').length).to.equal(state.comments.length);
  });

  it('shows the text for each comment', () => {
    state.comments.forEach((text) => {
      expect(component).to.contain(text);
    });
  });
});
