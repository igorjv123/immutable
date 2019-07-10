const modal = document.querySelector('.modal-window'),
    closeButton = document.querySelector('.close-modal')

function showModal(message) {
    const modalText = document.querySelector('.modal-window__message');
    modalText.innerHTML = message;
    modal.style.display = 'flex'
}

function closeModal({target}){

    if (target.className === 'modal-window' || target.className === 'close-modal'){
        modal.style.display = 'none'
    }

}

modal.addEventListener('click', closeModal);

//
// function notifyUser(msg) {
//     alert(msg);
// }

export default showModal;