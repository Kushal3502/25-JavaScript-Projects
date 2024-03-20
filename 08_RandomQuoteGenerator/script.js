const requestUrl = "https://api.quotable.io/quotes/random";
const refreshBtn = document.querySelector(".refresh");
const loader=document.querySelector('.loader')
const card = document.querySelector('.card')

function showLoader() {
    loader.classList.add('show')
    card.classList.add('hide')
}

function removeLoader() {
    loader.classList.remove('show')
    card.classList.remove('hide')
}

function fetchData() {
    showLoader()
    fetch(requestUrl)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            removeLoader()
            displayQuote(result[0])
        })
        .catch((error) => console.log(error));
}

function displayQuote(getData) {
    card.innerHTML = `
        <p class="author">Author : ${getData.author}</p>
        <p class="quote">Quote : ${getData.content}</p>
        <p class="date">Date : ${getData.dateAdded}</p>
        <p class="tag">Tags: ${getData.tags}</p>
    `
}

fetchData()

refreshBtn.addEventListener('click', fetchData)
