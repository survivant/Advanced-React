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

  it('has the class name comment-form', () => {
    expect(component).to.have.class('comment-form');
  });

  it('has a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('textarea', () => {
    let   area;
    const test_text = 'new comment';

    beforeEach(() => {
      area = component.find('textarea');

      area.simulate('change', test_text);
    });

    it('shows text that is entered', () => {
      expect(area).to.have.value(test_text);
    });

    it('is cleared on submission', () => {
      component.simulate('submit');

      expect(area).to.have.value('');
    });
  });
});
