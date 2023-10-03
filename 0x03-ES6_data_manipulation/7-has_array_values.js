export default function hasValuesFromArray(set, myArray) {
  if (!(set instanceof Set) || !Array.isArray(myArray)) {
    throw new Error('Invalid input. Please provide a Set and an Array.');
  }

  for (const element of myArray) {
    if (!set.has(element)) {
      return false;
    }
  }

  return true;
}
