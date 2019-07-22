import * as firebase from 'firebase/app';
import {InitUserObserver, InitUserObservable} from './InitUserObserver';

const userInfoButtonObserver = new InitUserObserver(changeUserBtnLoginSuccses);
const userInfoAvatarObserver = new InitUserObserver(changeAvatarLoginSuccses);
const userInfoSignInObserver = new InitUserObserver(changeUserInfoLoginSucces);
const userErrorLoginBtnObserver = new InitUserObserver(changeUserBtnLoginFailed);
const userErrorAvatarObserver = new InitUserObserver(changeAvatarLoginFailed);
const userErrorinfoObserver = new InitUserObserver(changeUserInfoLoginFailed);

const userInfoObservable = new InitUserObservable();
const userErrorObservable = new InitUserObservable();

userInfoObservable.subscribe(userInfoButtonObserver);
userInfoObservable.subscribe(userInfoAvatarObserver);
userInfoObservable.subscribe(userInfoSignInObserver);

userErrorObservable.subscribe(userErrorLoginBtnObserver);
userErrorObservable.subscribe(userErrorAvatarObserver);
userErrorObservable.subscribe(userErrorinfoObserver);

userInfoAvatarObserver.unsubscribe()

function initUser() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('Signed in');
            console.dir(user);

            userInfoObservable.notify(user.photoURL);
        } else {
            console.log('Already signed out');

            userErrorObservable.notify();
        }
        $('.user-info').addClass('show');
    });
}

function changeUserBtnLoginFailed() {
    $('.user-info__btn').text('Login');
}

function changeAvatarLoginFailed() {
    $('.user-info__avatar').removeClass('user-signed');
}

function changeUserInfoLoginFailed() {
    $('.user-info__sign-in').removeClass('show');
}

function changeUserBtnLoginSuccses() {
    $('.user-info__btn').text('Logout');
}

function changeAvatarLoginSuccses(url) {
    $('.user-info__avatar').attr('src', url);
}

function changeUserInfoLoginSucces() {
    $('.user-info__sign-in').addClass('show');
}

export default initUser;
