
function scrollForms(tabIndex) {
  const forms = document.querySelectorAll('.form-wrapper');
  forms.forEach((form) => {
    form.classList.remove('active-form');
  });
  forms[tabIndex].classList.add('active-form');
}

function setActiveTab(tabList, target) {
  tabList.forEach((tab) => {
    tab.classList.remove('active');
  });
  target.classList.add('active');
}

function changeTab({ target }) {
  console.log(target);
  const tabList = document.querySelectorAll('.tab-button');
  const tabButtons = Array.prototype.slice.call(tabList);
  if (target.classList.contains('tab-button')) {
    scrollForms(tabButtons.indexOf(target));

    setActiveTab(tabList, target);
  }
}

function initToggleForms() {
  const signComponent = document.querySelector('.sign-component__inner');
  signComponent.addEventListener('click', changeTab);
}

export { changeTab, initToggleForms };
