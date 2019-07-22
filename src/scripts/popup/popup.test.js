import $ from 'jquery'
import Popup from './index';

describe('Test Popup class', () => {

    let popup;
    let domElement;

    beforeAll(() => {
        domElement = $('body').append('<div class="sign-component"></div>');
        domElement.addClass('sign-component');
    });

    beforeEach(() => {
        popup = new Popup(domElement);
    });

    it('should save root element', function () {
        const p = new Popup(domElement);
        expect(p.$root === domElement).toBeTruthy();
    });

    it('should add click event listener', () => {
        popup.init();
        const events = $._data(domElement[0], "events" ).click;
        // const events = getEventListeners(domElement); //.data('events'); //$._data(domElement, "events");
        console.log('events', events);
        expect(events.length).toBe(1);
        // return events;
    });

    it('should show popup window', () => {
        popup.show();
        expect(domElement.hasClass('active-modal')).toBeTruthy();
    });

    it('should hide popup window', () => {
        const ev = {
            target: domElement[0],
        };

        popup.show();
        popup.hide(ev);

        expect(domElement.hasClass('active-modal')).toBeFalsy();
    });
});
