import pugHtml from './login.pug';

import Popup from '../../scripts/popup'

class Login extends Popup {
    constructor() {
        console.log('HELLO');
        const popup = document.getElementById('popup');
        popup.innerHTML = pugHtml();
        const rootElem = document.querySelector('.sign-component');
        // have to call super after insertion pug component into html
        super(rootElem);
    }
}

export default Login;
