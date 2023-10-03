export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the given length
  const buffer = new ArrayBuffer(length);

  // Create a DataView on the buffer
  const dataView = new DataView(buffer);

  // Set the value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}
