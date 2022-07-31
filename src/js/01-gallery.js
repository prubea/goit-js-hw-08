// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector("div.gallery");

const markup = galleryItems
    .map(elem => {
        const images = `
      <div class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      title="${elem.description}"
      alt="${elem.description}"
    />
  </a>
</div>`;
    return images;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

new SimpleLightbox('.gallery a' ,{ captionDelay: 250 });

console.log(galleryItems);
