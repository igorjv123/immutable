let activeFirstTab = true;

let signInTab = document.getElementById('signInTab');
let signUpTab = document.getElementById('signUpTab');
let signForm = document.getElementById('signForm');

signInTab.addEventListener('click', (e) => {
    signInTab.className += !signInTab.className.includes('active')?" active":'';
    signUpTab.className = signUpTab.className.replace(" active", "");
    activeFirstTab = true;
    signForm.style.left = '0px'
    changeTab(activeFirstTab)
})
signUpTab.addEventListener('click', (e) => {
    signUpTab.className += !signUpTab.className.includes('active')?" active":'';
    signInTab.className = signInTab.className.replace(" active", "");
    activeFirstTab = false;
    signForm.style.left = '-400px'
    changeTab(activeFirstTab)
})
function changeTab(tab) {
    document.getElementById('signInForm').style.display = tab?'flex':'none'
    document.getElementById('signUpForm').style.display = tab?'none':'flex'
}