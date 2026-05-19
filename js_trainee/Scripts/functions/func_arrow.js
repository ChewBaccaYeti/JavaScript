let num = (a, b) => a + b;

alert(num(2, 8));

let singleArg = n => n * 4;

alert(singleArg(8));

let emptyArgs = () => alert('Hello World!');

emptyArgs();

let age = prompt('Возраст?', 18);

let welcome = (age < 18) ?
    () => alert('Сынок.') :
    () => alert('Здарова, мужик.');

welcome();

let sus = (a, b) => {
    let result = a + b
    return result
};

//! Задачи

// Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
};

ask(
    "Вы согласны?",
    function () { alert("Вы согласились."); },
    function () { alert("Вы отменили выполнение."); }
);

//? Моё решение

let ques = (question, yes, no) => {
    (confirm(question)) ?
        () => alert("Вы согласились.") :
        () => alert("Вы отменили выполнение.")
};

ques();

//? Решение задачи

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);