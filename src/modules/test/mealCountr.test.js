import mealCounter from '../mealCounter.js';

describe('mealCounter', () => {
  let mealsTestSection;

  beforeEach(() => {
    mealsTestSection = document.createElement('div');
    mealsTestSection.classList.add('container');
    document.body.appendChild(mealsTestSection);
  });

  afterEach(() => {
    mealsTestSection.remove();
  });

  test('should count elements if .meals-section is present', () => {
    mealsTestSection.innerHTML = '<div>meal1</div>';
    expect(mealCounter()).toBe(1);

    mealsTestSection.innerHTML = '<div>meal1</div><div>meal2</div>';
    expect(mealCounter()).toBe(2);
  });

  test('should return 0 if .meals-section is not present', () => {
    mealsTestSection.remove();
    expect(mealCounter()).toBe(0);
  });
});