const navBar = document.querySelector(".navbar");
const brandName = document.querySelector(".brand-name");
const navBarList = document.querySelectorAll(".navbar-list");
const navBarItem = document.querySelectorAll(".navbar-item a");
const closeButton = document.querySelector(".close-button svg");
const toggleMenuButton = document.querySelectorAll(".toggle-menu-button svg path");

if(navBar.dataset.theme === "dark"){
    navBar.classList.add("navbar-dark");
    brandName.classList.add("brand-name-dark");
    navBarList[1].classList.add("navbar-list-dark");
    navBarItem[1].classList.add("navbar-item-dark");
    navBarItem[3].classList.add("navbar-item-dark");
    toggleMenuButton.forEach(path => {path.style.fill = "#fff"});
    // closeButton.style.fill = "#fff";
}
else{
    navBar.classList.remove("navbar-dark");
    brandName.classList.remove("brand-name-dark");
    navBarList[1].classList.remove("navbar-list-dark");
    navBarItem[1].classList.remove("navbar-item-dark");
    navBarItem[3].classList.remove("navbar-item-dark");
    toggleMenuButton.forEach(path => {path.style.fill = "#000"});
    // closeButton.style.fill = "#000";
}





// Hover transition on mouse in and out on the news card
const newsCard = document.querySelectorAll(".container .news .news-card");
newsCard.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-13px)";
    })
    card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(0px)";
    })
})

const newsCardContentTitle = document.querySelectorAll(".news-card-content-title");
const newsCardContentDescription = document.querySelectorAll(".news-card-content-description");

newsCard.forEach(card => {
    if(card.dataset.theme === "dark"){
        card.classList.add("news-card-dark");
        newsCardContentTitle.forEach(title => {
            title.classList.add("news-card-content-title-dark");
        })
        newsCardContentDescription.forEach(description => {
            description.classList.add("news-card-content-description-dark");
        })
    }
    else{
        newsCardContentTitle.forEach(title => {
            title.classList.remove("news-card-content-title-dark");
        })
        newsCardContentDescription.forEach(description => {
            description.classList.remove("news-card-content-description-dark");
        })
    }
}) 









const container = document.querySelector(".container");
const newsHeadingTitle = document.querySelector(".news-heading-title");
const newsHeadingDescription = document.querySelector(".news-heading-description");

if(container.dataset.theme === "dark"){
    container.classList.add("container-dark");
    newsHeadingTitle.classList.add("news-heading-title-dark");
    newsHeadingDescription.classList.add("news-heading-description-dark");
    newsHeadingTitle.childNodes[1].style.color = "#fff";
}
else{
    container.classList.remove("container-dark");
    newsHeadingTitle.classList.remove("news-heading-title-dark");
    newsHeadingDescription.classList.remove("news-heading-description-dark");
    newsHeadingTitle.childNodes[1].style.color = "#121212";
}                        