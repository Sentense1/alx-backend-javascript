export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value, 'Guardrail was processed');
  } catch (error) {
    const errorMessage = error.toString();
    queue.push(errorMessage, 'Guardrail was processed');
  }
  return queue;
}
