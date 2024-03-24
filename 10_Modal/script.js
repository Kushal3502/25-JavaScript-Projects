const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const modalContainer = document.querySelector('.modal-container')

openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})

window.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('container')) {
        modalContainer.style.display = 'none'
    }
})