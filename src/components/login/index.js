import Login from './login';
import './login.sass';
const login = new Login();
login.init();
//
// $(() => {
//     const $loginForm = $('.login-form');
//
//     $loginForm.each((i, el) => {
//         const instance = new LoginForm({element: el});
//         instance.init();
//     });
// });
//
// class LoginForm {
//     constructor({element}) {
//         this.$el = $(element);
//         this.el = this.$el[0];
//     }
//
//     init() {
//         this.$el.on('click', '.form-input', console.log);
//     }
// }