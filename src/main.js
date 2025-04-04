import { refs } from "./js/refs";
import fetchImages from "./js/pixabay-api";
import renderImages from "./js/render-functions";
import SimpleLightbox from "simplelightbox";

const { form, input, list } = refs;

let lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = input.value.trim();
  list.innerHTML = "";

  fetchImages(inputValue)
    .then((images) => {
      list.innerHTML = renderImages(images);
      lightbox.refresh();
    })
    .catch((error) => console.log(error));
});