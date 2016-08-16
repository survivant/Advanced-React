import { renderComponent, expect }  from '../test_helper';
import App                          from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('has a comment form', () => {
    expect(component.find('.comment-form')).to.exist;
  });

  it('has a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
