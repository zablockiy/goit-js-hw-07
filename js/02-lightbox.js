import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const imgGalleryEl = document.querySelector(".gallery");
const markupGallery = createMarkUp(galleryItems);
imgGalleryEl.innerHTML = markupGallery;
imgGalleryEl.addEventListener("click", onClickImg);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
function createMarkUp(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
    })
    .join("");
}
function onClickImg(event) {
  event.preventDefault();
}
