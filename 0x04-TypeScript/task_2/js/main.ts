// Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Define the createEmployee function
function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Logging to output
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Define the isDirector type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Define the executeWork function
function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// Logging to output:
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// Define a string literal type named Subjects
type Subjects = "Math" | "History";

// Define the teachClass function
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    } else {
        return "Invalid subject";
    }
}

// Loging to output:
console.log(teachClass("Math"));
console.log(teachClass("History"));


