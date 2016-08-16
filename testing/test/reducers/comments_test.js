import { expect }       from '../test_helper';
import commentReducer   from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Reducers', () => {
  describe('Comment', () => {
    it('ignores unknown action', () => {
      const state = commentReducer([], { type: 'UNKNOWN' });

      expect(state).to.eql([]);
    });

    it('handles SAVE_COMMENT', () => {
      const action = { type: SAVE_COMMENT, comment: 'Comment' },
            state  = commentReducer([], action);

      expect(state).to.eql(['Comment']);
    });
  });
});
