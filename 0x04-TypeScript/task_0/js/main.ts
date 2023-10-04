// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Get the table element from the DOM
const table = document.createElement("table");

// Create table headers
const tableHeaderRow = document.createElement("tr");
const headerFirstName = document.createElement("th");
const headerLocation = document.createElement("th");
headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";
tableHeaderRow.appendChild(headerFirstName);
tableHeaderRow.appendChild(headerLocation);

// Append the table headers to the table
table.appendChild(tableHeaderRow);

// Iterate through the students and create table rows
studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const cellFirstName = document.createElement("td");
    const cellLocation = document.createElement("td");
    cellFirstName.textContent = student.firstName;
    cellLocation.textContent = student.location;
    row.appendChild(cellFirstName);
    row.appendChild(cellLocation);
    table.appendChild(row);
});

// Append the table to the document
document.body.appendChild(table);

