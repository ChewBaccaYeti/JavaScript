import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  gallery.appendChild(galleryItem);
});

gallery.addEventListener('click', e => {
  e.preventDefault();

  const imageTarget = e.target;

  if (imageTarget.classList.contains('gallery__image')) {
    const modalWindow = basicLightbox.create(
      `<div class="modal">
                <img src='${
                  galleryItems.find(item => item.preview === imageTarget.src)
                    .original
                }' width='1280'></div>`,
      {
        onShow: () => {
          document.addEventListener('keydown', function handler(e) {
            if (e.code === 'Escape') {
              modalWindow.close();
              document.removeEventListener('keydown', handler);
            }
          });
        },
      },
    );
    modalWindow.show();
  }
  console.log(e.target, e.currentTarget);
});
