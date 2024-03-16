const hex = document.querySelector('.hex-color')
const hexCode = document.querySelector('.hex-code')
const hexBtn = document.querySelector('.hex-btn')
const hexCopy = document.querySelector('.hex-copy')

// generating random colours
hexBtn.addEventListener('click', () => {
    let char = '0123456789ABCDEF'
    let hexColour = '#'
    for (let i = 0; i < 6; i++) {
        hexColour += char.charAt(Math.floor(Math.random() * 16))
    }
    hexCode.innerHTML = `${hexColour}`
    hex.style.backgroundColor = `${hexColour}`
})

// copying hex value to clipboard
hexCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(hexCode.textContent)
    alert('HEX value copied to clipboard...')
})

const rgb = document.querySelector('.rgb-color')
const red = document.querySelector('#red')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')
const opacity = document.querySelector('#opacity')
const rgbCode = document.querySelector('.rgb-code')
const rgbBtn = document.querySelector('.rgb-btn')
const rgbCopy = document.querySelector('.rgb-copy')

// rgbBtn.addEventListener('click', () => {
//     const redValue = red.value
//     const greenValue = green.value
//     const blueValue = blue.value

//     rgbCode.innerHTML = `rgb(${redValue},${greenValue},${blueValue})`
//     rgb.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`
// })

rgb.addEventListener('click', () => {
    rgbCode.innerHTML = `rgba(${red.value},${green.value},${blue.value},${opacity.value})`
    rgb.style.backgroundColor = `rgba(${red.value},${green.value},${blue.value},${opacity.value})`
})
rgbCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(rgbCode.textContent)
    alert('RGB value copied to clipboard...')
})