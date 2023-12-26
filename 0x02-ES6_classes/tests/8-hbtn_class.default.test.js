import HolbertonClass from '../8-hbtn_class';

const classSF = new HolbertonClass(35, 'San Francisco');

test("HolbertonClass has implemented the default", () => {
  expect(classSF instanceof HolbertonClass).toBe(true);
});
