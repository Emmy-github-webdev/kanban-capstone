/**
 * @jest-environment jsdom
 */
import mealCounter from './mealCounter.js';

describe('Number of elements is shown on the home', () => {
  it('Counter shown on the title', () => {
    document.body.innerHTML = '<div> <a id="meals"></a></div>';
    const title = document.getElementById('meals');
    const list = [{ name: 'Chicken Karaage' }, { name: 'Honey Teriyaki Salmon' }, { name: 'Japanese gohan rice' }];
    mealCounter(list.length);
    expect(title.innerHTML).toStrictEqual('Meals (3)');
  });
});
