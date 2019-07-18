class Popup {
  constructor($root) {
    if (new.target === Popup) {
      throw new Error(`You dont have admin rules to create this object
            Your can buy according rights by sending 50$ to admin`);
    }

    this.$root = $root;
  }

  init() {
    // const registrationComponent = document.querySelector('.sign-component');
    this.$root.click(this.hide.bind(this));
  }

  show() {
    // target.classList.add('active-modal')
    this.$root.addClass('active-modal');
  }

  hide({ target }) {
    console.log(target);
    if (target.classList.contains('sign-component') || target.classList.contains('close')) {
      this.$root.removeClass('active-modal');
    }
  }
}

export default Popup;
