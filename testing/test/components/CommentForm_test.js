import {renderComponent, expect} from '../test_helper';
import CommentForm               from '../../src/components/CommentForm';

describe('CommentForm', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentForm);
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('should have the class name comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('should have a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('should have a button', () => {
    expect(component.find('button')).to.exist;
  });
});
