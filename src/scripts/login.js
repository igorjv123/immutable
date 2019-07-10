import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBeB34nGl1iWZ4F8BPcWd5rujoyFwBWw4U",
    authDomain: "immutable-cb710.firebaseapp.com",
    databaseURL: "https://immutable-cb710.firebaseio.com",
    projectId: "immutable-cb710",
    storageBucket: "",
    messagingSenderId: "866051381429",
    appId: "1:866051381429:web:30da06b1290b4a99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const email = 'vladhybalo@gmail.com',
    password = 'admin12345';

// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(r => {
//         console.log(r);
//         alert('You are successfully sign in')
//     })
//     .catch(function(error) {
//     // Handle Errors here.
//         if (error.code === 'auth/email-already-in-use') {
//             alert('Email your email is already in use!!\nUse another one or sign in with this email');
//         } else {
//             alert('Something went wrong');
//         }
//
//     console.warn(error);
//     // ...
// });

// firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(r => {
//         console.log(r);
//         alert('Hi my dear)\nYou are successfully login')
//     })
//     .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(error);
//     // ...
// });

let activeFirstTab = true;
const tabList = document.querySelectorAll('.tab-button'),
      signComponent = document.querySelector('.sign-component__inner'),
      signContent = document.querySelector('.sign-component__tab-content'),
      tabButtons = Array.prototype.slice.call(tabList),
      inputsList = document.querySelectorAll('sign-form__input'),
      inputs = Array.prototype.slice.call(inputsList);

signComponent.addEventListener('click', changeTab)

signComponent.addEventListener('input', ({target})=>{
    console.log(target)
})

function changeTab({target}){
    if (target.classList.contains('tab-button')){
        scrollForms(tabButtons.indexOf(target))

        setActiveTab(tabList, target)
    }
}

function scrollForms(tabIndex) {
    signContent.style.left = `${-tabIndex*400}px`
}

function setActiveTab(tabList, target) {
    tabList.forEach((tab) => {
        tab.classList.remove('active')
    })
    target.classList.add('active')
}






//
// signInTab.addEventListener('click', (e) => {
//     !signInTab.classList.contain('active') ? "active" : '';
//     signUpTab.className = signUpTab.className.replace(" active", "");
//
//     activeFirstTab = true;
//     signForm.style.left = '0px'
// })
// signUpTab.addEventListener('click', (e) => {
//     signUpTab.className += !signUpTab.className.includes('active')?" active":'';
//     signInTab.className = signInTab.className.replace(" active", "");
//
//     activeFirstTab = false;
//     signForm.style.left = '-400px'
// })