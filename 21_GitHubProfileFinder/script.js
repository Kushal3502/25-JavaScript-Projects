const search = document.querySelector('input')
const btn = document.querySelector('button')
const loader = document.querySelector('.loader')
const dataContainer = document.querySelector('.data-container')

async function fetchData() {
    showLoader()
    const response = await fetch(`https://api.github.com/users/${search.value}`)
    const data = await response.json()
    console.log(data);
    hideLoader()
    showData(data)
}

function showData(data) {
    const { name, avatar_url, public_repos, followers, following } = data
    dataContainer.innerHTML = `
        <p>Profile Name : ${name}</p>
        <img src="${avatar_url}">
        <p>Public Repos : ${public_repos}</p>
        <p>Followers : ${followers}</p>
        <p>Following : ${following}</p>  
    `
    search.value = ''
}

function showLoader() {
    loader.classList.add('show')
    dataContainer.classList.add('hide')
}

function hideLoader() {
    loader.classList.remove('show')
    dataContainer.classList.remove('hide')
}

btn.addEventListener('click', fetchData)