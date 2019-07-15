import pugHtml from './login.pug';

class Login {
    constructor() {
        console.log('HELLO');
        // this.ppugHtml();
    }

    init() {
        const popup = document.getElementById('popup');
        popup.innerHTML = pugHtml();

        const registrationComponent = document.querySelector('.sign-component');
        registrationComponent.addEventListener('click', this.hide);

    }

    show({target}) {
        target.classList.add('active-modal')
    }

    hide({target}) {
        if (target.classList.contains('sign-component')) {
            document.querySelector('.sign-component').classList.remove('active-modal');
        }

    }
}

export default Login;
