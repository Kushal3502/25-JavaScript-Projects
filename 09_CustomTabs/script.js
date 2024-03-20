const tab = document.querySelector('.tabs')
const btn = document.querySelectorAll('button')
const content = document.querySelectorAll('.content')

tab.addEventListener('click', (e) => {
    const currId = e.target.dataset.id
    console.log(currId);
    btn.forEach((tab) => {
        tab.classList.remove('active')
    })
    e.target.classList.add('active')
    content.forEach((content) => {
        content.classList.remove('active')
    })
    document.getElementById(currId).classList.add('active')
})