export default function setFromArray(myArray) {
  if (!Array.isArray(myArray)) {
    throw new Error('Input is not an array');
  }

  return new Set(myArray);
}
