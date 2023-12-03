import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

for (const item of galleryItems) {
  console.log(item);
}

const gallery = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            data-sources="${original}"
            alt="${description}" >
        </a>
    </li>
    `;
});

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.dir(galleryMarkup);
