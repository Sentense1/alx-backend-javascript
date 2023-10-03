export default function getStudentIdsSum(studentsList) {
  const sum = studentsList.reduce((accumulator, studentList) => accumulator + studentList.id, 0);
  return sum;
}
