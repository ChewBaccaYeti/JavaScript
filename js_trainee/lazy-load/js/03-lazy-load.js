/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded), { once: true };
});

function onImageLoaded(event) {
  console.log('Image loaded');
  event.target.classList.add('appear');
}
