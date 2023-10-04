// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any; // Allow additional unspecified attributes
}
// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create a Directors object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};
// Create a Teacher object
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Adding an unspecified attribute
};

console.log(teacher3);
console.log(director1);

// Define an interface for the printTeacher function
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0);
    return `${firstInitial}. ${lastName}`;
};

// Define the interface for StudentClass
interface StudentClassInterface {
    new (firstName: string, lastName: string): StudentClass;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}


