const listItems = document.querySelectorAll('.item');

console.log('Number of categories:', listItems.length);

[...listItems].map(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Element: ', item.getElementsByTagName('li').length);
});
