import * as firebase from "firebase/app";

function logout() {
    firebase.auth().signOut()
        .then(response => {
            // Sign-out successful.
            console.log('Successful logout')
            console.dir(response);
        })
        .catch(error => {
            // An error happened.
            console.warn(error);
        });
}

export default logout;