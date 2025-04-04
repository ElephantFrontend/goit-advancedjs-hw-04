import { refs } from './refs';

class LoadMoreButton {
  static HIDDEN_CLASS = 'hidden';

  constructor(buttonEl) {
    if (!buttonEl) return;

    this.button = buttonEl;
  }

  disable() {
    this.button.classList.add(LoadMoreButton.HIDDEN_CLASS);
  }

  enable() {
    this.button.classList.remove(LoadMoreButton.HIDDEN_CLASS);
  }
}

const loadMoreBtn = new LoadMoreButton(refs.loadMoreBtn);

export default loadMoreBtn;