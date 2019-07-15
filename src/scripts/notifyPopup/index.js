import NotifyPopup from './NotifyPopup'

const notifyPopup = new NotifyPopup();

notifyPopup.init();

function notify(msg) {
    notifyPopup.show(msg);
}

export default notify;