const user = {
  name: 'Mango',
  age: 16,
  hobbie: 'videogames',
};
console.log(JSON.stringify(user));

const savedUser = '{"name":"Mango","age":16,"hobbie":"videogames"}';
console.log(JSON.parse(savedUser));

localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('savedUser', savedUser);

const savedData = localStorage.getItem('savedUser');
console.log(savedData);

const parsedData = JSON.parse(savedData);
console.log(parsedData);

console.log(localStorage);
