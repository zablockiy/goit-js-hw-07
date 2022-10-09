import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const imgGalleryEl = document.querySelector('.gallery');
const markupGallery = createMakrUp(galleryItems);
imgGalleryEl.innerHTML = markupGallery;
imgGalleryEl.addEventListener('click', onClickImg);

function createMakrUp(galleryItems) {
    return galleryItems
        .map((items) => {
            return `<div class ="gallery__item">
        <a class="gallery__link" href="${items.original}">
        <img class="gallery__image" 
        src="${items.preview}"
        data-source="${items.original}"
        alt="${items.description}"/>
        </a>
        </div>`
        }).join("");
}
let instance = "";
function onClickImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") { return };
    instance = basicLightbox.create(
    `<img src=${event.target.dataset.source}>`
    );
    instance.show();
    document.addEventListener('keydown', onModalCloseToEscape); 
    }
    function onModalCloseToEscape (evt) {
        if (evt.code === "Escape") {
            instance.close();
            document.removeEventListener("keydown", onModalCloseToEscape);

        }
}
