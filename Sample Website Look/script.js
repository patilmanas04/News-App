const navBar = document.querySelector(".navbar");
const brandName = document.querySelector(".brand-name");
const navBarList = document.querySelectorAll(".navbar-list");
const navBarItem = document.querySelectorAll(".navbar-item a");
const closeButton = document.querySelector(".close-button svg");
const toggleMenuButton = document.querySelectorAll(".toggle-menu-button svg path");

console.log(navBarList);
console.log(navBarItem);

if(navBar.dataset.theme === "dark"){
    navBar.classList.add("navbar-dark");
    brandName.classList.add("brand-name-dark");
    navBarList[1].classList.add("navbar-list-dark");
    navBarItem[1].classList.add("navbar-item-dark");
    navBarItem[3].classList.add("navbar-item-dark");
    toggleMenuButton.forEach(path => {path.style.fill = "#fff"});
    closeButton.style.fill = "#fff";
}
else{
    navBar.classList.remove("navbar-dark");
    brandName.classList.remove("brand-name-dark");
    navBarList[1].classList.remove("navbar-list-dark");
    navBarItem[1].classList.remove("navbar-item-dark");
    navBarItem[3].classList.remove("navbar-item-dark");
    toggleMenuButton.forEach(path => {path.style.fill = "#000"});
    closeButton.style.fill = "#000";
}