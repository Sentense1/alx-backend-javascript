// Import the Car class from the specified file
import Car from './10-car';

// Create a subclass TestCar that extends the Car class
class TestCar extends Car {}

// Create an instance of TestCar with specific attributes
const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');

// Clone the TestCar instance using the cloneCar method
const tc2 = tc1.cloneCar();

// Print information about the first TestCar instance
console.log(tc1);
// Check if tc1 is an instance of the TestCar class
console.log(tc1 instanceof TestCar);

// Print information about the cloned TestCar instance
console.log(tc2);
// Check if tc2 is an instance of the TestCar class
console.log(tc2 instanceof TestCar);

// Check if tc1 and tc2 reference the same object (should be false)
console.log(tc1 == tc2);
