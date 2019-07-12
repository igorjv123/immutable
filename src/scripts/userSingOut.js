import * as firebase from "firebase/app";

const regForm = document.querySelector('.header__login')

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

document.querySelector('.header__login').addEventListener('click', showRegForm);


export default logout;