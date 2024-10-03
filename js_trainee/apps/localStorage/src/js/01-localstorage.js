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

try {
  const agent = {
    id: '91714cf6-8bc3-4c37-8184-fb3714fade41',
    tag: 'Green Eye',
    status: 'active',
    firstName: 'Mike',
    lastName: 'Wazowski',
    department: 'Infilration',
    corp: 'Monsters Intelligence',
    role: 'thief',
  };
  console.log(agent);
  console.log(JSON.stringify(agent));
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

try {
  const parsedAgent =
    '{"id": 91714,"tag": "Green Eye","status": "active","firstName": "Mike","lastName": "Wazowski","department": "Infilration","corp": "Monsters Intelligence","role": "thief"}';

  console.log(parsedAgent);
  console.log(JSON.parse(parsedAgent));
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

try {
  const data = JSON.parse('Well, this is awkward');
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

console.log('✅ This is fine, we handled parse error in try...catch');

try {
  const data = JSON.parse('{username: "Mango"}');
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

console.log('✅ This is fine, we handled parse error in try...catch');

localStorage.setItem('ui-theme', 'light');
localStorage.setItem('sidebar', 'expanded');
localStorage.setItem('notification-level', 'mute');

localStorage.setItem('ui-theme', 'dark');

const theme = localStorage.getItem('ui-theme');
console.log(theme);

const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(settings));

const savedSettings = localStorage.getItem('settings');
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);

localStorage.setItem('ui-theme', 'dark');
console.log(localStorage.getItem('ui-theme'));

localStorage.removeItem('ui-theme');
console.log(localStorage.getItem('ui-theme'));

localStorage.setItem('ui-theme', 'light');
localStorage.setItem('sidebar', 'expanded');
localStorage.setItem('notification-level', 'mute');
console.log(localStorage.getItem('ui-theme'));
console.log(localStorage.getItem('sidebar'));
console.log(localStorage.getItem('notification-level'));

localStorage.clear();

console.log(localStorage.getItem('ui-theme'));
console.log(localStorage.getItem('sidebar'));
console.log(localStorage.getItem('notification-level'));
