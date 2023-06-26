// Hover transition on mouse in and out on the news card
newsCard = document.querySelectorAll(".container .news .news-card");
newsCard.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-13px)";
    })
    card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(0px)";
    })
})