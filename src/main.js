// import '@babel/polyfill';

msieversion();

import './sass/style.sass';

// import firebaseConfig from './scripts/firebase.config'

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import $ from "jquery";
import firebaseConfig from './scripts/firebase.config'

import userLogin from './scripts/userLogin'
import userRegistrarion from './scripts/userRegistrarion'
import logout from './scripts/userSingOut'
import './scripts/loginModal'
import initUser from './scripts/initUser'

import {initToggleForms} from "./scripts/toggleForms";
import {initUserLogin} from "./scripts/userLogin";
import {initUserRegistrarion} from "./scripts/userRegistrarion";

import Login from './components/login/login'

function msieversion() {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf("MSIE ");

    // If Internet Explorer, return version number
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        // alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        alert('IEEEEEEEEE');
        console.info('IEEEEEEEEEEEEE');
    } else {
        // If another browser, return 0
        console.log('Norm browser')
    }

    return false;
}



window.$ = $;

// init form
const login = new Login();
login.init();

firebase.initializeApp(firebaseConfig);

document.querySelector('.user-info__btn').addEventListener('click', logout);

initToggleForms();
initUserLogin();
initUserRegistrarion();
initUser();

