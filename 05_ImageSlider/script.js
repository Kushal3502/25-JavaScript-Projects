const requestUrl = "https://picsum.photos/v2/list?page=1&limit=5"
const slider = document.querySelector('.slider')
const dotsContainer = document.querySelector('.dots-container')

//  <-------------------- generating slides -------------------->

async function generateSlides() {
    try {
        const response = await fetch(requestUrl)
        const slide = await response.json()
        if (slide.length > 0) displaySlide(slide)
    } catch (error) {
        console.log(error);
    }
}

function displaySlide(slide) {
    slider.innerHTML = slide.map((item) => `
        <div class='slide'>
            <img src=${item.download_url} alt=${item.id} />
        </div>
    `).join(' ')

    dotsContainer.innerHTML = slide.map((item, index) => `
        <span class='dot ${index === 0 ? "active" : ""}' data-slide=${index}></span>
`).join(' ')

}
generateSlides()

//  <-------------------- functionality -------------------->

setTimeout(() => {
    const slide = document.querySelectorAll('.slide')
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    let currentSlide = 0;

    function activeDot(currentSlide) {
        document.querySelectorAll('.dot').forEach((currentSlide) => currentSlide.classList.remove('active'))
        document.querySelector(`.dot[data-slide='${currentSlide}']`).classList.add('active')
    }
    function changeCurrentSlide(currentSlide) {
        slide.forEach(
            (slideItem, index) =>
            (slideItem.style.transform = `translateX(${100 * (index - currentSlide)
                }%)`)
        );
    }

    //  <-------------------- for prev button -------------------->

    prev.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        activeDot(currentSlide)
        changeCurrentSlide(currentSlide)
    })

    //  <-------------------- for next button -------------------->

    next.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide > slide.length - 1) {
            currentSlide = 0
        }
        activeDot(currentSlide)
        changeCurrentSlide(currentSlide)
    })

    //  <-------------------- for dots -------------------->

    dotsContainer.addEventListener('click', (e) => {
        currentSlide = e.target.dataset.slide
        activeDot(e.target.dataset.slide)
        changeCurrentSlide(e.target.dataset.slide)
    })
}, 1000)
