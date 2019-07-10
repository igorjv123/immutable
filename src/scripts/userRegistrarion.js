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
    try {
        const inputs = document.querySelectorAll('.signup-form .sign-form__input');

        return {
            email: inputs[0].value,
            password: inputs[1].value,
            confirmPassword: inputs[2].value
        };
    } catch (e) {
        console.warn(e);
    }
}

function signUp(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(r => {
            console.log(r);
            notifyUser('You are successfully sign in');
            return true;
        })
        .catch(function (error) {
            console.warn(error);

            showCorrectErrorMsg(error.code);

            return false;
        });
}