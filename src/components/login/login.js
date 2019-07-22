import pugHtml from './login.pug';
import $ from 'jquery';
import Popup from '../../scripts/popup';
//
// function pugHtml() {
//   return `<div></div>`;
// }
class Login extends Popup {
  constructor() {
    const pug = pugHtml();

    $('#popup').html(pug);
    const rootElem = $('.sign-component');
    // have to call super after insertion pug component into html
    super(rootElem);
  }
}

export default Login;
