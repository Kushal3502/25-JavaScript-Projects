const cardsContainer = document.querySelector('.cards-container')
const pagination = document.querySelector('.pagination')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

function createCards() {
    for (let i = 1; i <= 100; i++) {
        const li = document.createElement('li')
        li.textContent = `Card ${i}`
        li.classList.add('card')
        li.setAttribute('card-no', i)
        cardsContainer.appendChild(li)
    }
}

createCards()

let cards
let pageLimit = 10
function createPaginationButtons() {
    pageLimit = 10
    cards = cardsContainer.querySelectorAll('li')
    const pageCount = Math.ceil(cards.length / pageLimit)

    for (let i = 1; i <= pageCount; i++) {
        const paginationBtn = document.createElement('button')
        paginationBtn.classList.add('pagination-btn')
        paginationBtn.setAttribute('page-idx', i)
        paginationBtn.textContent = `${i}`

        pagination.appendChild(paginationBtn)
    }
}

createPaginationButtons()

function filterCards(pageIdx) {
    const startIndex = (pageIdx - 1) * pageLimit;
    const endIndex = startIndex + pageLimit;

    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    manageDots(pageIdx)

    handlePrevNextBtn(pageIdx)
}

function manageDots(idx) {
    const dots = document.querySelectorAll('.pagination-btn')
    dots.forEach(dot => dot.classList.remove('active'))
    dots[idx - 1].classList.add('active')
}

function handlePrevNextBtn(pageIdx) {
    pageIdx == 1 ? prevBtn.setAttribute('disabled', true) : prevBtn.removeAttribute('disabled')
    pageIdx == 10 ? nextBtn.setAttribute('disabled', true) : nextBtn.removeAttribute('disabled')
}

let pageIdx = 1

prevBtn.addEventListener('click', () => {
    filterCards(--pageIdx)
})

nextBtn.addEventListener('click', () => {
    filterCards(++pageIdx)
})

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('pagination-btn')) {
        pageIdx = e.target.textContent
        e.target.classList.add('active')
        filterCards(pageIdx)
    }
})

filterCards(pageIdx)