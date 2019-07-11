import * as firebase from "firebase";
import resetForm from './resetForm'
import notifyUser from './notifyUser'
import showCorrectErrorMsg from './loginErrors'

const singUpForm = document.querySelector('.signup-form');

singUpForm.addEventListener('submit', singUpUser);

async function singUpUser(e) {
    e.preventDefault();
    signUpWithGoogle();
    // singUpWithFb();
    return;
    const data = getSignUpData();

    if (data) {
        const {email, password, confirmPassword} = data;

        console.log(password, confirmPassword);

        if (!isPasswordsEqual(password, confirmPassword)) {
            notifyUser('Your passwords dont match');
        } else if (await signUp(email, password)) {
            resetForm();
        }
    }
}

function isPasswordsEqual(pass1, pass2) {
    return pass1 === pass2;
}

function getSignUpData() {
    const email = document.querySelectorAll('#signUpEmail').value,
        password = document.querySelectorAll('#signUpPassword').value,
        confirmPassword = document.querySelectorAll('#signUpRePassword').value;

    if (email && password && confirmPassword) {
        return {
            email,
            password,
            confirmPassword,
        };
    }
}

function signUp(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            notifyUser('You are successfully sign in');
            return true;
        })
        .catch(error => {
            showCorrectErrorMsg(error.code);
            return false;
        });
}

function signUpWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(result);
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.warn(error)
        });
}

function singUpWithFb() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            // ...
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}