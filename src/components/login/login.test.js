// 'use strict'

import Login from './login';
console.log(Login)

describe('Test login', () => {

    beforeAll(() => {
        function Popup() {
            console.log('Hello from constructor');
        }

        // Popup.prototype = {};

        Login.prototype.init = function () {
            console.log('init');
        };

        Popup.prototype.show = function () {
            console.log('show');
        };

        Popup.prototype.hide = function () {
            console.log('hide');
        };


        // Object.defineProperty(Login, "prototype", Popup.prototype)
        // Object.setPrototypeOf(Login, Popup.prototype);
        //
        Login.prototype.constructor = Login;
        Login.prototype = Object.create(Popup.prototype);

    });

    let log;

    beforeEach(() => {
        log = new Login();
        // spyOn(log.init(), 'init');
    });

    it('Should call parent constructor', () => {
        log = new Login();
        // console.log(log)
        // log.init();
        // log.hide();
        expect(log.init()).toHaveBeenCalled();
        // expect('ttt').toEqual('ttt');
    })
});
