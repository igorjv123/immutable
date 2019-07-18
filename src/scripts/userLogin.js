import * as firebase from 'firebase';
import $ from 'jquery';
import resetForm from './resetForm';
import showCorrectErrorMsg from './loginErrors';
import notifyPopup from './notifyPopup';


async function signInUser(e) {
  e.preventDefault();

  const data = getSignInData();

  if (data && await signIn(data.email, data.password)) {
    resetForm();
  }
}

function signIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      notifyPopup('Hi my dear)\nYou are successfully login');
      console.dir(response);
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;

      showCorrectErrorMsg(errorCode);
      return false;
    });
}

function getSignInData() {
  const email = $('#signInEmail').val();
  const password = $('#signInPassword').val();

  if (email && password) {
    return {
      email,
      password,
    };
  }

  return null;
}

function initUserLogin() {
  $('.singin-form').submit(signInUser);
}

export default initUserLogin;
