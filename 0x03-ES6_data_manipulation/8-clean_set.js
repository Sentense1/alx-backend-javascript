export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input. Please provide a Set and a String.');
  }

  const myArray = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      myArray.push(value.substring(startString.length));
    }
  }

  return myArray.join('-');
}
