"use strict";
const menuMobile = document.querySelector("[data-header-mobile-nav]");
const menuMobileBtn = document.querySelector("[data-header-mobile-menu-nav]");
const menuMobileClose = document.querySelector("[data-header-mobile-fa-x-btn]");
menuMobile.addEventListener("click", () => {
    if (menuMobileBtn.classList.add("open")) {

}})
menuMobileClose.addEventListener("click", () => {
    if(menuMobileBtn.classList.remove("open")) {
}})