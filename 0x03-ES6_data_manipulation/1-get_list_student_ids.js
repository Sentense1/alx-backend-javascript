export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    const studentIds = students.map((student) => student.id);
    return studentIds;
  }
  return [];
}
