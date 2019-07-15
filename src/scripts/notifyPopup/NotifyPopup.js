import Popup from '../popup'

class NotifyPopup extends Popup{
    constructor() {
        const root = document.querySelector('.modal-window');
        super(root);
        this.textElem = document.querySelector('.modal-window__message');
    }

    // init() {
    //     this.root.addEventListener('click', this.hide.bind(this));
    // }

    show(msg) {
        this.textElem.innerText = msg;
        this.root.classList.add('active-modal');
    }

    hide({target}) {
        console.log('Hide');
        if (target.classList.contains('modal-window') || target.className === 'close-modal') {
            this.root.classList.remove('active-modal');
        }
    }

}

export default NotifyPopup;