const input = document.querySelector('input')
const btn = document.querySelector('button')
const error = document.querySelector('.error')
const qrContainer = document.querySelector('.qr-container')

btn.addEventListener('click', () => {
    console.log(input.value.length);
    if (input.value.length > 0) {
        generateQrCode(input.value)
    } else {
        qrContainer.innerHTML = ''
        error.textContent = `Enter a text...`
    }

})

function generateQrCode(text) {
    qrContainer.innerHTML = ''
    new QRCode(qrContainer, {
        text: text,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff"
    })
    input.value = ''
    error.textContent = ''
}