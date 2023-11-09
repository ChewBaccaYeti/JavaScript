/*
При подключении библиотек через CDN, на объект window добавляется свойство в котором хранится то, что предоставляет библиотека. 
Имя этого свойства уникально для библиотеки и описано в её документации. Для Lodash это символ нижнего подчёркивания _. 
Для проверки используем метод add, который просто складывает два числа.
*/
document.addEventListener('DOMContentLoaded', function () {
    const result = _.add(2, 3);
    console.log(result); // 5

    const vanillaOutput = document.querySelector('.output.vanilla');
    const throttledOutput = document.querySelector('.output.throttled');
    const debouncedOutput = document.querySelector('.output.debounced');
    const trailingOutput = document.querySelector('.output.trailing');
    const leadingOutput = document.querySelector('.output.leading');
    const eventCounter = {
        vanilla: 0,
        throttled: 0,
        debounced: 0,
        trailing: 0,
        leading: 0,
    };

    document.addEventListener('scroll', () => {
        eventCounter.vanilla += 1;
        vanillaOutput.textContent = eventCounter.vanilla;
    });

    document.addEventListener(
        'scroll',
        _.throttle(() => {
            eventCounter.throttled += 1;
            throttledOutput.textContent = eventCounter.throttled;
            console.log('Scroll handler call every 300ms');
        }, 300)
    );

    document.addEventListener(
        'scroll',
        _.debounce(() => {
            eventCounter.debounced += 1;
            debouncedOutput.textContent = eventCounter.debounced;
            console.log('Scroll handler call after 300ms pause');
        }, 300)
    );

    document.addEventListener(
        'scroll',
        _.debounce(() => {
            eventCounter.trailing += 1;
            trailingOutput.textContent = eventCounter.trailing;
        }, 300)
    );

    document.addEventListener(
        'scroll',
        _.debounce(
            () => {
                eventCounter.leading += 1;
                leadingOutput.textContent = eventCounter.leading;
            },
            300,
            { trailing: false, leading: true }
        )
    );
});
