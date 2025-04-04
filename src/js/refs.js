const refs = {
  searchForm: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  notFoundText: document.querySelector('.not-found-text'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const ACTIVE_CLASS = 'active';

const params = {
  query: '',
  page: 1,
  perPage: 15,
  maxPage: 1,
};

export { refs, ACTIVE_CLASS, params };