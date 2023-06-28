// Hover transition on mouse in and out on the news card
newsCard = document.querySelectorAll(".container .news .news-card");
console.log(newsCard)
newsCard.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-13px)";
        console.log("mouseover")
    })
    card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(0px)";
        console.log("mouseout")
    })
})

allCategories = document.querySelectorAll('.category');
allCategories.forEach((category)=>{
    category.addEventListener("click", (e)=>{
        allCategories.forEach((category)=>{
            category.classList.remove('active-btn');
        })
        e.target.classList.add('active-btn');
    })
})