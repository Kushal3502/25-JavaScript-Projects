const btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
    console.log(e.clientX, e.target.offsetLeft);
    const XCoordinate = e.clientX - e.target.offsetLeft
    const YCoordinate = e.clientY - e.target.offsetTop

    const rippleElement = document.createElement('span')
    rippleElement.style.top = `${YCoordinate}px`
    rippleElement.style.left = `${XCoordinate}px`

    btn.appendChild(rippleElement)

    window.setTimeout(() => {
        rippleElement.remove()
    }, 1000)
})