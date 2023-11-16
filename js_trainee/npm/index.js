document.body
  .appendChild(document.createElement('div'))
  .classList.add('parcel-container');

const parcelDiv = document.querySelector('.parcel-container');

parcelDiv.textContent = 'This is Parcel container';

console.log('This is my Parcel log');
