import '../css/common.css';

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
];

let raceCounter = 0;
const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.winnerField.style.color = 'skyblue';
refs.progressField.style.color = 'green';

refs.startBtn.addEventListener('click', onStart);

function onStart() {
    raceCounter += 1;
    const promises = horses.map(run);

    updateWinnerField('');
    updateProgressField('🤖 Заезд начался, ставки не принимаются!');
    determinateWinner(promises);
    waitForAll(promises);
}

function waitForAll(horses) {
    Promise.all(horses).then(() => {
        updateProgressField('📝 Заезд окончен, принимаются ставки.');
    });
}

function determinateWinner(horses) {
    Promise.race(horses).then(({ horse, time }) => {
        updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time} 
    времени`);
        updateResultsTable({ horse, time, raceCounter });
    });
}

function updateResultsTable({ horse, time, raceCounter }) {
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function updateProgressField(message) {
    refs.progressField.textContent = message;
}

function updateWinnerField(message) {
    refs.winnerField.textContent = message;
}

function run(horse) {
    return new Promise(resolve => {
        const time = getRandomTime(2000, 3500);

        setTimeout(() => {
            resolve({ horse, time });
        }, time);
    });
}

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
