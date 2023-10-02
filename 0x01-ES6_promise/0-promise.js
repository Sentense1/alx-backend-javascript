export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = Math.random();

      if (value >= 0.3) {
        resolve({ message: 'Great time' });
      } else {
        reject(new Error('Bad time'));
      }
    }, 2000);
  });
}
