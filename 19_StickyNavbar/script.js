const navbar = document.querySelector('.navbar')
let position = navbar.offsetTop

window.onscroll = function () {
    handleScroll()
}

function handleScroll() {
    if (window.scrollY >= position)
        navbar.classList.add('fixed')
    else
        navbar.classList.remove('fixed')
}
