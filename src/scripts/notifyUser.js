// const modal = document.querySelector('.modal-window'),
//     closeButton = document.querySelector('.close-modal');
//
// function showModal(message, submit) {
//     const modalText = document.querySelector('.modal-window__message');
//     modalText.innerHTML = message;
//     modal.classList.add('active-modal');
//
//     const closeButton = document.querySelector('close-modal');
//
//     if (submit) {
//         var submitButton = document.createElement("button");
//         modalText.appendChild(submitButton);
//         closeButton.innerHTML = 'ok';
//         modalText.appendChild(closeButton);
//
//         submitButton.addEventListener('click', submit);
//     }
// }
//
// function closeModal({target}) {
//     if (target.className === 'modal-window' || target.className === 'close-modal') {
//         modal.classList.remove('active-modal');
//     }
// }
//
// modal.addEventListener('click', closeModal);
//
// export default showModal;