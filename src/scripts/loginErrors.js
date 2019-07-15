import notifyPopup from './notifyPopup'
import {changeTab} from './toggleForms'

const   INVALID_EMAIL = 'auth/invalid-email',
        WRONG_PASSWORD = 'auth/wrong-password',
        EMAIL_IN_USE = 'auth/email-already-in-use',
        USER_NOT_FOUND = 'auth/user-not-found',
        WEEK_PASSWORD = 'auth/weak-password';

function showCorrectErrorMsg(errorCode) {
    switch (errorCode) {
        case WRONG_PASSWORD:
            handleWrongPassword();
            break;
        case INVALID_EMAIL:
            handleWrongEmail();
            break;
        case USER_NOT_FOUND:
            createNewUser();
            break;
        case EMAIL_IN_USE:
            emailIsInUse();
            break;
        case WEEK_PASSWORD:
            handleWeekPassword();
            break;
        default:
            notifyPopup('Something went wrong. \nPlease try again');
    }
}

function handleWeekPassword() {
    notifyPopup('Your password is week\nPlease, select another one');
}

function emailIsInUse() {
    const flag = confirm('User with such email is already exists.\n Would you like to login?');

    if (flag) {
        //switch tabs, but save entered data?
        const loginBtn = document.querySelector('.tab-button');

        changeTab({target: loginBtn});
    }
}

function createNewUser() {
    notifyPopup('User with this email wasn`t found\nTry to sign up firstly');
}

function handleWrongEmail() {
    notifyPopup('You have entered invalid email\nTry again');
}

function handleWrongPassword() {
    notifyPopup('You entered wrong password');
    // TODO add error text under input
}

export default showCorrectErrorMsg;