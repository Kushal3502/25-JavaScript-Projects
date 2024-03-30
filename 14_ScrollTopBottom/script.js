const scrollToBottom = document.querySelector('.scroll-to-bottom')
const scrollToTop = document.querySelector('.scroll-to-top')
const loader = document.querySelector('.loader')
const usersList = document.querySelector('.users')

async function fetchUsers() {
    showLoader()
    const response = await fetch('https://dummyjson.com/users?limit=50')
    const result = await response.json()
    showUser(result.users)
    hideLoader()
}

function showLoader() {
    loader.classList.add('show')
    usersList.classList.add('hide')
}

function hideLoader() {
    loader.classList.remove('show')
    usersList.classList.remove('hide')
}

function showUser(userData) {
    console.log(userData);
    usersList.innerHTML = userData.map(data => `
        <li>
            <p>${data.firstName} ${data.lastName}</p>
        </li>
    `).join(' ')
}

scrollToBottom.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
})

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

fetchUsers()