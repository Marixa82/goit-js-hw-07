import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// 
const galleryItemsEl = document.querySelector('.gallery');
console.log(galleryItemsEl);
function initGallery(items) {
    return items.map(item =>
        `<li class="gallery__item">
   <a class="gallery__link" 
   href ="${item.original}">
   <img
   class="gallery__image" 
   src="${item.preview}"
   data-source="${item.original}"
   alt="${item.description}"/></a></li>`).join("");

}

const addGalleryItems = initGallery(galleryItems);
galleryItemsEl.innerHTML = addGalleryItems;
galleryItemsEl.addEventListener('click', galleryItemsClick);

function galleryItemsClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`<img src=
      "${event.target.dataset.source}"
       width="800" height ="600"/>`);
    instance.show();

    galleryItemsEl.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    });
}


