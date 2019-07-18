// import '@babel/polyfill';

import './sass/style.sass';
import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import $ from 'jquery';
import firebaseConfig from './scripts/firebase.config';

import logout from './scripts/userSingOut';
import './scripts/loginModal';
import initUser from './scripts/initUser';

import { initToggleForms } from './scripts/toggleForms';
import { initUserLogin } from './scripts/userLogin';
import { initUserRegistrarion } from './scripts/userRegistrarion';

import Login from './components/login/login';

msieversion();

function msieversion() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');

  // If Internet Explorer, return version number
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    // alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    alert('IEEEEEEEEE');
    console.info('IEEEEEEEEEEEEE');
  } else {
    // If another browser, return 0
    console.log('Norm browser');
  }

  return false;
}


window.$ = $;

const login = new Login();
login.init();

firebase.initializeApp(firebaseConfig);

document.querySelector('.user-info__btn').addEventListener('click', logout);


initToggleForms();
initUserLogin();
initUserRegistrarion();
initUser();

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('visible');
    }
  });
}

const options = {
  threshold: [0.5],
};

const observer = new IntersectionObserver(onEntry, options);

const elements = document.querySelectorAll('.lazy-load');


for (const elm of elements) {
  observer.observe(elm);
}
