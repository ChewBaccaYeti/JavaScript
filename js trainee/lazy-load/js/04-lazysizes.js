/*
 * Библиотека lazysizes
 * - feature detection
 */

if ('loading' in HTMLImageElement.prototype) {
  console.log('Browswer does support lazyload');
  addSrcAttrToLazyImages();
} else {
  console.log('Browswer does not support lazyload');
  addLazySizesScript();
}

const lazyImages = document.querySelectorAll('img[data-src');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(event) {
  console.log('Image loaded');
  event.target.classList.add('appear');
}

function addLazySizesScript() {
  const script = document.createElement('script');
  script.async = true;
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossorigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';

  document.body.appendChild(script);
}

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
}
