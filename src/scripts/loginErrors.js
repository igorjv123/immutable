import notifyUser from './notifyUser'
import {changeTab} from './toggleForms'

const INVALID_EMAIL = 'auth/invalid-email',
      WRONG_PASSWORD = 'auth/wrong-password',
      EMAIL_IN_USE = 'auth/email-already-in-use',
      USER_NOT_FOUND = 'auth/user-not-found',
      WEEK_PASSWORD='auth/weak-password';

function showCorrectErrorMsg(errorCode) {
    switch (errorCode) {
        case WRONG_PASSWORD:
            wrongPassword();
            break;
        case INVALID_EMAIL:
            wrongEmail();
            break;
        case USER_NOT_FOUND:
            newUser();
            break;
        case EMAIL_IN_USE:
            emailIsInUse();
            break;
        case WEEK_PASSWORD:
            weekPassword();
            break;
        default:
            notifyUser('Something went wrong. \nPlease try again');
    }
}

function weekPassword() {
    notifyUser('Your password is week\nPlease, select another one');
}

function emailIsInUse() {
    // ask use to login
    console.log('Email in use');

    const fl = confirm('User with such email is already exists.\n Would you like to login?');
    if (fl) {
        console.log('Switch tabs');

        //switch tabs, but save entered data?
        const loginBtn = document.querySelector('.tab-button');

        changeTab({target: loginBtn});
    }
}

function newUser() {
    notifyUser('User with this email wasn`t found\nTry to sign up firstly');
}

function wrongEmail() {
    notifyUser('You have entered invalid email\nTry again');
}

function wrongPassword() {
    notifyUser('You entered wrong password');
    // TODO add error text under input
}

export default showCorrectErrorMsg;