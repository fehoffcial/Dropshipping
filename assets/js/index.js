"use strict";
// ! MODAL Variable
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");
// ! MODAL Functionality
const modalCloseFunction = () => {
    modal.classList.add("closed");
 }
// ! MODAL EventListener
modalCloseOverlay.addEventListener("click", modalCloseFunction);
modalCloseBtn.addEventListener("click", modalCloseFunction);
// ! TOAST Nofification Variable
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");
// ! TOAST Nofification EventListener
toastCloseBtn.addEventListener("click", function (){
    notificationToast.classList.add("closed");
});