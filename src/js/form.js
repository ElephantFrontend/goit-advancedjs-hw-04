import iziToast from 'izitoast';
import loadMoreBtn from './button-handler.js';
import fetchImages from './pixabay-api.js';
import { cardsImg } from './render-functions.js';
import { ACTIVE_CLASS, params, refs } from './refs';

async function handleSearch(event) {
  event.preventDefault();

  refs.notFoundText.textContent = '';
  refs.gallery.innerHTML = '';

  loadMoreBtn.disable();
  params.page = 1;
  params.maxPage = 1;

  const form = event.currentTarget;
  const searchTerm = form.elements.search.value.trim();

  if (!searchTerm) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid search query!',
    });

    return;
  }

  refs.loader.classList.add(ACTIVE_CLASS);

  try {
    const images = await fetchImages(searchTerm);
    refs.loader.classList.remove(ACTIVE_CLASS);

    if (!images.hits || images.hits.length === 0) {
      refs.notFoundText.innerHTML = `Sorry, there are no images matching your search <span class ="impotent">${userQuery}</span>. Please try again!`;

      return;
    }

    params.query = searchTerm;
    params.maxPage = Math.ceil(
      images.totalHits / params.perPage
    );

    refs.gallery.innerHTML = cardsImg(images);

    if (params.maxPage > 1) {
      loadMoreBtn.enable();
    }
  } catch (error) {
    refs.loader.classList.remove(ACTIVE_CLASS);
    iziToast.error({
      title: 'Error',
      message: `Error: ${error}`,
    });
  } finally {
    form.reset();
  }
}

export default handleSearch;