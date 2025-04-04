import { refs } from './refs';

function scrollPage() {
  const elementGallery = refs.gallery.querySelector('.gallery-item');
  if(!elementGallery) return;

  const { height } = elementGallery.getBoundingClientRect();

  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

export default scrollPage;