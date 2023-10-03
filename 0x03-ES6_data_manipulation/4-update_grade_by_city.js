export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  // Filter students by the specified city
  const studentsFiltered = studentsList.filter((student) => student.location === city);
  // Map the filtered studen ts and update their grades
  const updatedStudents = studentsFiltered.map((student) => {
    // Locate the matching grade object in newGrades based on studentId
    const gradeObject = newGrades.find((grade) => grade.studentId === student.Id);
    // Initialize grade as 'N/A'
    let grade = 'N/A';
    // If grade exists in newGrades
    if (gradeObject) {
      // Upgrade the grade
      grade = gradeObject.grade;
    }
    // Return the updated student object with the new grade
    return {
      ...student,
      grade,
    };
  });

  return updatedStudents;
}
