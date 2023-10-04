import { Subjects } from './subjects/Subject';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

// Create and export constants for subjects
export const cpp: Subjects.Cpp = new Cpp();
export const java: Subjects.Java = new Java();
export const react: Subjects.React = new React();

// Create and export a Teacher object with experienceTeachingC
export const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
};

// Log and call methods for Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log and call methods for Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log and call methods for React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
