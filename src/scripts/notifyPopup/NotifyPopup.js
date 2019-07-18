import $ from 'jquery';
import Popup from '../popup';

class NotifyPopup extends Popup {
  constructor() {
    const $root = $('.modal-window');
    console.log($root);
    super($root);
    this.$textElem = $('.modal-window__message');
  }

  show(msg) {
    this.$textElem.text(msg);
    this.$root.addClass('active-modal');
  }

  hide({ target }) {
    console.log(target);
    if (target.classList.contains('modal-window')
            || target.classList.contains('close')
            || target.classList.contains('close-modal')) {
      this.$root.removeClass('active-modal');
    }
  }
}

export default NotifyPopup;
