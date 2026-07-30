/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

const navEl = document.querySelector('.site-nav');

const firstNavItemEl = navEl.firstElementChild;
const lastNavItemEl = navEl.lastElementChild;
console.log(firstNavItemEl);
console.log(navEl.children);
console.log(lastNavItemEl);
