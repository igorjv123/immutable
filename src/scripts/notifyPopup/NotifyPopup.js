import Popup from '../popup'

class NotifyPopup extends Popup {
    constructor() {
        const root = document.querySelector('.modal-window');
        console.log(root)
        super(root);
        this.textElem = document.querySelector('.modal-window__message');
    }

    init() {
        this.root.addEventListener('click', this.hide.bind(this));
    }

    show(msg) {
        this.textElem.innerText = msg;
        this.root.classList.add('active-modal');
    }

    hide({target}) {
        console.log(target);
        if (target.classList.contains('modal-window')
            || target.classList.contains('close')
            || target.classList.contains('close-modal')) {

            this.root.classList.remove('active-modal');
        }
    }

}

export default NotifyPopup;