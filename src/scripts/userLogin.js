import * as firebase from "firebase";
import resetForm from './resetForm'
import showCorrectErrorMsg from './loginErrors'
import notifyUser from './notifyUser'

const singInForm = document.querySelector('.singin-form');

singInForm.addEventListener('submit', signInUser);

async function signInUser(e) {
    e.preventDefault();

    const data = getSignInData();

    if (data && await signIn(data.email, data.password)) {
        resetForm();
    }
}

function signIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            notifyUser('Hi my dear)\nYou are successfully login');
            return true;
        })
        .catch(error => {
            const errorCode = error.code;

            showCorrectErrorMsg(errorCode);
            return false;
        });
}

function getSignInData() {
    const email = document.getElementById('signInEmail').value,
          password = document.getElementById('signInPassword').value;

    if (email && password) {
        return {
            email,
            password,
        }
    }

    return null;
}
