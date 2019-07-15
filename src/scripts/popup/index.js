class Popup {
    constructor(root) {
        if (new.target === Popup) {
            throw new Error(`You dont have admin rules to create this object
            Your can buy according rights by sending 50$ to admin`);
        }

        this.root = root;
    }

    init() {
        // const registrationComponent = document.querySelector('.sign-component');
        this.root.addEventListener('click', this.hide.bind(this));
    }

    show({target}) {
        // target.classList.add('active-modal')
        this.root.classList.add('active-modal')
    }

    hide({target}) {
        if (target.classList.contains('sign-component')) {
            this.root.classList.remove('active-modal');
        }
    }
}

export default Popup;