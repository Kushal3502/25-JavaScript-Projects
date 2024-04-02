const imgContainer = document.querySelector('.image-wrapper')
const btn = document.querySelector('button')

let count = 1

function loadImages(count) {
    for (let i = count; i <= count + 4; i++) {
        const img = document.createElement('img')
        img.src = `https://picsum.photos/300?random=${i}`
        imgContainer.appendChild(img)
    }
}

loadImages(count)

btn.addEventListener('click', () => {
    loadImages(count += 5)
})