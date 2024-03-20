const container = document.querySelector('.container')
const text = document.querySelector('h1')
const changeBtn = document.querySelector('button')

// changeBtn.addEventListener('click', () => {
//     if (container.classList.contains('light')) {
//         container.classList.remove('light')
//         container.classList.add('dark')
//         changeBtn.classList.remove('light')
//         changeBtn.classList.add('dark')
//         text.classList.remove('light')
//         text.classList.add('dark')
//     } else {
//         container.classList.remove('dark')
//         container.classList.add('light')
//         changeBtn.classList.remove('dark')
//         changeBtn.classList.add('light')
//         text.classList.remove('dark')
//         text.classList.add('light')
//     }
// })
container.setAttribute('data-theme','light')
changeBtn.addEventListener('click', () => {
    console.log(container.getAttribute('data-theme'));
    if (container.getAttribute('data-theme') === 'light') {
        container.setAttribute('data-theme','dark')
    } else {
        container.setAttribute('data-theme','light')
    }
    
})