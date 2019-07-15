import * as firebase from "firebase";
import resetForm from './resetForm'
import notifyPopup from './notifyPopup'
import showCorrectErrorMsg from './loginErrors'
import logout from './userSingOut'

const singUpForm = document.querySelector('.signup-form');

let imageUrl = null;

async function singUpUser(e) {
    e.preventDefault();
    // logout();
    // signUpWithGoogle();
    // singUpWithFb();
    // return;
    const data = getSignUpData();

    if (data) {
        const {email, password, confirmPassword} = data;

        console.log(password, confirmPassword);

        if (!isPasswordsEqual(password, confirmPassword)) {
            notifyPopup('Your passwords dont match');
        } else if (await signUp(email, password)) {
            resetForm();
        }
    } else {
        console.warn('Failed to read your data')
    }
}

function isPasswordsEqual(pass1, pass2) {
    return pass1 === pass2;

}

function getSignUpData() {
    const email = document.querySelector('#signUpEmail').value,
        password = document.querySelector('#signUpPassword').value,
        confirmPassword = document.querySelector('#signUpRePassword').value;

    console.log(email)
    console.log(password)
    console.log(confirmPassword)

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
        .then(response => {
            console.dir(response);
            notifyPopup('You are successfully sign in');

            updateUserAvatar(imageUrl);

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

function signUpWithFb() {
    var provider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.dir(user);
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

function handleImage(event) {
    const file = event.target.files[0];

    createImagePreview(file);

    imageUrl = uploadImage(file);

    updateUserAvatar(imageUrl);
}

function createImagePreview(file) {
    const reader = new FileReader();

    reader.onload = () => {
        const image = document.getElementById('photo-preview');

        image.src = reader.result;
    };

    reader.readAsDataURL(file);
}

function uploadImage(file) {
    const storageRef = firebase.storage().ref(),
        avatarsRef = storageRef.child('avatars');

    avatarsRef.put(file)
        .then(async (snapshot) => {
            console.dir(snapshot);

            return await snapshot.ref.getDownloadURL();
        })
        .catch(error => {
            console.warn(error);
        })
}

function updateUserAvatar(url) {
    const user = firebase.auth().currentUser;

    if (user) {
        user.updateProfile({
            photoURL: url,
        })
            .then(function () {
                // Update successful.
                console.log('Successful img upload');
            })
            .catch(function (error) {
                // An error happened.
                console.warn(error);
            });
    }
}

function initUserRegistrarion() {
    document.getElementById('signUpImg').addEventListener('change', handleImage);
    document.querySelector('.signup-form').addEventListener('submit', singUpUser);

    document.getElementById('singUpWithFb').addEventListener('click', signUpWithFb);
    document.getElementById('singUpWithGoogle').addEventListener('click', signUpWithGoogle);

}

export {initUserRegistrarion};