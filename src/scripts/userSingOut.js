import * as firebase from "firebase/app";

const regForm = document.querySelector('.user-info__btn')

regForm.addEventListener('click', showRegForm)

function showRegForm() {
    document.querySelector('.sign-component').classList.add('active-modal')
}

function logout() {
    firebase.auth().signOut()
        .then(response => {
            console.log('Successful logout')
            console.dir(response);
        })
        .catch(error => {
            console.warn(error);
        });
}

document.querySelector('.user-info__btn').addEventListener('click', showRegForm);


export default logout;