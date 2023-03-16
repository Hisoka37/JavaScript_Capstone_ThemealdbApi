/**
 * @jest-environment jsdom
 */
import commentCounter from '../commentsCounter.js';

describe('commentCounter', () => {
  test('count user input items', () => {
    document.body.innerHTML = "<div class='user-comments'> </div>";
    expect(commentCounter()).toBe(0);
    document.body.innerHTML = '<div class="user-comments"><div>comment</div></div>';
    expect(commentCounter()).toBe(1);
  });

  test('return 0 when input is empty', () => {
    document.body.innerHTML = '';
    expect(commentCounter()).toBe(0);
  });
  test('return counts number', () => {
    const comment = [];
    const res = commentCounter(comment);
    expect(res).toBe(0);
  });
});