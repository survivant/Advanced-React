import {renderComponent, expect} from '../test_helper';
import CommentList               from '../../src/components/CommentList';

describe('CommentList', () => {
  let component;

  const props = {
    comments: ['First comment', 'Second Comment', 'Third']
  };

  beforeEach(() => {
    component = renderComponent(CommentList, null, props)
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('has the class name comment-list', () => {
    expect(component).to.have.class('comment-list');
  });

  it('has a li for each comment', () => {
    expect(component.find('li').length).to.equal(props.comments.length);
  });

  it('shows the text for each comment', () => {
    props.comments.forEach((text) => {
      expect(component).to.contain(text);
    });
  });
});
