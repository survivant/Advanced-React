import { expect }       from '../test_helper';

import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment }  from '../../src/actions';

describe('Actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      expect(saveComment('x').type).to.equal(SAVE_COMMENT)
    });

    it('has the correct payload', () => {
      expect(saveComment('x').comment).to.equal('x')      
    });
  });
});
