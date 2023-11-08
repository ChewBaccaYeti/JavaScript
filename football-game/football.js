const body = document.querySelector('body');
const field = document.createElement('div');
const ball = document.createElement('div');

field.classList.add('field');
ball.classList.add('ball');

body.append(field);
field.append(ball);

field.addEventListener('click', (event) => {
    let x = event.clientX - field.offsetLeft;
    let y = event.clientY - field.offsetTop;

    let ballSize = ball.clientWidth;
    let fieldWidth = field.clientWidth;
    let fieldHeight = field.clientHeight;

    if (x < 0) {
        x = 0;
    }
    if (y < 0) {
        y = 0;
    }
    if (x > fieldWidth - ballSize) {
        x = fieldWidth - ballSize;
    }
    if (y > fieldHeight - ballSize) {
        y = fieldHeight - ballSize;
    }

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
});
