
// import './sass/app-features.sass';
import './sass/style.sass';

// import firebaseConfig from './scripts/firebase.config'

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from './scripts/firebase.config'

firebase.initializeApp(firebaseConfig);

import userLogin from './scripts/userLogin'
import userRegistrarion from './scripts/userRegistrarion'
