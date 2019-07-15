import './sass/style.sass';

// import firebaseConfig from './scripts/firebase.config'

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

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
// init form
const login = new Login();
login.init();

firebase.initializeApp(firebaseConfig);

document.querySelector('.user-info__btn').addEventListener('click', logout);

initToggleForms();
initUserLogin();
initUserRegistrarion();
initUser();



