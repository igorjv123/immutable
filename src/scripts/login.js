const tabList = document.querySelectorAll('.tab-button'),
      signComponent = document.querySelector('.sign-component__inner'),
      signContent = document.querySelector('.sign-component__tab-content'),
      tabButtons = Array.prototype.slice.call(tabList),
      inputsList = document.querySelectorAll('sign-form__input'),
      inputs = Array.prototype.slice.call(inputsList);

signComponent.addEventListener('click', changeTab)

signComponent.addEventListener('input', ({target})=>{
    console.log(target)
})

function changeTab({target}){
    if (target.classList.contains('tab-button')){
        scrollForms(tabButtons.indexOf(target))

        setActiveTab(tabList, target)
    }
}

function scrollForms(tabIndex) {
    signContent.style.left = `${-tabIndex*400}px`
}

function setActiveTab(tabList, target) {
    tabList.forEach((tab) => {
        tab.classList.remove('active')
    })
    target.classList.add('active')
}






//
// signInTab.addEventListener('click', (e) => {
//     !signInTab.classList.contain('active') ? "active" : '';
//     signUpTab.className = signUpTab.className.replace(" active", "");
//
//     activeFirstTab = true;
//     signForm.style.left = '0px'
// })
// signUpTab.addEventListener('click', (e) => {
//     signUpTab.className += !signUpTab.className.includes('active')?" active":'';
//     signInTab.className = signInTab.className.replace(" active", "");
//
//     activeFirstTab = false;
//     signForm.style.left = '-400px'
// })