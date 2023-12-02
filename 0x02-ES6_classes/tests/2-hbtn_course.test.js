import HolbertonCourse from '../2-hbtn_course.js';

test('holbertonCourse checks constructor types', () => {
  expect(() => {
    new HolbertonCourse(10, 20, ['Lucie', 'Guillaume']);
  }).toThrow();
  expect(() => {
    new HolbertonCourse('PHP', '20', ['Lucie', 'Guillaume']);
  }).toThrow();
  expect(() => {
    new HolbertonCourse('PHP', 20, 'Lucie');
  }).toThrow();
});

test('holbertonCourse setter types', () => {
  expect(() => {
    const name1 = new HolbertonCourse(10, 20, ['Lucie', 'Guillaume']);
    name1.set(10, 10, ['Lucie', 'Guillaume']);
  }).toThrow();
  expect(() => {
    const length1 = new HolbertonCourse('PHP', '20', ['Lucie', 'Guillaume']);
    length1.set('Ben', '10', ['Lucie', 'Guillaume']);
  }).toThrow();
  expect(() => {
    const students1 = new HolbertonCourse('PHP', 20, 'Lucie');
    students1.set('Ben', 10, []);
  }).toThrow();
});
