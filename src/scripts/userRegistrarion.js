import * as firebase from "firebase";
import resetForm from './resetForm'
import notifyUser from './notifyUser'
import showCorrectErrorMsg from './loginErrors'

const singUpForm = document.querySelector('.signup-form');

singUpForm.addEventListener('submit', singUpUser);

async function singUpUser(e) {
    e.preventDefault();

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

    if(email && password && confirmPassword) {
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