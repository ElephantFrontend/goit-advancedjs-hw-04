import SimpleLightbox from 'simplelightbox';
import handleSearch from './js/form';
import loadMoreBtn from './js/button-handler.js';
import handleLoadMore from './js/load.js';
import { refs } from './js/refs.js';

let lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

refs.searchForm.addEventListener('submit', async event => {
  await handleSearch(event);
  lightbox.refresh();
});

loadMoreBtn.button.addEventListener('click', async () => {
  await handleLoadMore();
  lightbox.refresh();
});