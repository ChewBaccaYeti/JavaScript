import shortid from 'shortid';

const fetchAllUsers = () => {
  console.log('fetchAllUsers');
};

const fetchUsersByID = () => {
  console.log('fetchUsersByID');
};

const fetchUsersByName = () => {
  console.log('fetchUsersByName');
};

export const addUser = name => {
  const user = {
    id: shortid.generate(),
    name,
  };
  console.log(user);
};

export function getRandomHexColor() {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
}

export function getRandomString() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nameLength = Math.floor(Math.random() * (16 - 4 + 1)) + 4; // случайная длина от 4 до 16 символов
  let randomName = '';

  for (let i = 0; i < nameLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomName += characters.charAt(randomIndex);
  }

  return randomName;
}

export default { fetchAllUsers, fetchUsersByID, fetchUsersByName };
