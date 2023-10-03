export default function getStudentsByLocation(studentsList, city) {
  const cityList = studentsList.filter((studentList) => city === studentList.location);
  return cityList;
}
