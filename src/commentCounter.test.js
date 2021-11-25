import commentCounter from './commentCounter.js';

describe('test comment count', () => {
  test('test number of comments from the Involvement API', () => {
    const comment = [
      {
        comment: 'Good meal',
        creation_date: '2021-11-25',
        username: 'null',
      },
      {
        comment: 'Great meal',
        creation_date: '2021-11-25',
        username: 'John Do',
      },
    ];
    expect(commentCounter(comment)).toBe(2);
  });
});
