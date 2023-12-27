import EVCar from '../100-evcar';
import Car from '../10-car';

test("Species is correctly implemented on EVCar", () => {
  const tesla = new EVCar('Tesla', 'Electric', 'Red', '250');
  const newCar = tesla.cloneCar();

  expect(newCar instanceof EVCar).toBe(false);
  expect(newCar instanceof Car).toBe(true);
});
