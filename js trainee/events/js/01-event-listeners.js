/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerButton = document.querySelector('.js-add-listener');

/*
targetBtn.addEventListener('click', () => {
    console.log(
        'targetBtn clicked',
        'Click!'
        // handleTargetButtonClick(),
        // targetButtonClickHandler(),
        // onTargetButtonClick(),
        // logMessage()
    );
});
*/

addListenerButton.addEventListener('click', () => {
    console.log('Вешаю слушателя событий на целевую кнопку');

    targetBtn.addEventListener('click', () => {
        console.log('Click!');
    });
});

function handleTargetButtonClick() {
    console.log('handleTargetButtonClick', 'Click');
}
function targetButtonClickHandler() {
    console.log('targetButtonClickHandler', 'Click');
}
function onTargetButtonClick() {
    console.log('onTargetButtonClick', 'Click');
}
function logMessage() {
    console.log('logMessage', 'Click on target button');
}
