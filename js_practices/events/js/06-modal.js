/*
 * 1. Открыть и закрыть по кнопке: onModalOpen / onModalClose
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdropBtn: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdropBtn.addEventListener('click', onBackdropClick);

function onOpenModal() {
    window.addEventListener('keydown', onEscapeKeyDown);
    document.body.classList.add('show-modal');
}

function onCloseModal() {
    window.removeEventListener('keydown', onEscapeKeyDown);
    document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
    console.log(event.currentTarget, event.target);

    if (event.currentTarget === event.target) {
        console.log('This is Backdrop click');
        onCloseModal();
    }
}

function onEscapeKeyDown(event) {
    console.log(event);
    console.log(event.code);

    const ESCAPE_CODE = 'Escape';
    const isEscapeCode = event.code === ESCAPE_CODE;

    // if (event.code === 'Escape') {}

    if (isEscapeCode) {
        onCloseModal();
    }
}
