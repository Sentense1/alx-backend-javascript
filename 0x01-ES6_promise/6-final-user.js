import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const respone = [];

  try {
    const user = await signUpUser(firstName, lastName);
    respone.push({ status: 'fulfilled', value: user });
  } catch (error) {
    respone.push({ staus: 'rejected', value: error.toString() });
  }

  try {
    const photo = await uploadPhoto(fileName);
    respone.push({ status: 'fulfilled', value: photo });
  } catch (error) {
    respone.push({ status: 'rejected', value: error.toString() });
  }

  return respone;
}
