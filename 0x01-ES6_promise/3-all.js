import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoData, user]) => {
      const logMessage = (`${photoData.body} ${user.firstName} ${user.lastName}`);
      console.log(logMessage);
      return logMessage;
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
