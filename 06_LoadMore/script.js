const productContainer = document.querySelector('.product-container')
const loadMoreBtn = document.querySelector('.load-more-btn')

let cnt = 0;

async function getProducts() {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${cnt === 0 ? 0 : 10 * cnt}`)
        const result = await response.json()
        console.log(result);
        if (result) displayCards(result.products)
    } catch (error) {
        console.log(error);
    }
}

function displayCards(getProducts) {
    getProducts.forEach(item => {
        const itemWrapper = document.createElement('div')
        const productThumbnail = document.createElement('img')
        const productTitle = document.createElement('p')
        const productDescription = document.createElement('p')
        const productPrice = document.createElement('p')

        itemWrapper.classList.add('product-item-wrapper')
        productThumbnail.classList.add('product-thumbnail')
        productTitle.classList.add('product-title')
        productDescription.classList.add('product-desc')
        productPrice.classList.add('product-price')

        productThumbnail.src = item.thumbnail
        productTitle.textContent = item.title
        productDescription.textContent = item.description
        productPrice.textContent = item.price

        itemWrapper.appendChild(productThumbnail)
        itemWrapper.appendChild(productTitle)
        itemWrapper.appendChild(productDescription)
        itemWrapper.appendChild(productPrice)

        productContainer.appendChild(itemWrapper)

        if (cnt == 9) {
            loadMoreBtn.setAttribute("disabled", "true")
        }
    });
}

getProducts(cnt)

loadMoreBtn.addEventListener('click', () => {
    getProducts(++cnt)
})