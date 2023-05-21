import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryItemsEl = document.querySelector('.gallery');
function initGallery(items) {
    return items.map(item =>
        `<li class="gallery__item"><a href="${item.original}" class="gallery_link"><img src="${item.preview}" alt="${item.description}" class="gallery_image"></a></li>`).join(' ');
}
const addGalleryItems = initGallery(galleryItems);
galleryItemsEl.innerHTML = addGalleryItems;

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
    enableKeyboard: true,
    close: true,
});
console.log(lightbox);
