const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
    `.site-nav__link[href="${currentPageUrl}"]`
);

console.log(linkEl);
linkEl.classList.add('site-nav__link--current');

const navEl = document.querySelector('.site-nav');
/*
    const navEl = document.querySelector('.site-nav');
    console.dir(navEl);
    navEl.classList.add('added-class', 'super-mega-class');
    navEl.classList.remove('class-to-remove');
*/

magicBtn.addEventListener('click', () => {
    const navEl = document.querySelector('.site-nav');
    console.dir(navEl);
    navEl.classList.add('first-added-class', 'second-added-class');
    navEl.classList.remove('class-to-remove');
});

magicBtn.addEventListener('click', () => {
    const navEl = document.querySelector('.site-nav');
    navEl.classList.toggle('toggle-class');
    navEl.classList.replace('replace-class', 'new-class');
});

console.log(navEl.classList.contains('does-not-contains-class'));
