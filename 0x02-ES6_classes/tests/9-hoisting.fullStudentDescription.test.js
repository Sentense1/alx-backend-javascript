import listOfStudents from '../9-hoisting';

test("fullStudentDescription returns the right strings", () => {
  const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
  );
  expect(listPrinted).toEqual([
    'Guillaume Salva - 2020 - San Francisco',
    'John Doe - 2020 - San Francisco',
    'Albert Clinton - 2019 - San Francisco',
    'Donald Bush - 2019 - San Francisco',
    'Jason Sandler - 2019 - San Francisco',
  ]);
});
