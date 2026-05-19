let name = prompt('What is your name, user?', '');

alert(`Your name is ${name}`);

let correctUser = confirm(`Valid person - ${name}`);

if (correctUser) {
    alert(`This is our chief ${name}`)
};