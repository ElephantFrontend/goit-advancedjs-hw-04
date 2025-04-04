import fetchImages from './pixabay-api.js';
import loadMoreBtn from './button-handler.js';
import scrollPage from './scroll-handler.js';
import { cardsImg } from './render-functions.js';
import { params, refs, ACTIVE_CLASS } from './refs';

async function handleLoadMore(event) {
  params.page += 1;
  loadMoreBtn.disable();
  refs.loader.classList.add(ACTIVE_CLASS);

  try {
    const { query, page, perPage } = params;
    const images = await fetchImages(query, page, perPage);
    refs.gallery.insertAdjacentHTML('beforeend', cardsImg(images));

    refs.loader.classList.remove(ACTIVE_CLASS);
    loadMoreBtn.enable();
    scrollPage();

    if (params.page < params.maxPage) {
      loadMoreBtn.enable();
    } else {
      loadMoreBtn.disable();
      refs.notFoundText.textContent =
        "We're sorry, but you've reached the end of search results..";
    }
  } catch (error) {
    loadMoreBtn.disable();
  }
}

export default handleLoadMore;