import 'babel-polyfill';
import * as firebase from 'firebase/app';
import $ from 'jquery';
import resetForm from './resetForm';
import notifyPopup from './notifyPopup';
import showCorrectErrorMsg from './loginErrors';
import logout from './userSingOut';

// const singUpForm = $('.signup-form');

let imageUrl = null;

async function singUpUser(e) {
  e.preventDefault();
  // logout();
  // signUpWithGoogle();
  // singUpWithFb();
  // return;
  const data = getSignUpData();

  if (data) {
    const { email, password, confirmPassword } = data;

    console.log(password, confirmPassword);

    if (!isPasswordsEqual(password, confirmPassword)) {
      notifyPopup('Your passwords dont match');
    } else if (await signUp(email, password)) {
      resetForm();
    }
  } else {
    console.warn('Failed to read your data');
  }
}

function isPasswordsEqual(pass1, pass2) {
  return pass1 === pass2;
}

function getSignUpData() {
  const email = $('#signUpEmail').val();
  const password = $('#signUpPassword').val();
  const confirmPassword = $('#signUpRePassword').val();
  console.log(email);
  console.log(password);
  console.log(confirmPassword);

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
    .then((response) => {
      console.dir(response);
      notifyPopup('You are successfully sign in');

      updateUserAvatar(imageUrl);

      return true;
    })
    .catch((error) => {
      showCorrectErrorMsg(error.code);
      return false;
    });
}

function signUpWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const { user } = result;
      // ...
      console.log(result);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      const { credential } = error;
      // ...
      console.warn(error);
    });
}

function signUpWithFb() {
  const provider = new firebase.auth.FacebookAuthProvider();
  // provider.addScope('user_birthday');
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const { user } = result;
      console.dir(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      const { credential } = error;
      // ...
    });
}

function handleImage(event) {
  const file = event.target.files[0];

  createImagePreview(file);

  imageUrl = uploadImage(file);

  updateUserAvatar(imageUrl);
}

function createImagePreview(file) {
  const reader = new FileReader();

  reader.onload = () => {
    const $image = $('#photo-preview');
    console.log($image);

    $image.attr('src', reader.result);
  };

  reader.readAsDataURL(file);
}

function uploadImage(file) {
  const storageRef = firebase.storage().ref();
  const avatarsRef = storageRef.child('avatarssdfds');
  // debugger;
  avatarsRef.put(file)
    .then(async (snapshot) => {
      console.dir(snapshot);

      return await snapshot.ref.getDownloadURL();
    })
    .catch((error) => {
      console.warn(error);
    });
}

function updateUserAvatar(url) {
  const user = firebase.auth().currentUser;

  if (user) {
    user.updateProfile({
      photoURL: url,
    })
      .then(() => {
        // Update successful.
        console.log('Successful img upload');
      })
      .catch((error) => {
        // An error happened.
        console.warn(error);
      });
  }
}

function initUserRegistrarion() {
  $('#signUpImg').change(handleImage);
  $('.signup-form').submit(singUpUser);

  $('#singUpWithFb').click(signUpWithFb);
  $('#singUpWithGoogle').click(signUpWithGoogle);
}

export { initUserRegistrarion };

// notifyPopup('test');
