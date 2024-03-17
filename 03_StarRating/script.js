const stars = document.querySelectorAll('.fa-star')
const ratingValue = document.querySelector('.rating-value')

let rating = -1;
stars.forEach((star, index) => {
    star.dataset.item = index + 1
    star.addEventListener('mouseover', onmouseover)
    star.addEventListener('click', onclick)
    star.addEventListener('mouseleave', onmouseleave)
})
function onmouseover(e) {
    const currentRating = e.target.dataset.item;
    handleCurrentRating(currentRating);
}
function handleCurrentRating(currentRating) {
    for (let i = 0; i < 5; i++) {
        if (currentRating == 1) { }
        else if (currentRating < 4) { }
        else{}
        if (i < currentRating) {
            stars[i].classList.add('fa-yellow')
        } else {
            stars[i].classList.remove('fa-yellow')
        }
    }
}
function onclick(e) {
    const currentRating = e.target.dataset.item;
    rating = currentRating;
    handleCurrentRating(rating);
    ratingValue.innerHTML=rating
}
function onmouseleave() {
    handleCurrentRating(rating)
}